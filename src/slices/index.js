// import { combineReducers } from 'redux'

// import postsReducer from './Posts'
// import postReducer from './Post'
// import commentsReducer from './Comments'


// const rootReducer = combineReducers({
//   posts: postsReducer,
//   comments: commentsReducer,
//   post: postReducer,

// })
// export default rootReducer

import { combineReducers } from 'redux'

import postsReducer from './Posts'
import postReducer from './Post'
import commentsReducer from './Comments'

const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  post: postReducer,
})

export default rootReducer