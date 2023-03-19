import React, {useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPost,postSelector } from "../slices/Post";
import { fetchComments,CommentsSelector } from "../slices/Comments";
import { Post } from "../components/Post";
import { Comment } from "../components/Comments";

const SinglePostPage = ({ match }) => {
    const dispatch = useDispatch()
    const { post, loading: postLoading, hasErrors: postHasErrors } = useSelector(
      postSelector
    )
    const {
      comments,
      loading: commentLoading,
      hasErrors: commentHasErrors,
    } = useSelector(CommentsSelector)
  

   const {id}=useParams();
   useEffect(() => {
    dispatch(fetchComments(id))
    dispatch(fetchPost(id))

   },[dispatch,match])
   
  
   const renderPost = () => {
    if (postLoading) return <p>Loading post...</p>
    if (postHasErrors) return <p>Unable to display post.</p>

    return <Post post={post} />
  }

  const renderComments = () => {
    if (commentLoading) return <p>Loading comments...</p>
    if (commentHasErrors) return <p>Unable to display comments.</p>

    return comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))
  }

  return (
    <section>
      {renderPost()}
      <h2>Comments</h2>
      {renderComments()}
    </section>
  )
}

export default SinglePostPage
