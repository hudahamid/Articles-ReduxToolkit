
import React from 'react'
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import DashboardPage from './pages/Dashboard'
import PostsPage from './pages/Posts'
import SinglePost from './pages/SinglePost'


const App = () => {
  return (
    
    <Router>
      <Routes>
         <Route exact path="/" element={ <DashboardPage/>} />
         <Route  path="/posts" element={<PostsPage/>} />
         <Route path="/posts/:id" element={<SinglePost/>} />
        </Routes>
    </Router>
  )
}

export default App