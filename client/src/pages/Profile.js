import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_PROFILE } from "../utils/queries";
import { REMOVE_ACTIVITY } from "../utils/mutations";
import Card from "react-bootstrap/Card";

function Profile() {
  const [activities, setactivites] = useState([]);
  const { loading, data } = useQuery(QUERY_PROFILE, {
    pollInterval: 500,
  });
  const [removeActivity, { error }] = useMutation(REMOVE_ACTIVITY);
  const user = data?.getProfile;

  useEffect(() => {
    if (data) {
      console.log(data);
      setactivites(data?.getProfile?.savedActivities);
    }
  }, [data?.getProfile?.savedActivities]);

  if (loading) {
    return <h3>Loading user data!</h3>;
  }
  console.log(user);

  const handleDelete = async (id) => {
    try {
      const { data } = await removeActivity({ variables: { id } });
      setactivites(data?.removeActivity?.savedActivities);
    } catch (err) {
      console.error(err);
    }
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
                <th>Date</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity) => (
                <tr key={activity._id}>
                  <td>{activity.name}</td>
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
