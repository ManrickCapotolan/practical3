import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const api = {
  getUsers: () => axios.get(`${BASE_URL}/users`),
  getUser: (id) => axios.get(`${BASE_URL}/users/${id}`),
  getUserPosts: (id) => axios.get(`${BASE_URL}/users/${id}/posts`),
  getPost: (id) => axios.get(`${BASE_URL}/posts/${id}`),
  createPost: (data) => axios.post(`${BASE_URL}/posts`, data),
  getComments: (id) => axios.get(`${BASE_URL}/posts/${id}/comments`),
  deletePost: (id) => axios.delete(`${BASE_URL}/posts/${id}`),
};

export default api;