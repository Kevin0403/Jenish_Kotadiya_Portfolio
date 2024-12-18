import React from 'react'
import './Skills.css'
import ImageToSkill from '../../../constants/ImageToSkill'
import SkillList from '../../skills/SkillList'
import { Margin } from '@mui/icons-material'

function Skills() {
    const skills = [
      "Python",
      "Java",
      "C++",
      "HTML",
      "CSS",
      "Javascript",
      "sql",
      "Git",
      "GitHub",
    ]
  return (
    <div className='skills-root-container'>
        <div>
            <h2 className='skills-heading'>Skills</h2>
        </div>
        <div>

        <SkillList skills={skills} imageSize={60} divClass={{}} fontSize='1rem' className={{margin : '0.5rem'}}/>
        </div>
    </div>
  )
}

export default Skills