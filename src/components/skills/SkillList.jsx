import React from 'react'
import './SkillList.css'
import Skill from './Skill'
import ImageToSkill from '../../constants/ImageToSkill'

function SkillList({
    skills,
    divClass = {},
    className = {},
    imageSize = 50,
    fontSize = '0.8rem'
}) {
  return (
    <div className='skills-root' >
        <ul style={divClass}>
            {
              skills.map((skill, index) => (
                ImageToSkill[`${skill}`.toLowerCase()] &&
                <li key={index} style={className}><Skill image={ImageToSkill[skill.toLowerCase()]} fontSize={fontSize} size={imageSize} name={skill} /></li>
                
            ))
            }
        </ul>
    </div>
  )
}

export default SkillList