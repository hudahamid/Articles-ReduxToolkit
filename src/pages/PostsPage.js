import React , { useEffect } from "react";



import { useDispatch, useSelector } from 'react-redux'

import { fetchPosts, postsSelector } from '../slices/Posts'

import { Post } from '../components/Post'

const PostsPage = () => {
  const dispatch = useDispatch()
  const { posts, loading, hasErrors } = useSelector(postsSelector)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>
    if (hasErrors) return <p>Unable to display posts.</p>

    return posts.map(post => <Post key={post.id} post={post} excerpt />)
  }

  return (
    <section className=" mx-10 my-3 px-20  justify-items-center" >
      <h1 className='text-cyan-400 text-6xl pb-10 px-10'>Posts</h1>
      <div className=' text-sm pb-10 px-10 py-1'>{renderPosts()}</div>
      
    </section>
  )
}

export default PostsPage

