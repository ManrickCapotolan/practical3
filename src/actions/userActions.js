import api from '../api/api';

export const GET_USERS = 'GET_USERS';
export const GET_USER = 'GET_USER';
export const GET_USER_POSTS = 'GET_USER_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

export const getUsers = () => async dispatch => {
const res = await api.getUsers();
  dispatch({ type: GET_USERS, payload: res.data });
};

export const getUser = id => async dispatch => {
  const res = await api.getUser(id);
  dispatch({ type: GET_USER, payload: res.data });
};

export const getUserPosts = (id) => async dispatch => {
  const res = await api.getUserPosts(id);
  dispatch({ type: GET_USER_POSTS, payload: res.data });
};

export const createUserPost = (post) => async dispatch => {
  await api.createPost(post);
  dispatch({ type: CREATE_POST, payload: post });
};

export const deletePost = (postId) => async dispatch => {
  await api.deletePost(postId);
  dispatch({ type: DELETE_POST, payload: postId });
};