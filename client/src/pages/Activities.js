import React from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ALL_ACTIVITIES } from "../utils/queries";
// import { SAVE_ACTIVITY } from "../utils/mutations";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ActivityList = () => {
  const { loading, data: { getAllActivities = [] } = {} } =
    useQuery(QUERY_ALL_ACTIVITIES);
  //const activities = data?.activities || [];
  <Button variant="warning display-center" type="submit">
  Submit
</Button>
  if (!getAllActivities.length) {
    return <h3>No activities available at this time!</h3>;
  }

  // const [saveActivity, { error }] = useMutation(SAVE_ACTIVITY);

  // const handleActivity = async (activity) => {
  //   try {
  //     await saveActivity({
  //       variables: {
  //         _id: activity._id,
  //         name: activity.name,
  //         activityDate: activity.activityDate,
  //         price: activity.price,
  //       },
  //     });
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <div>
      <Link to="/profile">
        <button className="btn btn-lg btn-danger">View My Intinerary</button>
      </Link>
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
                // onClick={() => handleActivity()}
                variant="primary"
                size="lg"
                active
              >
                Save Activity to My Itinerary
              </Button>
            </Card.Footer>
          </Card>
        ))}
    </div>
  );
};

export default ActivityList;
