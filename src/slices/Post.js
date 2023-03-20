 import { createSlice } from "@reduxjs/toolkit";
//we need to have default state
 export const initialState={
    loading:false,
    hasErrors:false,
    post:{},
 }

  //create a slice "postSlice" with name and reducer object that contain
  //three item "getPost,getPostSuccess,..." that contain updated state
 const postSlice= createSlice({
    name:'post',
    initialState,
    reducers:{
        getPost:state =>{
            state.loading=true
        },
        getPostSuccess:(state,{payload}) =>{
            state.post=payload
            state.loading=false
            state.hasErrors=false
        },
        getPostFailure:state => {
        state.loading=false
        state.hasErrors=true
        },
    },
 })

 export const {getPost,getPostSuccess,getPostFailure}=postSlice.actions;
 export const postSelector = state=>state.post;
 export default postSlice.reducer;
 
//9.each post fetched through id ,that used in the link
 export function fetchPost(id){
    return async dispatch =>{
        dispatch(getPost())
        try{
        const response= await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
            )
        const data= await response.json()
          dispatch(getPostSuccess(data))    
        }catch(error){
        dispatch(getPostFailure())
        }
    }
 }
