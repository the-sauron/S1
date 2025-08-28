import React from 'react'
import { Header } from './component/Header'
import Hero from './component/Hero'
import { Services } from './component/Service'
import { Footer } from './component/Footer'

const App = () => {
  return (
    <div >
      <Header/>
      <Hero />
      <Services />
      <Footer/>
    </div>
  )
}

export default App