//when data properly flows from the db we can comment out
//lines 13-40 (useState) and reactivate lines 41-47 (GraphQL)

import Table from "react-bootstrap/Table";
import React from "react";
import Container from "react-bootstrap/Container";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_PROFILE } from "../utils/queries";
import { REMOVE_ACTIVITY } from "../utils/mutations";
import Card from "react-bootstrap/Card";

function Profile() {
  const { loading, data } = useQuery(QUERY_PROFILE);
  const [removeActivity, { error }] = useMutation(REMOVE_ACTIVITY);
  const user = data?.getProfile;

  if (loading) {
    return <h3>Loading user data!</h3>;
  }
  console.log(user);

  const handleDelete = (id) => {
    const { data } = removeActivity({ variables: { id } });
    console.log(data);
    window.location.reload();
  };

  

  return (
    <div className="profile">
      <Card className="userChoices" key={user._id}>
        <Card.Title>
          {user.firstName} {user.lastName}
        </Card.Title>
        <Card.Text>{user.email}</Card.Text>
        <Card.Body>
          <Table striped>
            <thead>
              <tr>
                <th>Activity Name</th>
                <th colSpan={2}>Description</th>
                <th>Date</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {user.savedActivities.map((activity) => (
                <tr key={activity._id}>
                  <td>{activity.name}</td>
                  <td colSpan={2}>{activity.description}</td>
                  <td>{activity.activityDate}</td>
                  <td>{activity.price}</td>
                  <td>
                    <button onClick={() => handleDelete(activity._id)}>
                      Remove Activity
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Profile;
