import React from 'react'
import { ContactLayout } from '../components'
import PageTransition from '../animation/pageTransition/PageTransition'

function Contact() {
  return (
    <PageTransition>
      <ContactLayout />
    </PageTransition>
  )
}

export default Contact