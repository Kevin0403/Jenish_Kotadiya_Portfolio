import React from 'react'
import './Link.css'
import { HiArrowUpRight } from 'react-icons/hi2'

function Link({link, text, target='blank'}) {
  return (
    <div className='underline-link'>
        <a className="link" href={link} target={target}>{text}<HiArrowUpRight /></a>
    </div>
  )
}

export default Link