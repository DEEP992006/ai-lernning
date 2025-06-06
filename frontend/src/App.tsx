import React, { useState } from 'react'
import Hero from './layout/Hero'
import Features from './Features/features/components/Features'
import Footer from './layout/Footer'

const App = () => {
  return (
    <div className='pt-16 '>
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default App