import React from 'react'
import {motion} from 'framer-motion'
import { useAtom } from 'jotai'
import { currentProjectAtom, projects } from './Projects'

const Section  = (props) => {
    const {children} = props


    return(
        <>
            <motion.section className={`
                h-screen w-screen p-8 max-w-screen-2xl mx-auto
                flex flex-col items-start justify-center
                `}
                
                initial={{
                    opacity: 0,
                    y: 50
                }}
                
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition:{
                        duration: 1,
                        delay:0.6
                    }
                }}
            >

                {children}
        
            </motion.section>
           
                
        </>
    )
}


export const Interfaces = () => {
  return (
    <div className="flex flex-col items-start w-screen">
    
       
                <AboutSection />
                <EducationSection />
                <SkillsSection />
                <ProjectsSection / >
                <ContactSection />
        
        
    
    </div>
  )
}


const AboutSection = () => {

    return(
            <Section>
                    <h1 className='text-6xl font-extrabold leading-snug'>
                        Soy
                    <br/>
                    <span className='bg-white px-1 italic'>Jaime Santiago Gasca Farrera</span>
                    </h1>
                    <motion.p className='text-lg text-gray-800 mt-4'

                        initial={{
                            opacity: 0,
                            y: 25
                        }}
                        
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            duration: 1,
                            delay: 1.5
                        }}
                    >
                        Soy Odontologo en proceso y me gusta cogerme a mis jefas doctoras XD,

                    </motion.p>
                    <motion.p className='text-lg text-gray-800 mt-4'

                        initial={{
                            opacity: 0,
                            y: 25
                        }}
                        
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            duration: 1,
                            delay: 1.5
                        }}
                    >
                       cuiden a sus hijas XD,
                        
                    </motion.p>
                    <motion.button className={`bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-8`}
                    
                            initial={{
                                opacity: 0,
                                y: 25
                            }}
                            
                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}

                            transition={{
                                duration: 1,
                                delay: 1.8
                            }}
                    
                    >
                        Contactame por Tinder si quieres
                    </motion.button>
            </Section>
    )
    
}


