import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";

import { withFirebase } from "../Firebase";
// import { FirebaseContext } from '../Firebase';
import * as ROUTES from "../constants/routes";
import { Form, Button, Row, Col } from "react-bootstrap";

const SignUpPage = () => (
  <div>
    <h1 className="text-center">Sign Up</h1>
    <SignUpForm />
    {/* <FirebaseContext.Consumer>
      {firebase => <SignUpForm firebase={firebase} />}
    </FirebaseContext.Consumer> */}
  </div>
);

const INITIAL_STATE = {
  username: "",
  email: "",
  passwordOne: "",
  passwordTwo: "",
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { username, email, passwordOne } = this.state;

    function createCart(email) {
      return fetch("/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          useremail: email,
        }),
      }).then((data) => data.json());
    }

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        this.setState({ ...INITIAL_STATE });
        createCart(email);
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { username, email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
      // <form className="text-center" onSubmit={this.onSubmit}>
      //   <input
      //     name="username"
      //     value={username}
      //     onChange={this.onChange}
      //     type="text"
      //     placeholder="Full Name"
      //   />
      //   <input
      //     name="email"
      //     value={email}
      //     onChange={this.onChange}
      //     type="text"
      //     placeholder="Email Address"
      //   />
      //   <input
      //     name="passwordOne"
      //     value={passwordOne}
      //     onChange={this.onChange}
      //     type="password"
      //     placeholder="Password"
      //   />
      //   <input
      //     name="passwordTwo"
      //     value={passwordTwo}
      //     onChange={this.onChange}
      //     type="password"
      //     placeholder="Confirm Password"
      //   />
      //   <button disabled={isInvalid} type="submit" >Sign Up</button>

      //   {error && <p>{error.message}</p>}
      // </form>
      <Form className="text-center" onSubmit={this.onSubmit}>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            User Name
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              name="username"
              value={username}
              onChange={this.onChange}
              type="text"
              placeholder="username"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={2}>
            Email Address
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              name="email"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="youremail@email.com"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Password
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              name="passwordOne"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={2}>
            Confirm Password
          </Form.Label>
          <Col sm={4}>
            <Form.Control
              name="passwordTwo"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 1, offset: 2 }}>
            <Button disabled={isInvalid} type="submit">
              Sign Up
            </Button>
          </Col>
        </Form.Group>
        {error && <p>{error.message}</p>}
      </Form>
    );
  }
}

const SignUpLink = () => (
  <p className="text-center">
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

// const SignUpForm = withRouter(withFirebase(SignUpFormBase));

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
