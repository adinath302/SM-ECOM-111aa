import React from 'react'
import "./App.css"
import Navbar from "./component/Navbar/Navbar.jsx"
import Hero from "./component/Hero/Hero.jsx"
import Cards from './component/Cards/Cards.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Cards/>
    </>
  )
}

export default App