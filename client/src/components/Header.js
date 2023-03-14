import React from "react";
import {Navbar,Container, Nav} from "react-bootstrap";

const Header =({handleCurrentPage})=>{
    return(
        <Navbar bg="primary" variant="light">
        <Container>
          <Navbar.Brand onClick={()=>{handleCurrentPage("Home")}} href="/">Vacation Planner</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>handleCurrentPage("Login")} href="#login">Login</Nav.Link>
            <Nav.Link onClick={()=>handleCurrentPage("Profile")} href="#profile">Profile</Nav.Link>
            <Nav.Link onClick={()=>handleCurrentPage("Signup")} href="#signup">Sign Up</Nav.Link>
            <Nav.Link onClick={()=>handleCurrentPage("Activity")} href="#activity">Activity</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}
export default Header;