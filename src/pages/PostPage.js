// Import library components
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

// Import local components
import { Post } from "../components/Post";
import { Comment } from "../components/Comment";

// Import actions
import { fetchPost } from "../actions/postActions";
import { fetchComments } from "../actions/commentsActions";

const PostPage = ({
  dispatch,
  match,
  post,
  comments,
  loading = {},
  hasErrors = {},
}) => {
  useEffect(() => {
    const { id } = match.params;

    dispatch(fetchPost(id));
    dispatch(fetchComments(id));
  }, [dispatch, match]);

  const renderPost = () => {
    if (post) {
      if (loading.post) return <p>Loading posts...</p>;
      if (hasErrors.post) return <p>Unable to display posts.</p>;
      return (
        post && <Post key={post.id} fullPage post={post} varient="secondary" />
      );
    }
  };

  const renderComments = () => {
    if (comments.length) {
      if (loading.comments) return <p>Loading posts...</p>;
      if (hasErrors.comments) return <p>Unable to display posts.</p>;
      return comments.map(comment => (
        <Comment key={comment.id} fullPage comment={comment} />
      ));
    }
  };

  return (
    <Container className="text-white">
      {renderPost()}
      <Container className="mt-5">
        <Row>
          <Col>
            <h2 className="ps-3">Comments</h2>
          </Col>
        </Row>
        <Row>
          <Col>{renderComments()}</Col>
        </Row>
      </Container>
    </Container>
  );
};

// Map Redux state to component props | note: "posts" destructured from "state"
const mapStateToProps = ({ post, comments }) => ({
  loading: { post: post.loading, comments: comments.loading },
  hasError: { post: post.hasError, comments: comments.hasErrors },
  post: post.post,
  comments: comments.comments,
});

// Connect Redux to React
export default connect(mapStateToProps)(PostPage);
