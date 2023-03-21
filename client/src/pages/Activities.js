import React from "react";
import { Link } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ALL_ACTIVITIES, QUERY_PROFILE } from "../utils/queries";
import { SAVE_ACTIVITY } from "../utils/mutations";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const ActivityList = () => {
  const { loading, data: { getActivities = [] } = {} } =
    useQuery(QUERY_ALL_ACTIVITIES);

  const { loading: profileLoading, data: profileData } =
    useQuery(QUERY_PROFILE);

  const [saveActivity, { error, data }] = useMutation(SAVE_ACTIVITY);

  const navigate = useNavigate();
  const handleActivity = async (activity) => {
    try {
      if (!profileData?.getProfile?.firstName) {
        navigate("/login", { state: { message: "Login to save activity" } });
        return;
      }
      await saveActivity({
        variables: {
          _id: activity._id,
          name: activity.name,
          activityDate: activity.activityDate,
          price: activity.price,
        },
      });
      alert("Saved successfully");
    } catch (err) {
      console.log(err);
      alert("Something went wrong. Call adminstrator");
    }
  };

  const user = data?.getActivities;
  if (loading) {
    return <h3>Loading user data!</h3>;
  }
  console.log(user);

  return (
    <div className="activity">
      <div className="section-heading container ">
        <div className="d-flex flex-wrap justify-content-evenly">
          {getActivities &&
            getActivities.map((activity) => (
              <Card key={activity._id} style={{ width: "18rem" }}>
                <Link to="/profile"></Link>
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
                    onClick={() => handleActivity(activity)}
                    variant="info"
                    size="lg"
                    active
                    disabled={!profileData?.getProfile?.firstName}
                  >
                    Save Activity to My Itinerary
                  </Button>
                </Card.Footer>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityList;
