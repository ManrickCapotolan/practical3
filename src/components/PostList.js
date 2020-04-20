import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost } from '../actions/userActions';

function PostList({ post, deletePost }) {
  const { id, title, body } = post;
  
  return (
    <div className='card'>
      <div className='content'>
        <div className='header'>{title}</div>
        <div className='description'>{body}</div>
      </div>
      <div>
        <span>{id}</span>
        <Link to={`/posts/${id}`} >View Post</Link>
        <div onClick={() => deletePost(id)}>Delete</div>
      </div>
    </div>
  )
}

export default connect(null, { deletePost })(PostList);
