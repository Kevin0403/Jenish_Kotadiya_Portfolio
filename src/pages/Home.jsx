import React from 'react'
import { HomeLayout } from '../components'
import PageTransition from '../animation/pageTransition/PageTransition'

function Home() {
  return (
    <PageTransition>
      <HomeLayout />
    </PageTransition>
  )
}

export default Home