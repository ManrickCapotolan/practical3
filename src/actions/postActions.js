import api from '../api/api';

export const GET_POST = 'GET_POST';
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';

export const getPost = (postId) => async dispatch => {
  const res = await api.getPost(postId);
  dispatch({
    type: GET_POST,
    payload: res.data,
  });
};

export const getPostComments = (postId) => async dispatch => {
  const res = await api.getComments(postId);
  dispatch({
    type: GET_POST_COMMENTS,
    payload: res.data,
  });
};