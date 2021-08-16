import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigate = ({ left, link }) => {
  const direction = left ? "left" : "right";

  return (
    <Link to={link}>
      <Button variant="dark">
        <i className={`bi bi-arrow-${direction}-circle`}></i>
      </Button>
    </Link>
  ); 
};

export default Navigate;
