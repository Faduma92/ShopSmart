import React, { Component } from 'react';
import { Link } from 'react-router-dom';
 
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../UserAuthentication/constants/routes';
import { Form, Button, Row, Col } from "react-bootstrap";

 
const PasswordForgetPage = () => (
  <div>
    <h1>PasswordForget</h1>
    <PasswordForgetForm />
  </div>
);
 
const INITIAL_STATE = {
  email: '',
  error: null,
};
 
class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
 
    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { email } = this.state;
 
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  };
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const { email, error } = this.state;
 
    const isInvalid = email === '';
 
    return (
      <Form className="text-center" onSubmit={this.onSubmit}>
  <Form.Group as={Row} controlId="formHorizontalEmail">
    <Form.Label column sm={2}>
      Forgot Password?
    </Form.Label>
    <Col sm={4}>
      <Form.Control
        name="email"
        value={this.state.email}
        onChange={this.onChange}
        type="text"
        placeholder="Email Address"
      />
    </Col>
  </Form.Group>
  <Form.Group as={Row}>
    <Col sm={{ span: 2, offset: 2 }}>
      <Button disabled={isInvalid} type="submit">
        Reset Password
      </Button>
    </Col>
  </Form.Group>
  {error && <p>{error.message}</p>}
</Form>
    );
  }
}
 
const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);
 
export default PasswordForgetPage;
 
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
 
export { PasswordForgetForm, PasswordForgetLink };