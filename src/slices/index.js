import { combineReducers } from 'redux'
//3. import all reducers that you have
import postsReducer from './Posts'
import postReducer from './Post'
import commentsReducer from './Comments'

//combine them in  rootReducer to be called in index.js
const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  post: postReducer,
})

export default rootReducer