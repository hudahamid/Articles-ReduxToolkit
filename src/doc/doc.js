//  Redux toolkit
//  1.Store
//   we no longer have to bring Redux DevTools and Redux Thunk
//  into the index.js file. Now we only need configureStore, instead of createStore
 
 import React from 'react'
import { render } from 'react-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

import App from '../App'
import rootReducer from '../slices'

import './index.css'

const store = configureStore({ reducer: rootReducer })

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
//..........................................................................................



//  2.Slices
//  Instead of dealing with reducers, actions, and all as separate files and individually
//   creating all those action types, RTK gives us the concept of slices.
//   A slice automatically generates reducers, action types, and action creators.
//    As such, you'll only have to create one folder - slices.
import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  loading: false,
  hasErrors: false,
  posts: [],
}

// **We'll make all the same changes, but note that we're no longer returning
//  the entire state - we're just mutating state. It's still
//  immutable under the hood, but this approach may be easier and faster for some.
//   If preferred, you can still return the whole state as an object.
// A slice for posts with our three reducers
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state) => {
      state.loading = true
    },
    getPostsSuccess: (state, { payload }) => {
      state.posts = payload
      state.loading = false
      state.hasErrors = false
    },
    getPostsFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
  },
})

// The actions that get generated are the same, we just don't
//  have to write them out individually anymore. From the same file, 
//  we can export all the actions, the reducer,
//  the asynchronous thunk, and one new thing - a selector, which
//   we'll use to access any of the state from a React component instead of using connect.
// Three actions generated from the slice
export const { getPosts, getPostsSuccess, getPostsFailure } = postsSlice.actions

// A selector
export const postsSelector = (state) => state.posts

// The reducer
export default postsSlice.reducer

// Asynchronous thunk action
export function fetchPosts() {
  return async (dispatch) => {
    dispatch(getPosts())

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()

      dispatch(getPostsSuccess(data))
    } catch (error) {
      dispatch(getPostsFailure())
    }
  }}
