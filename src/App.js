
import React from 'react'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/Dashboard'
import PostsPage from './pages/PostsPage'
import SinglePost from './pages/SinglePost'
import { Navbar } from './components/nav'


const App = () => {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
         <Route exact path="/" element={ <DashboardPage/>} />
         <Route  path="/posts" element={<PostsPage/>} />
         <Route path="/posts/:id" element={<SinglePost/>} />
        </Routes>
    </Router>
  )
}

export default App