import React from 'react'
import './Resume.css'
import resume from '../../../assets/icons/resume.png'
import Skill from '../../skills/Skill'

function Resume() {
  return (
    <div className='resume-root'>
        <Skill name='Resume' image={resume} size={80}/>
    </div>
  )
}

export default Resume