import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CreatePost } from './CreatePost';

describe('<CreatePost />', () => {
  it('it callls createUserPost on call click of submit', () => {
    const createUserPost = jest.fn();
    const { queryByPlaceholderText, queryByText } = render(<CreatePost createUserPost={createUserPost} />, { wrapper: MemoryRouter });
    const subjectInput = queryByPlaceholderText('Enter Subject');
    const bodyInput = queryByPlaceholderText('Enter Body');
    const button = queryByText('Submit');
    expect(subjectInput).not.toBeNull();
    expect(bodyInput).not.toBeNull();

    userEvent.type(subjectInput, 'hello');
    userEvent.type(bodyInput, 'body');
    userEvent.click(button);

    expect(subjectInput.value).toBe('hello');
    expect(bodyInput.value).toBe('body');
    expect(createUserPost).toHaveBeenCalled();
  });
});
