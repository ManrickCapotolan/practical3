import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { createUserPost } from '../actions/userActions';
import { reduxForm } from 'redux-form';

export function CreatePost({ createUserPost }) {
  const history = useHistory();
  const match = useRouteMatch();
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const onChange = (fn) => (e) => {
    fn(e.target.value);
  } 

  const onSubmit = () => {
    const newPost = { subject, body, userId: match.params.id }
    createUserPost(newPost);
    history.push(`/users/${match.params.id}`);
  }
  
  return (
    <div>
      <h3>Create Post</h3>
      <label htmlFor='subject'>Subject</label>
      <input type='text' name='subject' placeholder='Enter Subject' value={subject} onChange={onChange(setSubject)}/>
      <label htmlFor='body'>Body</label>
        <input type='text' name='body' placeholder='Enter Body' value={body} onChange={onChange(setBody)}/>
      <button onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default reduxForm({
  form: 'postCreate',
})(connect(null, { createUserPost })(CreatePost));
