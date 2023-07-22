import { Float, MeshDistortMaterial, OrbitControls, useScroll } from "@react-three/drei";
import { Office } from "./Office";
import { motion } from "framer-motion-3d";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import * as THREE from 'three';
import { Projects } from "./Projects";


export const Experience = (props) => {

  const {menuOpened} = props
  const {viewport} = useThree()
  const data = useScroll()

  const [section,setSection] = useState(0)

  const cameraPositionX = useMotionValue()
  const cameraLookAtX = useMotionValue()

  useEffect(() => {

      animate(cameraPositionX,menuOpened ? -5 : 0,{
        ...framerMotionConfig
      })

      animate(cameraLookAtX,menuOpened ? 5 : 0,{
        ...framerMotionConfig
      })

  },[menuOpened])

  const characterContainerAboutRef = useRef()

  const [characterAnimation,setCharacterAnimation] = useState("Typing")

  useEffect(() => {

    setCharacterAnimation("Falling Idle")

    setTimeout(() => {
      setCharacterAnimation(section === 0 ? "Tut Hip Hop Dance" : "Tut Hip Hop Dance")


      if(section === 2)
      {
        setCharacterAnimation("Tut Hip Hop Dance")
      }

      if(section === 4)
      {
        setCharacterAnimation("Tut Hip Hop Dance")
      }
      
    },600)

  },[section])

  useFrame((state) => {


    let curSection = Math.floor(data.scroll.current * data.pages)

    if(curSection > 4)
    {
      curSection = 4
    }

    if(curSection != section)
    {
      setSection(curSection)
    }

    state.camera.position.x = cameraPositionX.get()
    state.camera.lookAt(cameraLookAtX.get(),0,0)

    const position = new THREE.Vector3()
    characterContainerAboutRef.current.getWorldPosition(position)
    //console.log([position.x,position.y,position.z])

    const quaternion = new THREE.Quaternion()
    characterContainerAboutRef.current.getWorldQuaternion(quaternion)
    const euler = new THREE.Euler()
    euler.setFromQuaternion(quaternion,"XYZ")

    //console.log([euler.x,euler.y,euler.z])
  })

  return (
    <>
      
      
       <motion.group position={[1.7, 0.15, 2.5]} rotation-x={11} 
       rotation-y={6.4} rotation-z={-4.6} rotation={[-Math.PI, 0.548, -Math.PI]} 
       animate={"" + section}
       transition={{
        duration: 0.6
       }}
       variants={{
        0:{
          // scaleX: 0,
          // scaleY: 0,
          // scaleZ: 0
        },
        1:{
          y: -viewport.height + 1,
          x: 0.1,
          z: 7,
          rotateX: 29.8,
          rotateY: 0,
          rotateZ: 0,
          
        },
        2:{
          y: -viewport.height * 2 + 1,
          x: 0.35,
          z: 7,
          rotateX: 29.8,
          rotateY: 0,
          rotateZ: 7,
          
        },
        3:{
          y: -viewport.height * 3 + -0.8,
          x: -3,
          z: 0,
          rotateX: 29.8,
          rotateY: 0,
          rotateZ: Math.PI / 2,
          
        },
        4:{
          y: -viewport.height * 4 + 1,
          x: 0.1,
          z: 8.5,
          rotateX: 29.8,
          rotateY: 0,
          rotateZ: 0,
          
        }
       }}>

          {/* <Avatar animation={section === 0 ? "Typing" : "Breathing Idle"} />  */}
          <Avatar animation={characterAnimation} />

       </motion.group>

      <ambientLight intensity={1} />
      
      <motion.group position={[1.5,2,3]} scale={[0.9,0.9,0.9]} rotation-y={-Math.PI / 4} animate={{
        y: section === 0 ? 0 : -1
      }} >
            <Office section={section}   />
     
            <group ref={characterContainerAboutRef} name="CharacterSpot" position={[-0.224, 0.22, -0.632]} rotation-x={11} rotation-y={6.4} rotation-z={2.5} rotation={[-Math.PI, 0.548, -Math.PI]}>

                


            </group>
            

      </motion.group>





        {/*SKILLS*/}
      <motion.group position={[0,-1.5,-10]} 
      
        animate={{
          z: section === 1 ? 0 : -10,
          y: section === 1 ? -viewport.height : -1.5,
        }}

      >       

      <directionalLight intensity={0.4} position={[-5,3,5]} />
            <Float>
              <mesh position={[1,-3,-15]} scale={[2,2,2]}>
                  <sphereGeometry />
                  <MeshDistortMaterial 

                    opacity={0.8}
                    transparent
                    distort={0.4}
                    speed={4}
                    color={"red"}
                  
                  
                  />
              </mesh>
            </Float>


            <Float>
              <mesh position={[3,1,-18]} scale={[3,3,3]}>
                  <sphereGeometry />
                  <MeshDistortMaterial 

                    opacity={0.8}
                    transparent
                    distort={0.4}
                    speed={4}
                    color="yellow"
                  
                  
                  />
              </mesh>
            </Float>


            <Float>
              <mesh position={[-3,-1,-11]} scale={[1.4,1.4,1.4]}>
                  <boxGeometry />
                  <MeshDistortMaterial 

                    opacity={0.8}
                    transparent
                    factor={1}
                    speed={4}
                    color={"blue"}
                  
                  
                  />
              </mesh>
            </Float>


            <Float>
              <mesh position={[-4,-6,-11]} scale={[1.6,1.6,1.6]}>
                  <cylinderGeometry />
                  <MeshDistortMaterial 

                    opacity={0.8}
                    transparent
                    factor={1}
                    speed={6}
                    color={"green"}
                  
                  
                  />
              </mesh>
            </Float>

            {/* <group scale={[2,2,2]} position-y={-1.5} rotation-x={11} >
              <Avatar animation={section === 0 ? "Falling Idle" : "Breathing Idle"} />
            </group> */}


      </motion.group>

      <Projects />
      

    </>
  );
};
