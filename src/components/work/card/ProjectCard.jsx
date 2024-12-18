import React from 'react'
import './ProjectCard.css'
import { motion, AnimatePresence } from 'framer-motion'
import TechName from '../techName/TechName'
import { Scale } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function ProjectCard({project}) {
  const iconVariants = {
    default: { scale: 1},
    hover: { scale: 1.08 },
  }
  return (
    <div className='project-card-root'>
        <Link to={`${project.id}`}>
            <motion.article
            initial="default" whileHover="hover"
            >
            <div className='img'>
                  <motion.img
                  variants={iconVariants}
                  // whileHover={{ scale: 1.08}}
                  src={project.image} alt="" />
            </div>
            <div className='content'>
                <h3>{project.title}</h3>
                <p>{project.subTitle}</p>
                <div>
                    {
                        project.tech && <TechName tech={project.tech}/>
                    }                  
                </div>
            </div>    
            </motion.article>   
        </Link>
    </div>
  )
}

export default ProjectCard