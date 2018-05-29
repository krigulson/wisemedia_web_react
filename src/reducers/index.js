import { combineReducers } from 'redux';
import PostsReducer from './posts';
import PagesReducer from './pages';

const rootReducer = combineReducers({
  posts: PostsReducer,
  pages: PagesReducer
});

export default rootReducer;
