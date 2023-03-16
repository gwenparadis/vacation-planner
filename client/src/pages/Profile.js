import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { useQuery } from "@apollo/client";
// import { GET_PROFILE } from "../utils/queries";

function Profile() {
  // const { loading, data: { getProfile = [] } = {} } = useQuery(GET_PROFILE);
  // const profile = data?.profile || [];

  // if (!getProfile.length) {
  //   return <h3>Log in to see your User Profile and saved Itinerary!</h3>;
  // }

  return (
    <Container className="p-5">
      <h1>(user.firstName) (user.lastName)</h1>
      <p>(user.email)</p>
      <h3>Activities Selected</h3>
      <li>(user.savedActivities)</li>
    </Container>
  );
}
export default Profile;

// export default function Profile() {
//     return (
//         <div className='section-heading container'>
//             <h2 className='page-heading'>Profile</h2>
//             <div className="main-container">
//                 <h2>First Name ({firstName})</h2>
//                 <h2>Last Name ({lastName})</h2>
//                 <h2>Email ({email})</h2>
//             </div>
//             );
// };
