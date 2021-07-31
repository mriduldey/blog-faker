import React from "react";
import { Card } from "react-bootstrap";
import coverPictures from "tools/userCovers";
import profile1 from "resources/profile1.jpg";

const User = ({ user, coverPicture }) => {
  return (
    <Card className="user-card rounded-3 shadow p-2 mt-5">
      <div className="d-flex justify-content-center align-items-center position-relative mb-5">
        <Card.Img
          variant="top"
          src={coverPictures[coverPicture]}
          className="user-image rounded-3 shadow-lg"
        />
        <div className="profile-image-wrapper p-2 rounded-circle position-absolute top-100 start-50 translate-middle shadow-lg bg-white d-flex justify-content-center align-items-center">
          <Card.Img
            variant="top"
            src={profile1}
            className="rounded-circle profile-image shadow-lg"
          />
        </div>
      </div>
      <Card.Body className="text-white">
        <Card.Title>
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
