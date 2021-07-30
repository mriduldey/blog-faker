import React from "react";
import { Card } from "react-bootstrap";
import writerImage from "../resources/writer1.png";
const User = ({ user }) => {
  return (
    <Card className="user-card rounded-3 shadow p-2">
      <Card.Img variant="top" src={writerImage} className="user-image" />
      <Card.Body className="text-white">
          <Card.Title>{user.name} | {user.username}</Card.Title>
          <Card.Text>Website: {user.website}</Card.Text>
          <Card.Text>Email: {user.email}</Card.Text>
          <Card.Text>City: {user.address.city}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default User;
