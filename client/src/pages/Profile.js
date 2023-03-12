import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AutoLayoutExample() {
    return (
        <Container>
            <Row>
                <Col>First Name ({firstName})</Col>
                <Col>2 of 2</Col>
            </Row>
            <Row>
                <Col>Last Name ({lastName})</Col>
                <Col>2 of 2</Col>
            </Row>
            <Row>
                <Col>email ({email})</Col>
                <Col>2 of 2</Col>
            </Row>
        </Container>
    );
}
export default AutoLayoutExample;


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





