import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import { ADD_USER } from "../utils/mutations";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function Signup(props) {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="signin">
      <Card className="m-2 p-5 text-black" style={{ width: "38rem" }}>
        {/* <Link to="/login">Return to Login</Link> */}
        <form className="signup-form" onSubmit={handleFormSubmit}>
          <h2 className="text-center">Signup now! It's quick and easy</h2>
          <Form.Group className="signup-form" controlId="">
            <Form.Label>First name</Form.Label>
            <input
              placeholder="First"
              name="firstName"
              type="firstName"
              id="firstName"
              onChange={handleChange}
            />
            <Form.Text
              className="text-muted"
              onChange={handleChange}
            ></Form.Text>
          </Form.Group>
          <Form.Group className="signup-form" controlId="">
            <Form.Label>Last name</Form.Label>
            <input
              placeholder="Last"
              name="lastName"
              type="lastName"
              id="lastName"
              onChange={handleChange}
            />
            <Form.Text
              className="text-muted"
              onChange={handleChange}
            ></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
            <Form.Text
              className="text-muted"
              onChange={handleChange}
            ></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="username" placeholder="Username" />
            <Form.Text
              className="text-muted"
              onChange={handleChange}
            ></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
            <Form.Text
              className="text-muted"
              onChange={handleChange}
            ></Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>

          <div className="d-flex justify-content-between">
            <button type="submit">Submit</button>
            <Link to="/login">Return to Login</Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Signup;
