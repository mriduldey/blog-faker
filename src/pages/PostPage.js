// Import library components
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

// Import local components
import { Post } from "../components/Post";
import { Comment } from "../components/Comment";

// Import actions
import { fetchPost } from "../actions/postActions";
import { fetchComments } from "../actions/commentsActions";

const PostPage = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const { id } = match.params;

    dispatch(fetchPost(id));
    dispatch(fetchComments(id));
  }, [dispatch, match]);

  let count = 0;
  const { post, comments, loading, hasErrors } = useSelector(
    ({ post, comments }) => ({
      post: post.post,
      comments: comments.comments,
      loading: {
        post: post.loading,
        comments: comments.loading,
      },
      hasErrors: {
        post: post.hasErrors,
        comments: comments.hasErrors,
      },
    })
  );

  const renderPost = () => {
    console.log("rendering count", count);
    count++;
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

export default PostPage;
