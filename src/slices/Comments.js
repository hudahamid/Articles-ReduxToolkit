import { createSlice } from "@reduxjs/toolkit";
// we need to have default state
export const initialState={
loading:false,
hasErrors:false,
comments:[],
}
//create a slice "commentSlice" with name and reducer object that contain
  //three item "getcomment,getCommentSuccess,..." that contain updated stat
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
// export CommentsSlice.actions ,comment, CommentsSlice.reducer;
export const {getComments,getCommentsSuccess,getCommentsFailure}=CommentsSlice.actions;
export const CommentsSelector= state =>state.comments
export default CommentsSlice.reducer;

//10.we need postId in fetch link
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