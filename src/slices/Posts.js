import { createSlice } from "@reduxjs/toolkit";
//4 we need to have default state
export const initialState = {
    loading: false,
    hasErrors: false,
    posts: [],
  }
  //5.create a slice "postSlice" with name and reducer object that contain
  //three item "getPost,getPostSuccess,..." that contain updated state
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      getPosts: state => { 
         state.loading = true
      },
      getPostsSuccess: (state, { payload }) => {
        state.posts = payload
        state.loading = false
        state.hasErrors = false
      },
      getPostsFailure: state => {
        state.loading = false
        state.hasErrors = true
      },
    },
  })

  //6.assign the created slice "postSlice".action to the const{} then export
export const { getPosts, getPostsSuccess, getPostsFailure } = postsSlice.actions

// 7. export post in a const "postSelector" & export postSlice.reducers
export const postsSelector = state => state.posts
export default postsSlice.reducer


//8.(try catch)  fetch posts and return each with dispatch
// " dispatch(getPosts())","dispatch(getPostsSuccess(data))"," dispatch(getPostsFailure())"
  
export function fetchPosts() {
    return async dispatch => {
      dispatch(getPosts())
  
      try {
        const response =await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
  
        dispatch(getPostsSuccess(data))
      } catch (error) {
        dispatch(getPostsFailure())
      }
    }
  }
  