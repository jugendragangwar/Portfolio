import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
// import AboutSection from './Pages/AboutSection'
import Contectme from './Pages/Contectme'
import Skills from './Pages/Skills'
import Navbar from './Components/Navbar'



const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/AboutSection' element={<AboutSection />} /> */}
        {/* <Route path='/Project' element={<Project />} /> */}
        <Route path='/contectme' element={<Contectme />} />
        <Route path='/Skills' element={<Skills />} />
        {/* <Route path='/socialicons' element={<SocialIcons/>} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
