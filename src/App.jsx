import React from 'react'
import { Header } from './component/Header'
import Hero from './component/Hero'
import { Services } from './component/Service'
import { Footer } from './component/Footer'
import About from './component/About'

const App = () => {
  return (
    <div >
      <Header/>
      <Hero />
      <Services />
      <About/>
      <Footer/>
    </div>
  )
}

export default App