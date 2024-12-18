import React from 'react'
import './Github.css'
import github from '../../../assets/icons/github.png'


function Github() {
  return (
    <div className='github-root'>
        <img src={github} width={65} alt="github" />
    </div>
  )
}

export default Github