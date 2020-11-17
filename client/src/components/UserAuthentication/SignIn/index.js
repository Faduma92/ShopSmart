import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
 
import { SignUpLink } from '../SignUp';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../constants/routes';
import { PasswordForgetForm } from '../PasswordForget/index';
import Form from 'react-bootstrap/Form'
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
 
const SignInPage = () => (
  <div >
    <h1 className="text-center">Log In</h1>
    <SignInForm />
    {/* <PasswordForgetLink /> */}
    <PasswordForgetForm />
    
  </div>
);
 
const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};
 
class SignInFormBase extends Component {
  constructor(props) {
    super(props);
 
    this.state = { ...INITIAL_STATE };
  }
 
  onSubmit = event => {
    const { email, password } = this.state;
 
    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
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
    const { email, password, error } = this.state;
 
    const isInvalid = password === '' || email === '';
 
    return (
      <Form  className="text-center" onSubmit={this.onSubmit} >
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email Address
          </Form.Label>
          <Col sm={4}>
            <Form.Control  name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="youremail@email.com" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={4}>
            <Form.Control name="password"
          value={password}
          onChange={this.onChange}
          type="password"
          placeholder="Password" />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 1, offset: 2 }}>
            <Button disabled={isInvalid} type="submit">Sign in</Button>
          </Col>
          <SignUpLink />
        </Form.Group>
        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}
 
const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);
 
export default SignInPage;
 
export { SignInForm };