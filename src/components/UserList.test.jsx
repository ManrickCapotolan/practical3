import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
 
import UsersList from './UserList';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as userActions from '../actions/userActions';

jest.mock('../actions/userActions');
 
const mockStore = configureStore([]);

describe('test connected components', () => {
  let store;
 
  beforeEach(() => {
    store = mockStore({
      user: {
        users: [
          { id: 1, name: 'hello' },
          { id: 2, name: 'hello' }
        ],
      }
    });
    userActions.getUsers.mockImplementation(() => ({ type: userActions.GET_USERS }));
  });
 
  it('should render 2 users when redux contain 2 users', () => {
    const { queryAllByTestId } = render(<Provider store={store}>
      <UsersList />
    </Provider>, { wrapper: MemoryRouter });

    const users = queryAllByTestId('user-item');
    expect(users.length).toBe(2)
  });
});