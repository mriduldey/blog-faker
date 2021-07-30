import React from "react";
import { Card } from "react-bootstrap";

export const Post = ({ post, fullPage, varient }) => {
  return (
    <article className={fullPage ? "post-container" : "post-excerpt"}>
      <Card
        bg={varient.toLowerCase()}
        text={varient.toLowerCase() === "light" ? "dark" : "white"}
        className="mb-3"
      >
        <Card.Header>{post.title.toUpperCase()}</Card.Header>
        <Card.Body>
          <Card.Text>
            {fullPage ? post.body : post.body.substring(0, 100)}
          </Card.Text>
        </Card.Body>
      </Card>
    </article>
  );
};
