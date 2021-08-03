import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

// Local imports
import { fetchPosts } from "../actions/postsActions";
import { fetchUser } from "actions/userActions";
import { Post } from "../components/Post";
import User from "../components/User";

const PostsPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const { id } = match.params;
    console.log(id);
    dispatch(fetchPosts(id));
    dispatch(fetchUser(id));
  }, [dispatch, match.params]);

  const { user, posts, loading, hasErrors } = useSelector(
    ({ user, posts }) => ({
      user: user.user,
      posts: posts.posts,
      loading: { posts: posts.loading, user: user.loading },
      hasErrors: { posts: posts.hasErrors, user: user.hasErrors },
    })
  );

  // Show loading, error, or success state
  const renderPosts = () => {
    if (loading.posts) return <p>Loading posts...</p>;
    if (hasErrors.posts) return <p>Unable to display posts.</p>;
    return (
      posts &&
      posts.map((post, index) => {
        return (
          <Col xs={12} sm={6} lg={4} key={post.id}>
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

  const renderUser = () => {
    if (loading.user) return <p>Loading user...</p>;
    if (hasErrors.user) return <p>Unable to display posts.</p>;

    return Object.keys(user).length && <User user={user} />;
  };

  return (
    <Container fluid="md" className="text-white">
      <h1>Posts by {}</h1>
      <Row>
        <Col xs={12} lg={3} xl={4} className="mb-5">
          {renderUser()}
        </Col>
        <Col xs={12} lg={9} xl={8}>
          <Row>{renderPosts()}</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PostsPage;
