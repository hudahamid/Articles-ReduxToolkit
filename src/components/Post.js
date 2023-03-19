
import React from 'react'
import { Link } from 'react-router-dom'

export const Post = ({ post, excerpt }) => (
  <article className={excerpt ? 'post-excerpt' : 'post'}>
    <h2 className='mt-2 text-xl'>{post.title}</h2>
    <p className='pb-4 mb-4'>{excerpt ? post.body.substring(0, 100) : post.body}</p>

    {excerpt && (
      <Link to={`/posts/${post.id}`} className="button my-4 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded">
        View Post
      </Link>
    )}
  </article>
)
