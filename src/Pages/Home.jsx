import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <h1 className='text-center bg-slate-300'>Home Page</h1>
      <Link to='/contect'><button className='bg-slate-800 text-white mt-6 rounded-sm w-20'>Contact</button></Link>
      <Link to='/about'><button className='bg-slate-800 text-white mt-6 rounded-sm w-20'>About me</button></Link>
    </div>
  )
}

export default Home
