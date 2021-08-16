import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Spinner } from "react-bootstrap";

// Local imports
import { fetchPosts } from "../actions/postsActions";
import { fetchUser } from "actions/userActions";
import { Post } from "../components/Post";
import User from "../components/User";

const PostsPage = ({ match }) => {
  const { bloggerId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // const { id } = match.params;
    dispatch(fetchPosts(bloggerId));
    dispatch(fetchUser(bloggerId));
  }, [dispatch, bloggerId]);

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
    if (loading.posts) return <Spinner animation="grow" variant="warning" />;
    if (hasErrors.posts) return <p>Unable to display posts.</p>;
    return (
      posts &&
      posts.map((post, index) => {
        return (
          <Col xs={12} sm={6} lg={4} key={post.id}>
            <Link to={`/blogger/${bloggerId}/posts/${post.id}`}>
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
    if (loading.user)
      return (
        <Spinner animation="grow" variant="warning" className="text-center" />
      );
    if (hasErrors.user) return <p>Unable to display posts.</p>;

    return (
      Object.keys(user).length && (
        <User user={user} className="position-fixed" />
      )
    );
  };

  return (
    <Container className="text-white">
      <Row>
        <Col xs={12} lg={3} xl={4} className="mb-5 posts-by">
          <h1 className="d-block d-lg-none">Posts by {user.username}</h1>
          <div className="post-by-wrapper text-center position-fixed d-none d-lg-block pt-5 mt-5">
            <h1>Posts by</h1>
            {renderUser()}
          </div>
        </Col>
        <Col xs={12} lg={9} xl={8} className="offset-lg-4">
          <Row>{renderPosts()}</Row>
        </Col>
      </Row>
    </Container>
  );
};

export default PostsPage;
