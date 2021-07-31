import React from "react";
import { Card } from "react-bootstrap";
import coverPictures, { coverPicturesNumber } from "tools/userCovers";
export const Post = ({ post, fullPage, varient, index }) => {
  const coverPicture = coverPictures[index % coverPicturesNumber];

  return (
    <article className={fullPage ? "post-container" : "post-excerpt"}>
      <Card
        bg={varient.toLowerCase()}
        text={varient.toLowerCase() === "light" ? "dark" : "white"}
        className="mb-3"
      >
        <Card.Img
          variant="top"
          src={coverPicture}
          className="shadow-lg m-2"
        />
        <Card.Body>
          <Card.Header>{post.title.toUpperCase()}</Card.Header>
          <Card.Text>
            {fullPage ? post.body : post.body.substring(0, 100)}
          </Card.Text>
        </Card.Body>
      </Card>
    </article>
  );
};
