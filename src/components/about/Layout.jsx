import React from 'react'
import './Layout.css'
import AboutDetails from '../../constants/AboutDetails'
import {motion} from 'framer-motion'
import { Opacity } from '@mui/icons-material'
import {SkillList, Link} from '../index'

function Layout() {
  return (
    <div className='common-container about-container'>
        <div>
            <h2 className='heading'>About</h2>
            <p className='sub-heading'>Want to know more about me?<br /> You've come to the right place 🎓</p>
        </div>
        <div className='details'>
            <div className='info'>
                <h2 className='heading'>{AboutDetails.title} </h2>
                <div className='description'>
                    {
                        (AboutDetails.description).map((detail, index) => {
                            return (
                                <p>
                                    {detail}
                                </p>
                            )
                        })
                    }
                    <p>
                        Fell free to {<Link link={'/contact'} text={'contact me!'}/>}  📭
                    </p>
                </div>
            </div>
            <div className='image'  >
     
                <motion.img 
                drag
                dragConstraints={{
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                }}
                initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
                src={AboutDetails.image} alt="" />

            </div>
        </div>
        <div className='skill-exp'>
            <div className='skills'>
                <h2 className='heading'>Skills</h2>
                <p>{AboutDetails.skills.description}</p>
                <motion.div 
                initial={{ opacity: 0 , scale: 0.5}}
                whileInView={{ opacity: 1 , scale: 1}}
                viewport={{ once: false}}
                transition={{ duration: 0.5}}
                className='skills'>
                    <SkillList skills={AboutDetails.skills.list} imageSize={60} />
                    </motion.div>
            </div>
            {/* <div className='experience'>
                <h2 className='heading'>Experience</h2>
                <ul className='experiences'>
                    {
                        (AboutDetails.experience).map((exp, index) => {
                            return (
                                <li className='exp' key={index}>
                                <a href={exp.link || ""} target='blank' >
                                    <h3>{exp.title}</h3>
                                    <p>{exp.description}</p>
                                    <p>{exp.duration}</p>
                                </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div> */}
        </div>
        <div className='coll-contact'>
            <div className='collabration'>
                <h2 className='heading'>Collaboration</h2>
                <p>{AboutDetails.collaboration}
                    <br />
                    <Link link={'mailto:' + AboutDetails.email} text={AboutDetails.email} />
                </p>
            </div>
            <div className='contact'>
                <h2 className='heading'>Contact</h2>
                <p>You can contact me directly from my {<Link link="/contact" text={'website'}/>}, via {<Link link={'mailto:' + AboutDetails.email} text={'email'}/>}, {<Link link={AboutDetails.linkedin} text={'LinkedIn'}/>} or other social media mentioned on this website (I don't have any other accounts so beware of scams and make sure you are talking to the right person). I reply to all messages! Ask me anything 🌟</p>
            </div>

        </div>
    </div>
  )
}

export default Layout