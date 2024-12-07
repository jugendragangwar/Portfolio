import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import AboutSection from './Pages/AboutSection'
import Contectme from './Pages/Contectme'
import Project from './Pages/Project'
import Services from './Pages/Services'
import Skills from './Pages/Skills'



const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/AboutSection' element={<AboutSection />} />
        <Route path='/Contectme' element={<Contectme />} />
        <Route path='/Project' element={<Project />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Skills' element={<Skills />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
