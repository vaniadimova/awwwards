import React from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Feautures from "./components/Feautures"
import Story from "./components/Story"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

const App = () => {
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden" >
      <Navbar />
      <Hero />
      <About />
      <Feautures />
      <Story />
      <Contact />
      <Footer />
    
  </main>      
    
  )
}

export default App

