import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_ACTIVITIES } from "../utils/queries";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ActivityList = (/*{ activities }*/) => {
  const { loading, data: { getAllActivities = [] } = {} } =
    useQuery(QUERY_ALL_ACTIVITIES);
  //const activities = data?.activities || [];

  if (!getAllActivities.length) {
    return <h3>No activities available at this time!</h3>;
  }

  return (
    <div>
      {getAllActivities &&
        getAllActivities.map((activity) => (
          <Card key={activity._id}>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "/images/" + activity.image}
            />
            <Card.Body>
              <Card.Title>{activity.name}</Card.Title>
              <Card.Text>{activity.description}</Card.Text>
              <Card.Text>
                Activity Time: {activity.activityDate}
                Price: ${activity.price}
                Tickets Remaining: {activity.quantity}
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
    </div>
  );
};

export default ActivityList;
