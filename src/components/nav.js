import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
  <nav>
    <section className='bg-cyan-400 flex px-20 py-3 justify-items-center  text-white text-2xl' >
      <Link to="/" className='ml-20'>Dashboard</Link>
      <Link to="/posts" className='ml-6 '>Posts</Link>
    </section>
  </nav>
)