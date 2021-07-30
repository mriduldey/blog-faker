import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// Local imports
import { fetchPosts } from "../actions/postsActions";
import { Post } from "../components/Post";
import themes from "../tools/themes";
import { getRandomInt } from "../tools/randomIntNumber";

const PostsPage = ({ match, dispatch, posts, loading, hasErrors }) => {
  useEffect(() => {
    const { id } = match.params;

    dispatch(fetchPosts(id));
  }, [dispatch]);

  // Show loading, error, or success state
  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;
    return posts.map(post => {
      // Randomly choose a varient from themes
      const varient = themes[getRandomInt(themes.length)];
      return (
        <Col xs={12} md={6} lg={4} key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <Post post={post} fullPage={false} varient={varient} />
          </Link>
        </Col>
      );
    });
  };

  return (
    <Container fluid="md" className="text-white">
      <h1>Posts</h1>
      <Row md={6}>{renderPosts()}</Row>
    </Container>
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
