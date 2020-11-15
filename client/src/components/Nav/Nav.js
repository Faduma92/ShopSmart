import React from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavLink,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import logo from "./ShopSmart.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as ROUTES from '../UserAuthentication/constants/routes';
import { AuthUserContext } from '../UserAuthentication/Session';
import SignOutButton from '../UserAuthentication/SignOut';
import { withFirebase } from '../UserAuthentication/Firebase';


const NavigationNonAuth = () => (
  <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">
          <img src={logo} width="50" height="50" />
          Shop Smart
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/Electronics" className="nav-link">
            Electronics
          </Link>

          <Link to="/Health" className="nav-link">
            Health
          </Link>

          <Link to="/Beauty" className="nav-link">
            Beauty
          </Link>
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-primary">Search</Button>
        </Form>
        <Link to="/Login" className="nav-link">
          Log In
        </Link>
        <Link to="/Signup" className="nav-link">
          Sign Up
        </Link>
      </Navbar>
  
);

// Sign out button logic 

const NavigationAuth = () => (
  <Navbar bg="light" variant="light">
  <Navbar.Brand href="/">
    <img src={logo} width="50" height="50" />
    Shop Smart
  </Navbar.Brand>
  <Nav className="mr-auto">
    <Link to="/Electronics" className="nav-link">
      Electronics
    </Link>

    <Link to="/Health" className="nav-link">
      Health
    </Link>

    <Link to="/Beauty" className="nav-link">
      Beauty
    </Link>
  </Nav>

  <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
    <Button variant="outline-primary">Search</Button>
    <Link to="/Cart" type="button" class="btn btn-light">
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-cart2"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
        />
      </svg>
    </Link>
  </Form>
  
    <Link className="nav-link">
    <SignOutButton />
    </Link>
</Navbar>
 
);

function MyNav() {
  
  
  return (
   
      <div>
          <AuthUserContext.Consumer>
            {authUser =>
              authUser ? <NavigationAuth /> : <NavigationNonAuth />
            }
          </AuthUserContext.Consumer>
    </div>
    
  )
  
          
  
}

export default MyNav;
