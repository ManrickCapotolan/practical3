import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/userActions'; 
import UserItem from './UserItem';
import './styles.css';

function UsersList({ users = [], getUsers }) {
  useEffect(() => {
    getUsers();
  }, []); // eslint-disable-line

  return (
    <div>
      <h1>Users</h1>
      {
        users.length && users.map((user, idx) => <UserItem 
          key={idx}
          user={user}
        />)
      }
    </div>
  )
};

const mapStateToProps = state => ({
  users: state.user.users,
})

export default connect(mapStateToProps, { getUsers })(UsersList)
