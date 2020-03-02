import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <Form>
        <Form.Group as={Row} controlId='formPlaintextEmail'>
          <Form.Label column sm='2'>
            Email
          </Form.Label>
          <Col sm='10'>
            <Form.Control type='email' placeholder='email@example.com' />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId='formPlaintextPassword'>
          <Form.Label column sm='2'>
            Password
          </Form.Label>
          <Col sm='10'>
            <Form.Control type='password' placeholder='Password' />
          </Col>
        </Form.Group>
        <Link to={"/admin"}>
          <Button color='secondary' size=''>
            Login
          </Button>
        </Link>
      </Form>
    );
  }
}

export default Login;
