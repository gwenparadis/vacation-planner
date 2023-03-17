//when data properly flows from the db we can comment out
//lines 13-40 (useState) and reactivate lines 41-47 (GraphQL)


import Table from 'react-bootstrap/Table';
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { useQuery } from "@apollo/client";
import { QUERY_PROFILE } from "../utils/queries";
import Card from "react-bootstrap/Card";


function Profile() {
  const [user, userData] = useState({
    firstName: "Wanda",
    lastName: "Kopanz",
    _id: "1234",
    email: "test@google.com",
    activities: [
      {
        name: "scuba",
        description: "swim with the fishes ",
        activityDate: "03/23/23",
        price: "200"

      },

      {
        name: "dance",
        description: "sway to the music",
        activityDate: "03/24/23",
        price: "100"

      },

      {
        name: "spa",
        description: "relaxing and tranquil",
        activityDate: "03/25/23",
        price: "350"

      }
    ]
  })
  // const { loading, data} = useQuery(QUERY_PROFILE);
  // const user = data?.getProfile;

  // if (loading) {
  //   return <h3>Loading user data!</h3>;
  // }

  return (

    <Container className="profile">
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

              {user.activities.map(activity =>
                <tr key={activity.id}>
                  <td>{activity.name}</td>
                  <td colSpan={2}>{activity.description}</td>
                  <td>{activity.activityDate}</td>
                  <td>{activity.price}</td>
                </tr>)}

            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}
export default Profile;
