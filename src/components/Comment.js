import React from "react";
import { Card } from "react-bootstrap";

export const Comment = ({ comment }) => (
  <aside className="comment-wrapper p-2 ms-5 mb-2 rounded-3">
    <Card bg="dark" className="text-secondary">
      <Card.Body>
        <Card.Title>{comment.name.toUpperCase()}</Card.Title>
        <Card.Text>{comment.email}</Card.Text>
        <Card.Text>{comment.body}</Card.Text>
      </Card.Body>
    </Card>
  </aside>
);
