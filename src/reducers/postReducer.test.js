import postReducer from './postReducer';
import { GET_POST, GET_POST_COMMENTS } from '../actions/postActions';

describe('postReducer', () => {
  it('changes the post field when action is GET_POST', () => {
    const result = postReducer({}, { type: GET_POST, payload: 'random' });
    expect(result).toEqual({
      post: 'random'
    });
  });

  it('changes the comment field when action is GET_POST_COMMENTS', () => {
    const result = postReducer({}, { type: GET_POST_COMMENTS, payload: 'random' });
    expect(result).toEqual({
      comments: 'random'
    });
  });

  it('retains the other object properties', () => {
    const result = postReducer({ foo: 'bar' }, { type: GET_POST_COMMENTS, payload: 'random' });
    expect(result).toEqual({
      foo: 'bar',
      comments: 'random'
    });
  });

  it('returns initial state when unknown action is passed', () => {
    const result = postReducer({ foo: 'bar' }, { type: 'random', payload: 'random' });
    expect(result).toEqual({
      foo: 'bar'
    });
  });
});