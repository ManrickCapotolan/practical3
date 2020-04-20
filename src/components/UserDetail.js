import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser, getUserPosts } from '../actions/userActions';
import PostList from './PostList';
import CreatePost from './CreatePost';

function User({ user, posts, getUser, getUserPosts }) {
  const [isCreateShown, setIsCreateShown] = useState(false);
  const { name } = user;

  const match = useRouteMatch();
  useEffect(() => {
    const userId = match.params.id;
    getUser(userId);
    getUserPosts(userId);
  }, [match.params.id]); // eslint-disable-line

  const showCreatePost = () => {
    setIsCreateShown(true);
  }

  const renderDisplay = () => {
    return (
      <div>
        <h2>{ name } Posts</h2>
        <button onClick={showCreatePost}>Create Post</button>
        { isCreateShown && <CreatePost />}
        <div>
          {
            posts.map((post, idx) => <PostList key={idx} post={post} />)
          }
        </div>
      </div>
    );
  };

  return (
    <>
      {renderDisplay()}
    </>
  );
}

const mapStateToProps = state => ({
  user: state.user.current,
  posts: state.user.posts,
})

export default connect(mapStateToProps, { getUser, getUserPosts })(User)