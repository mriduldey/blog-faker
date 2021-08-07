import React from "react";
import { Card, OverlayTrigger, Tooltip } from "react-bootstrap";

//Local imports
import { capitalise } from "tools/capitalize";
import profilePics, { profilePicsNumber } from "tools/userProfileImages";

export const Comment = ({ comment, index }) => {
  const profilePicture = profilePics[(index % profilePicsNumber) + 1];
  return (
    <aside className="comment-wrapper p-2 ms-5 mb-2 rounded-3">
      <Card bg="dark" className="text-white">
        <OverlayTrigger
          key="test"
          placement="top"
          overlay={
            <Tooltip id={`tooltip-test-${index}`}>
              <h6 className="mt-2 text-left">
                {capitalise(comment.name.toUpperCase())}
              </h6>
              <hr />
              <p>{comment.email}</p>
            </Tooltip>
          }
        >
          <div className="comment-image-wrapper rounded-circle position-absolute top-0 start-0 bg-white d-flex justify-content-center align-items-center">
            <Card.Img
              variant="top"
              src={profilePicture}
              className="rounded-circle comment-image shadow-lg"
            />
          </div>
        </OverlayTrigger>
        <Card.Body>
          <Card.Text>{comment.email}</Card.Text>
          <Card.Text>{comment.body}</Card.Text>
        </Card.Body>
      </Card>
    </aside>
  );
};
