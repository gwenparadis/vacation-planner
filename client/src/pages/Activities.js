import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ACTIVITIES } from "../utils/queries";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

const activities = [
  {
    name: "90-minute Full Body Massage",
    description:
      "Come relax at our on-site Spa. Full-service includes your choice of 90-minute massage, and access to our newly renovated locker rooms. Refreshments are available for additional purchase",
    image: "",
    activityDate: "2023-05-15T13:00:00",
    price: 120,
    quantity: 50,
  },
  {
    name: "60-minute Couples Massage",
    description:
      "Come relax at our on-site Spa. Full-service includes your choice of 60-minute Couples massage, and access to our newly renovated locker rooms. Refreshments are available for additional purchase",
    image: "",
    activityDate: "2023-05-15T13:00:00",
    price: 160,
    quantity: 50,
  },
  {
    name: "90-minute Full Body Massage",
    description:
      "Come relax at our on-site Spa. Full-service includes your choice of 60-minute Couples massage, and access to our newly renovated locker rooms. Refreshments are available for additional purchase",
    image: "",
    activityDate: "2023-05-15T13:00:00",
    price: 250,
    quantity: 50,
  },
];

const activityList = (/*{ activities }*/) => {
  //const { loading, data } = useQuery(QUERY_ACTIVITY);
  //const activities = data?.activities || [];

  if (!activities.length) {
    return <h3>No activities available at this time!</h3>;
  }

  return (
    <CardGroup>
      {activities &&
        activities.map((activity) => (
          <Card key={activity._id}>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/images/" + activity.image}
            />
            <Card.Body>
              <Card.Title>Activity {activity.name}</Card.Title>
              <Card.Text>Description:{activity.description}</Card.Text>
              <Card.Text>
                Activity Date: {activity.activityDate}
                Price: {activity.price}
                Tickets Available: {activity.quantity}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button
                // onClick={() => props.addEvent(activity)}
                variant="primary"
                size="lg"
                active
              >
                View Activity
              </Button>
            </Card.Footer>
          </Card>
        ))}
    </CardGroup>
  );
};

export default activityList;
