import { FETCH_PAGES } from '../actions/pages';

const initialState = {
  all: []
};

export default function PagesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PAGES:
      return {
        ...state,
        all: action.payload.data.items
      };
    default:
      return state;
  }
}
