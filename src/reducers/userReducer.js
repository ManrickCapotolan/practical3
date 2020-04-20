import { 
  GET_USERS, 
  GET_USER,
  GET_USER_POSTS,
  DELETE_POST,
  CREATE_POST,
} from '../actions/userActions';

const INITIAL_STATE = {
  users: [],
  current: {},
  posts: [],
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case GET_USER:
      return { ...state, current: action.payload };
    case GET_USER_POSTS:
      return { ...state, posts: action.payload };
    case CREATE_POST:
      return { 
        ...state, 
        posts: [...state.posts, action.payload], 
      };
    case DELETE_POST:
      return { 
        ...state, 
        posts: state.posts.filter(post => post.id !== action.payload),
      }
    default:
      return state;
  }
};
