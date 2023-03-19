import { createSlice } from "@reduxjs/toolkit";

export const initialState={
loading:false,
hasErrors:false,
comments:[],
}

const CommentsSlice =createSlice({
  name:'comments',   
  initialState,
  reducers:{
    getComments:state =>{
        state.loading=true
    },
    getCommentsSuccess:(state,{payload})=>{
        state.comments=payload
        state.loading=false
        state.hasErrors=false 
    },
    getCommentsFailure:state=>{
        state.hasErrors=true
        state.loading=false
    }
  }
})

export const {getComments,getCommentsSuccess,getCommentsFailure}=CommentsSlice.actions;
export const CommentsSelector= state =>state.comments
export default CommentsSlice.reducer;


export function fetchComments(postId){

    return async dispatch =>{
        dispatch(getComments())
        try{
        const response=await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        const data=await response.json()
        dispatch(getCommentsSuccess(data))


        }catch(error){
            dispatch(getCommentsFailure())

        }

    }
}