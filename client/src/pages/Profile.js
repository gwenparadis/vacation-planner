import React from "react";
import Container from "react-bootstrap/Container";
import { useQuery } from "@apollo/client";
import { QUERY_PROFILE } from "../utils/queries";
import Card from "react-bootstrap/Card";

function Profile() {
  const { loading, data } = useQuery(QUERY_PROFILE);
  const user = data?.getProfile;

  if (loading) {
    return <h3>Loading user data!</h3>;
  }

  return (
    <Container className="p-5">
      <Card key={user._id}>
        <Card.Body>
          <Card.Title>
            {user.firstName} {user.lastName}
          </Card.Title>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.activities}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default Profile;
