import { Image, Text } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { animate, useMotionValue } from 'framer-motion'
import {motion} from "framer-motion-3d"
import { atom, useAtom } from 'jotai'
import React, { useEffect, useRef } from 'react'


export const projects = [
    {
        title: "Generador de Blogs SEO",
        url: "https://hammerhead-app-kykyv.ondigitalocean.app",
        image: "projects/blogs.jpg",
        description: "SaaS para generar Blogs SEO con NextJS,AuthO,MongoDB y OpenAI"
    },
    {
        title: "Generador de Dibujo",
        url: "https://saulaugustogascafarreradeveloper.github.io/DrawGenerator/",
        image: "projects/dibujo.jpg",
        description: "Genera un dibujo en un canvas a partir de un objeto en especifico y obten las coordenadas de cada imagen en un json desarollado en Javascript, Html y CSS"
    },
    {
        title: "Generador de Blogs SEO",
        url: "https://hammerhead-app-kykyv.ondigitalocean.app",
        image: "projects/blogs.jpg",
        description: "SaaS para generar Blogs SEO con NextJS,AuthO,MongoDB y OpenAI"
    },
    {
        title: "Generador de Dibujo",
        url: "https://saulaugustogascafarreradeveloper.github.io/DrawGenerator/",
        image: "projects/dibujo.jpg",
        description: "Genera un dibujo en un canvas a partir de un objeto en especifico y obten las coordenadas de cada imagen en un json desarollado en Javascript, Html y CSS"
    }
]


const Project = (props) => {

    const {project,highlighted} = props

    const background = useRef()
    const bgOpacity = useMotionValue(0.4)

    useEffect(() => {

        animate(bgOpacity,highlighted ? 0.85 :0.4)

    },[highlighted])

    useFrame(() => {
        background.current.material.opacity = bgOpacity.get()
    })

    return(
        <group {...props}>
            <mesh position-z={-0.6}  onClick={() => window.open(project.url,"_blank")} ref={background} >
            <planeGeometry args={[2.6, 2.6]} />
            <meshBasicMaterial color="black" transparent opacity={0.75} />
            </mesh>

            <Image scale={[2,1.2,1]} url={project.image} toneMapped={false} position-y={0.3} />
            <Text maxWidth={2} anchorX={"left"} anchorY={"top"} fontSize={0.15} position={[-1,-0.4,0]}>{project.title.toUpperCase()}</Text>
            <Text maxWidth={2} anchorX={"left"} anchorY={"top"} fontSize={0.09} position={[-1,-0.6,0]}>{project.description.toUpperCase()}</Text>
        </group>
    )
}


export const currentProjectAtom = atom(Math.floor(projects.length / 2))



export const Projects = () => {


    const {viewport} = useThree()
    const [currentProject] = useAtom(currentProjectAtom)

  return (
   <>
    <group position-y={-viewport.height * 2.87 + 0.1}>
        {
            projects.map((project,i) => (
                <motion.group key={"project_"+i} position={[
                    i * 2.8,-1,-3
                ]}
                
                animate={{
                    x: 0 + (i - currentProject) * 2.8,
                    y: currentProject === i ? 0 : -0.1,
                    z: currentProject === i ? -2 : -3,
                    rotateX: currentProject === i ? 0 : -Math.PI / 3,
                    rotateZ: currentProject === i ? 0 : -0.1 * Math.PI
                }}
                
                >
                    <Project project={project} highlighted={i===currentProject} />
                </motion.group>
            ))
        }
    </group>
   </>
  )
}
