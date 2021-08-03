import React from "react";
import { Card } from "react-bootstrap";
import coverPictures, { coverPicturesNumber } from "tools/userCovers";
export const Post = ({ post, fullPage, varient, index }) => {
  const coverPicture = coverPictures[index % coverPicturesNumber];

  return (
    <article className={fullPage ? "post-container" : "post-excerpt"}>
      <Card bg="secondary" text="white" className="mb-3" varient={varient}>
        {index !== null && (
          <Card.Img
            variant="top"
            src={coverPicture}
            className="shadow-lg m-2"
          />
        )}
        <Card.Body>
          <Card.Title>{post.title.toUpperCase()}</Card.Title>
          <Card.Text>
            {fullPage ? post.body : post.body.substring(0, 80).concat("...")}
          </Card.Text>
        </Card.Body>
      </Card>
    </article>
  );
};
