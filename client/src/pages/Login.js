import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import Card from "react-bootstrap/Card";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="login">
      <Card className="m-2 p-5" style={{ width: "38rem" }}>
        <h2 className="text-center">Welcome Back!</h2>
        <form className="login-form" onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3 col-auto" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <input
              placeholder="youremail@test.com"
              name="email"
              type="email"
              className="form-label form-control"
              id="email"
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <input
              placeholder="******"
              name="password"
              type="password"
              className="form-label form-control"
              id="pwd"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button variant="warning display-center" type="submit">
              Submit
            </Button>
            <Link to="/signup">Create new account </Link>
          </div>
          {error ? (
            <div>
              <p className="error-text">
                The provided credentials are incorrect
              </p>
            </div>
          ) : null}
        </form>
      </Card>
    </div>
  );
}

export default Login;
