import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { fetchUsers } from "../actions/usersActions";
import User from "../components/User";
import { Row, Col, Container } from "react-bootstrap";

const UsersPage = ({ dispatch, users, loading, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const renderUsers = () => {
    if (loading) return <p>Loading users...</p>;
    if (hasErrors) return <p>Unable to display users.</p>;

    return users.map(user => (
      <Col xs={12} md={6} lg={4} className="mb-2" key={user.id}>
        <Link to={`/users/${user.id}/posts`} className="button">
          <User user={user} />
        </Link>
      </Col>
    ));
  };

  return (
    <Container>
      <Row className="mb-2">{renderUsers()}</Row>
    </Container>
  );
};

const mapStateToProps = ({ users }) => ({
  loading: users.loading,
  hasError: users.hasError,
  users: users.users,
});

export default connect(mapStateToProps)(UsersPage);
