import React from "react";
import { Card } from "react-bootstrap";

export const Comment = ({ comment }) => (
  <aside className="comment-wrapper p-2 ms-5 mb-2 bg-secondary rounded-3">
    <Card
      bg={"dark".toLowerCase()}
      text={"dark".toLowerCase() === "light" ? "dark" : "white"}
    >
      <Card.Header>
        <h2>{comment.name.toUpperCase()}</h2>
      </Card.Header>
      <Card.Body>
        <Card.Title>{comment.email}</Card.Title>
        <Card.Text>{comment.body}</Card.Text>
      </Card.Body>
    </Card>
  </aside>
);
