import React from 'react'
import './Layout.css'
import {ThemeContextSwitcher} from '../index'
import AboutMe from './containers/AboutMe'
import { Link } from 'react-router-dom'
import LinkedIn from './containers/LinkedIn'
import Github from './containers/Github'
import Project1 from './containers/Project1'
import Resume from './containers/Resume'
import Subscribe from './containers/Subscribe'
import Skills from './containers/Skills'
import AgeContainer from './containers/AgeContainer'
import Twitter from './containers/Twitter'
import AboutDetails from '../../constants/AboutDetails'

function Layout() {
  return (
    <div className='home-container'>
        <div className='age-container'>
            <AgeContainer />
        </div>
        <div className='about-me-container'>
            <Link to='/about'>
                <AboutMe />
            </Link>
        </div>
        <div className='skill-container'>
            <Skills />
        </div>


        <a href= {AboutDetails.linkedin} target='blank' className='linkedin-container'>
                <LinkedIn />
        </a>

        <Link to='/work/sportsplash' className='project-container-1'>
            <Project1 />
        </Link>

       
        <div className='switch-container'>
            <ThemeContextSwitcher />
        </div>
        
        <a href={AboutDetails.resume} target='blank' className='resume-container'>
            <Resume />
        </a>

        <div className='subscribe-container'>
            <Subscribe />
        </div>

        <a href={AboutDetails.github} target='blank' className='github-container'>
            <Github /> 
        </a>

        <a href={AboutDetails.twitter} target='blank' className='twitter-container'>
            <Twitter/>
        </a>

    </div>
  )
}

export default Layout