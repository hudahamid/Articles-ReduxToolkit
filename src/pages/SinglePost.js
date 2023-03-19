import React, {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPost,postSelector } from "../slices/Post";
import { fetchComments,CommentsSelector } from "../slices/Comments";
import { Post } from "../components/Post";
import { Comments } from "../components/Comments";


const SinglePost= ({match})=>{
    const dispatch=useDispatch();
    const {post ,   loading:postLoading  ,   hasErrors:postHasErrors   }=useSelector(postSelector);
    const {comments ,   loading:commentLoading  ,   hasErrors:commentHasErrors   }=useSelector(CommentsSelector);

   const {id}=useParams();
   useEffect(() => {
    dispatch(fetchComments(id))
    dispatch(fetchPost(id))

   },[dispatch,match])
   
   const renderPost = () =>{
    if(postLoading) return <p> post is loading ...</p>
    if (postHasErrors) return <p> unable to display post </p>
    return <Post  post={post} />
   }
   const renderComment= () =>{
    if(commentLoading) return <p> comments is loading ...</p>
    if (commentHasErrors) return <p> unable to display comment</p>
    return comments.map((comment)=>{
        return <Comments key={comment.id} comment={comment}/>
    })
    }
    return(
        <section>
            {renderPost()}
            <h2>comments</h2>
            {renderComment()}
        </section>
    )

}
export default SinglePost;
