import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Eventsavailable from './Eventsavailable';

function Profile() {
    //useEffec - me
    const addEvent = (event) => {
        console.log(event)
        //Add it SAVE_EVENT mutation
    }
    return (
        <Container>
            <Row>
                <Col  xs={10}>
                    <h4>Guest Name :</h4>
                    <p>Party of : <span>2</span></p>
                    <p>Email :<span></span></p>

                    <Row>

                        <Col>
                            <Eventsavailable addEvent={addEvent} />
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <h3>Activities Selected</h3>

                </Col>
            </Row>
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





