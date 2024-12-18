import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
import {ThemeContextSwitcher} from '../index'
import logo from '../../assets/logo.png'
import sendIcon from '../../assets/icons/send.png'
import { Link } from 'react-router-dom'
import Logo from '../logo/Logo'
import { IoMdPaperPlane } from "react-icons/io";
import { motion } from 'framer-motion'

function Header() {
    const [currentTab , setCurrentTab] = useState('home')
    const tabs = [
        {
            name: 'All',
            to: '/'
        },
        {
            name: 'About',
            to: '/about'
        },
        // {
        //     name: 'Blog',
        //     to: '/blog'
        // },
        {
            name: 'Work',
            to: '/work'
        }
    ]
  return (
    <div>
        <nav className='container'>
            <div className='logo'>
            <Logo />
            </div>
            <ul className='nav-container'>
                {
                    tabs.map((tab, index) => (
                        <li key={index}>
                            <NavLink to={tab.to} className={({isActive})=> {isActive && setCurrentTab(tab.name) + ' prevent-select'}}>
                                {tab.name}
                            </NavLink>
                            {
                                currentTab === tab.name && <motion.div layoutId='underline' transition={{type:'spring', bounce:0.25, duration:0.4}} className='selected'>
                                    {tab.name}
                            </motion.div>
                            }
                        </li>
                    ))
                }
            </ul>
            <div className='extra-container'>
                <div className='switch'>
                    <ThemeContextSwitcher />
                </div>
                <div className='contact'>
                    <NavLink to='/contact' className={({isActive})=> {isActive && setCurrentTab('contact')}}>
                        Contact <IoMdPaperPlane   className='icon'/>
                        </NavLink>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header

