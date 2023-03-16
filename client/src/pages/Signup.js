import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
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
      <Card className="m-2 p-5 text-black" style={{ width: '38rem' }}>
      {/* <Link to="/login">Return to Login</Link> */}
      <form className="signup-form" onSubmit={handleFormSubmit}>
        <h2 className="text-center">Signup now! It's quick and easy</h2>
        <Form.Group className="signup-form" controlId="">
          <Form.Label>First name</Form.Label>
          <Form.Control type="first-name" placeholder="First name" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="signup-form" controlId="">
          <Form.Label>Last name</Form.Label>
          <Form.Control type="Last-name" placeholder="Last name" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="youremail@test.com" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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
