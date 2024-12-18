import React from 'react'
import { AboutLayout } from '../components'
import PageTransition from '../animation/pageTransition/PageTransition'

function About() {
  return (
    <PageTransition>

      <AboutLayout />
    </PageTransition>
  )
}

export default About