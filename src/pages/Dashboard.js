import React from 'react'
import { Link } from 'react-router-dom'

const DashboardPage = () => (
  <div  className=' mx-10 my-6 px-20  justify-items-center ' >
    <div className=' items-center justify-center '>
    <h1 className='text-cyan-400 text-6xl pb-10 px-10 '>Dashboard</h1>
    <p className=' text-xl  px-10 py-4'>This is the dashboard.</p>
    {/* 11. go to posts page  */}
    <Link to="/posts" className="button my-6 mx-10 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
      View Posts
    </Link>
    </div>
    
  </div>
)

export default DashboardPage