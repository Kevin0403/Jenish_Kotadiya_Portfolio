import React from 'react'
import './TechName.css'
import { motion } from 'framer-motion'

function TechName({tech}) {
  return (
    <div className='tech-name-root'>
        <ul>
            {
                tech && tech.map((tech, index) => {
                    return (
                        <motion.li 
                        whileHover={{ scale: 1.08}}
                        transition={{ duration: 0.1}}
                        key={index}>
                            <span>{tech.name}</span>
                        </motion.li>
                    )
                })
            }
        </ul>
    </div>
  )
}


export default TechName