import React from 'react'

export default function Comment({ comment }) {
  const { name, body, email } = comment;
  return (
    <div className='comment'>
      <h4>Subject: {name}</h4>
      <p>Author: {email}</p>
      <div className='text'>{body}</div>
    </div>
  )
}
