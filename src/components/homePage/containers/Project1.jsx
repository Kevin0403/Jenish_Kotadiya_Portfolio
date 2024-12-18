import React from 'react'
import './Project1.css'
import Skill from '../../skills/Skill'
import {SkillList} from '../../index'
import evpark from '../../../assets/evpark.jpg'
import ProjectDetails from '../../../constants/ProjectDetails'

function Project1() {
    const skills = [
        'react',
        'springboot',
        'mysql'
]

  const project = ProjectDetails[0];
  return (
    <div className='project1-root'>
        <div className='detail-container'>
            <h2 className='title'>{project.title} : {project.subTitle}</h2>
            <p className='description'>
            {project.description}
            </p>
            {/* <h4>Technology used</h4>
            <div className='skills'>
                <SkillList skills={skills} imageSize={40}/>
            </div> */}
        </div>
        <div className='image-container'>
          <img src={evpark} alt='project1'/>
        </div>

    </div>
  )
}

export default Project1