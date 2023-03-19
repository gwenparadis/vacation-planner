import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_ACTIVITIES } from "../utils/queries";
// import { SAVE_ACTIVITY } from "../utils/mutations";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ActivityList = () => {
  const { loading, data: { getActivities = [] } = {} } =
    useQuery(QUERY_ALL_ACTIVITIES);
  //const activities = data?.activities || [];

  if (!getActivities.length) {
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
    <Container className='activity'>
      <div className='section-heading container'>
        <div className='d-flex flex-wrap justify-content-evenly'>
          {getActivities &&
            getActivities.map((activity) => (
              <Card key={activity._id} style={{ width: '18rem' }}>
                <Link to="/profile">
                  <button className="btn btn-lg btn-danger">View My Activities</button>
                </Link>
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
        </div>
        </Container>
        );
};

        export default ActivityList;
