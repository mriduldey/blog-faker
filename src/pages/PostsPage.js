import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchPosts } from "../actions/postsActions";
import { Post } from "../components/Post";

const PostsPage = props => {
  const { dispatch, posts, loading, hasErrors } = props;
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Show loading, error, or success state
  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;
    return posts.map(post => (
      <Link to={`/posts/${post.id}`} key={post.id}>
        <Post post={post} fullPage={false} />
      </Link>
    ));
  };

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts()}
    </section>
  );
};

// Map Redux state to component props | note: "posts" destructured from "state"
const mapStateToProps = ({ posts }) => ({
  loading: posts.loading,
  hasError: posts.hasError,
  posts: posts.posts,
});

// Connect Redux to React
export default connect(mapStateToProps)(PostsPage);
