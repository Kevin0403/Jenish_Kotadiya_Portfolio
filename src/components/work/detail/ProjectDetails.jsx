import React from 'react'
import './ProjectDetails.css'
import { Link } from 'react-router-dom'
import projects from '../../../constants/ProjectDetails'
import { motion } from 'framer-motion'
import TableOfContents from '../../tableOfContents/TableOfContents'
import githubImage from '../../../assets/icons/github.png'

function ProjectDetails({id}) {

    const project = projects.find(project => project.id === id)
    console.log(projects)
  return (
    <div className='project-details-root'>
        <div className='navigation'>
            <Link to="/">Home </Link>
            <span>{`  >  `}</span>
            <Link to="/work">Work </Link>
        </div>
        <div className='title'>
            <h2>{project.title}</h2>
            <p>{project.subTitle}</p>
            <motion.div
                whileHover={{ scale: 1.1}}
            className='github-link'
            >
                <a href={project.link} target='blank'>
                    <img src={githubImage} width={40} alt="github" />
                </a>
            </motion.div>
        </div>
        <div className='details'>
            <div className='left'>
                <div className='image'>
                    <a href={project.link} target='blank'>

                    <motion.img
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    transition={{ duration: 0.25}}
                    whileHover={{ scale: 1.08}}
                    src={project.image} alt="" />
                    </a>
                </div>
                <div className='info'>
                    <p id='introduction'>{project.description}</p>
                    <div id='technology' className='technology'>
                        <h2>Technology</h2>
                        <ul>
                            {
                                project.tech.map((tech, index) => (
                                    <li key={index}>
                                        <p>
                                        <h4>{tech.name}:</h4>
                                            {tech.description}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div id='design' className="design">
                        <h2>Design</h2>
                        <p>{project.design}</p>
                    </div>
                    <div id='lesson-learned' className="lesson-learned">
                        <h2>Lesson Learned</h2>
                        <p>{project['lesson learned']}</p>
                    </div>
                </div>
            </div>
            <div className='right'>
                <TableOfContents data={['introduction', 'technology', 'design', 'lesson-learned']}/>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails