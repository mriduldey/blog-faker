import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Container, Spinner } from "react-bootstrap";

// Local imports
import { fetchUsers } from "../actions/usersActions";
import User from "../components/User";

const UsersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const { users, loading, hasErrors } = useSelector(({ users }) => ({
    users: users.users,
    loading: users.loading,
    hasErrors: users.hasErrors,
  }));

  const renderUsers = () => {
    if (loading) return <Spinner animation="grow" variant="warning" />;
    if (hasErrors) return <p>Unable to display users.</p>;

    return (
      users &&
      users.map((user, index) => {
        return (
          <Col xs={12} sm={6} lg={4} xl={3} className="mb-2" key={user.id}>
            <Link to={`/bloggers/${user.id}/posts`}>
              <User user={user} />
            </Link>
          </Col>
        );
      })
    );
  };

  return (
    <Container>
      <Row className="mb-2">{renderUsers()}</Row>
    </Container>
  );
};

export default UsersPage;
