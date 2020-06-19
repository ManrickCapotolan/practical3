import React from 'react';
import { Link } from 'react-router-dom';

export default function UserItem({ user }) {
  const { id, name } = user;

  return (
    <div data-testid='user-item'>
      <Link to={`/users/${id}`}>
        <h1>{name}</h1>
        <img 
          src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
          alt={name}
        />
      </Link>
    </div>
  )
}
