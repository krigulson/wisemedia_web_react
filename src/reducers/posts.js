import { FETCH_POSTS } from '../actions/posts';

const initialState = { all: [] };

export default function PostsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return { ...state, all: action.payload.data.items };
    default:
      return state;
  }
}
