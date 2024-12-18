import React from 'react'
import { WorkLayout } from '../components'
import PageTransition from '../animation/pageTransition/PageTransition'

function Work() {
  return (
    <PageTransition>
      <WorkLayout />
    </PageTransition>
  )
}

export default Work