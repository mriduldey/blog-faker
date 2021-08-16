// Import library components
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

// Import local components
import { Post } from "../components/Post";
import { Comment } from "../components/Comment";
import NavigateContent from "components/navigateContent/NavigateContent";

// Import actions
import { fetchPost } from "../actions/postActions";
import { fetchComments } from "../actions/commentsActions";

const PostPage = () => {
  const { bloggerId, postId } = useParams();
  const postIdNum = Number(postId);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost(postIdNum));
    dispatch(fetchComments(postIdNum));
  }, [dispatch, postIdNum]);

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
    if (post) {
      if (loading.post) return <Spinner animation="grow" variant="warning" />;
      if (hasErrors.post) return <p>Unable to display posts.</p>;
      return (
        post && (
          <>
            <Post
              key={post.id}
              fullPage
              post={post}
              varient="secondary"
              index={null}
            />
            <NavigateContent
              leftLink={
                isPostExist(true)
                  ? `/blogger/${bloggerId}/posts/${postIdNum - 1}`
                  : null
              }
              rightLink={
                isPostExist()
                  ? `/blogger/${bloggerId}/posts/${postIdNum + 1}`
                  : null
              }
            />
          </>
        )
      );
    }
  };

  const renderComments = () => {
    if (comments.length) {
      if (loading.comments)
        return <Spinner animation="grow" variant="warning" />;
      if (hasErrors.comments) return <p>Unable to display posts.</p>;
      return comments.map((comment, index) => (
        <Comment key={comment.id} fullPage comment={comment} index={index} />
      ));
    }
  };

  const isPostExist = (isPrevious = false) =>
    isPrevious
      ? postIdNum - 1 > (bloggerId - 1) * 10
      : postIdNum + 1 <= bloggerId * 10;

  return (
    <Container className="text-white">
      {renderPost()}
      <Container className="mt-5">
        <Row>
          <Col>
            <h2 className="ps-2">Comments</h2>
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