const EducationSection = () => {
    return(
        <>
        
            <Section>
                <h1 className='text-4xl font-extrabold leading-snug'>
                    Educación
                </h1>
                <motion.p className='text-2xl font-extrabold text-gray-800 mt-6 border-b-2 border-black'
                
                    initial={{
                        opacity: 0,
                        y: 20
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 1,
                        delay: 0.7
                    }}
                
                >
                    Odontologia 
                   
                </motion.p>
                <motion.p className='text-xl  text-gray-800 mt-6'
                
                    initial={{
                        opacity: 0,
                        y: 20
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 1,
                        delay: 0.9
                    }}
                
                >
                    Universidad UVT , 2018 - 2024
                   
                </motion.p>
                <motion.p className='text-2xl font-extrabold text-gray-800 mt-6 border-b-2 border-black'
                
                    initial={{
                        opacity: 0,
                        y: 20
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 1,
                        delay: 0.7
                    }}
                
                >
                   Asistente en Odontologia
                   
                </motion.p>
                <motion.p className='text-xl  text-gray-800 mt-6'
                
                    initial={{
                        opacity: 0,
                        y: 20
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    transition={{
                        duration: 1,
                        delay: 0.9
                    }}
                
                >
                    La doctora , 2024
                   
                </motion.p>
            </Section>
        
        </>
    )
}


const skills = [
    {
        title: "Quitar Muelas",
        level: 70
    },
    {
        title: "Cirgugias",
        level: 70
    },
    {
        title: "Quitar Caries",
        level: 80
    },
   

]


const languages = [
    {
        title:"Espanol",
        level: 100
    },
   
]


const SkillsSection = () => {
    return(
        <Section>
            <motion.div whileInView={"visible"}>
                <h2 className='text-5xl font-bold'>Skills</h2>
                <div className='mt-8 space-y-4'>
                    {skills.map((skill,index) => (
                        <div className='w-64' key={index}>
                            <motion.h3 className='text-xl font bold text-gray-800'
                            
                            initial={{
                                opacity: 0,
                               
                            }}
                            
                            variants={{
                                visible:{
                                    opacity: 1,
                                    transition:{
                                        duration: 1,
                                        delay: 1 + index * 0.2
                                    }
                                }
                            }}

                            // whileInView={{
                            //     opacity: 1,
                                
                            // }}
    
                            // transition={{
                            //     duration: 1,
                            //     delay: 1 + index * 0.2
                            // }}

                            >
                                {skill.title}
                            </motion.h3>
                            <div className='h-2 w-full bg-gray-200 rounded-full mt-2'>
                                <motion.div 
                                    className='h-full bg-indigo-500 rounded-full'
                                    style={{width: `${skill.level}%`}}
                                    initial={{
                                        scaleX: 0,
                                        originX: 0
                                    }}

                                    variants={{
                                        visible:{
                                            scaleX: 1,
                                            transition:{
                                             duration: 1,
                                             delay: 1 + index * 0.1
                                            }
                                        }
                                        
                                    }}

                                    
                                />
                            </div>    
                        </div>
                    ))

                    }
                </div>
                <div>
                    <h2 className='text-5xl font-bold mt-10'>Idiomas</h2>
                    <div className='mt-8 space-y-4'>
                        {languages.map((lgs,index) => (
                            <div className='w-64' key={index}>
                            <motion.h3 className='text-xl font bold text-gray-800'
                            
                            initial={{
                                opacity: 0,
                               
                            }}
                            
                            variants={{
                                visible:{
                                    opacity: 1,
                                    transition:{
                                        duration: 1,
                                        delay: 2 + index * 0.2
                                    }
                                }
                            }}

                            // whileInView={{
                            //     opacity: 1,
                                
                            // }}
    
                            // transition={{
                            //     duration: 1,
                            //     delay: 1 + index * 0.2
                            // }}

                            >
                                {lgs.title}
                            </motion.h3>
                            <div className='h-2 w-full bg-gray-200 rounded-full mt-2'>
                                <motion.div 
                                    className='h-full bg-indigo-500 rounded-full'
                                    style={{width: `${lgs.level}%`}}
                                    initial={{
                                        scaleX: 0,
                                        originX: 0
                                    }}

                                    variants={{
                                        visible:{
                                            scaleX: 1,
                                            transition:{
                                             duration: 1,
                                             delay: 2 + index * 0.1
                                            }
                                        }
                                        
                                    }}

                                    
                                />
                            </div>    
                        </div>
                        ))

                        }
                    </div>
                </div>


            </motion.div>
        </Section>
    )
}


const ProjectsSection = () => {

    const [currentProject,setCurrentProject] = useAtom(currentProjectAtom)

    const nextProject = () => {
        setCurrentProject((currentProject + 1) % projects.length)
    }

    const previousProject = () => {
        setCurrentProject((currentProject - 1 + projects.length) % projects.length)
    }

    return(
        <Section>
            <div className='flex w-full h-full gap-8 items-center justify-center' >
                <button className='hover:text-indigo-600 transition-colors' onClick={previousProject}>
                 ← Anterior 
                </button>
                <h2 className='text-5xl font-bold'>Proyectos</h2>
                <button className='hover:text-indigo-600 transition-colors' onClick={nextProject}>
                    Siguiente →
                </button>
            </div>
        </Section>
    )
}


const ContactSection = () => {
    return(
        <Section>
            <h2 className='text-5xl font-bold'>Contactame</h2>
            <div className='mt-8 p-8 rounded-md bg-white w-96 max-w-full'>
                <form>
                    <label htmlFor="name" className='font-medium text-gray-900 block mb-1'>
                        Name
                    </label>
                    <input 

                        type='text'
                        name='name'
                        id="name"
                        className='block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3'
                    
                    />
                     <label htmlFor="email" className='font-medium text-gray-900 block mb-1 mt-8'>
                        Email
                    </label>
                    <input 

                        type='text'
                        name='email'
                        id="email"
                        className='block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3'
                    
                    />

                    <label htmlFor="message" className='font-medium text-gray-900 block mb-1 mt-8'>
                        Message
                    </label>
                    <textarea 

                        
                        name='message'
                        id="message"
                        className='block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-3'
                    
                    />

                    <button className='bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16'>
                        Submit
                    </button>
                    
                </form>
            </div>
        </Section>
    )
}