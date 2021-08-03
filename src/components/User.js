import React from "react";
import { Card } from "react-bootstrap";
import profilePics, { profilePicsNumber } from "tools/userProfileImages";

const User = ({ user }) => {
  const profilePicture = profilePics[(user.id - 1) % profilePicsNumber];
  console.log("user componet", user);
  return (
    <Card className="user-card rounded-3 shadow p-2">
      <div className="d-flex justify-content-center align-items-center position-relative mb-5">
        <div className="profile-image-wrapper p-2 rounded-circle position-absolute top-100 start-50 translate-middle shadow-lg bg-white d-flex justify-content-center align-items-center">
          <Card.Img
            variant="top"
            src={profilePicture}
            className="rounded-circle profile-image shadow-lg"
          />
        </div>
      </div>
      <Card.Body className="text-white text-center">
        <Card.Title className="">
          {user.name} | {user.username}
        </Card.Title>
        <Card.Text>Website: {user.website}</Card.Text>
        <Card.Text>Email: {user.email}</Card.Text>
        <Card.Text>City: {user.address.city}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default User;
