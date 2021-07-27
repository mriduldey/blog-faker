import React from "react";

export const Post = ({ post, fullPage }) => (
  <article className={fullPage ? "post-container" : "post-excerpt"}>
    <h2>{post.title}</h2>
    <p>{fullPage ? post.body : post.body.substring(0, 100)}</p>
  </article>
);
