import React from 'react';
import { connect } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { createUserPost } from '../actions/userActions';

function CreatePost({ handleSubmit, createUserPost }) {
  const history = useHistory();
  const match = useRouteMatch();

  const renderInput = ({ input, label, type }) => {
    return (
      <div>
        <label>{label}</label>
        {type === 'textarea'
          ? <textarea {...input} />
          : <input {...input} />
        }
      </div>
    )
  };

  const onSubmit = (formValues) => {
    const newPost = { ...formValues, userId: match.params.id }
    createUserPost(newPost);
    history.push(`/users/${match.params.id}`);
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Create Post</h3>
      <Field name='subject' component={renderInput} label='Subject' />
      <Field name='body' component={renderInput} type='textarea' label='Body' />
      <button>Submit</button>
    </form>
  )
}

export default reduxForm({
  form: 'postCreate',
})(connect(null, { createUserPost })(CreatePost));
