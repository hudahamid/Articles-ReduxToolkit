import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
    loading: false,
    hasErrors: false,
    post: {},
  }
  
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
  export const { getPosts, getPostsSuccess, getPostsFailure } = postsSlice.actions




export const postsSelector = (state) => state.posts
export default postsSlice.reducer



export function fetchPosts(id) {
    return async dispatch => {
      dispatch(getPosts())
  
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        )
        const data = await response.json()
  
        dispatch(getPostsSuccess(data))
      } catch (error) {
        dispatch(getPostsFailure())
      }
    }
  }
  