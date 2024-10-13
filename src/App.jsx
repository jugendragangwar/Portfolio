import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import About from './Pages/About'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/contect' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
