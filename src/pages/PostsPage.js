import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// Local imports
import { fetchPosts } from "../actions/postsActions";
import { Post } from "../components/Post";

const PostsPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { id } = match.params;

    dispatch(fetchPosts(id));
  }, [dispatch, match.params]);

  const { posts, loading, hasErrors } = useSelector(({ posts }) => ({
    posts: posts.posts,
    loading: posts.loading,
    hasErrors: posts.hasErrors,
  }));

  // Show loading, error, or success state
  const renderPosts = () => {
    if (loading) return <p>Loading posts...</p>;
    if (hasErrors) return <p>Unable to display posts.</p>;
    return (
      posts &&
      posts.map((post, index) => {
        return (
          <Col xs={12} sm={6} lg={4} xl={3} key={post.id}>
            <Link to={`/posts/${post.id}`}>
              <Post
                post={post}
                fullPage={false}
                index={index}
                varient="secondary"
              />
            </Link>
          </Col>
        );
      })
    );
  };

  return (
    <Container fluid="md" className="text-white">
      <h1>Posts</h1>
      <Row md={6}>{renderPosts()}</Row>
    </Container>
  );
};

export default PostsPage;
