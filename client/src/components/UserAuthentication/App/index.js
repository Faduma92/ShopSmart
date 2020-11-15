import Navigation from '../Navigation';
import LandingPage from '../Landing';
import PasswordForgetPage from '../PasswordForget';
import Home from '../../Home/Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';

import Electronics from '../../../components/Electronics/Electronics'
import Health from '../../../components/Health/Health'
import Beauty from '../../../components/Beauty/Beauty'
import Aboutus from '../../../components/Aboutus/Aboutus'
import Cart from '../../../components/Cart/Cart'
import SignInPage from '../../../components/UserAuthentication/SignIn';
import SignUpPage from '../../../components/UserAuthentication/SignUp';
import MyNav from '../../../components/Nav/Nav';
import Footer from '../../../components/Footer/Footer'
// import SignUpLink from './components/UserAuthentication/SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import SignOut from '../../../components/UserAuthentication/SignOut';
 
import * as ROUTES from '../constants/routes';

import { withAuthentication } from '../Session';

const UserAuth = () => (
  <BrowserRouter>
  <MyNav />
  <Switch>
    <Route exact path="/">
     

      <Home />
    </Route>
      
    <Route path="/Electronics">
<Electronics />
    </Route>
    <Route path="/Health">
<Health />
    </Route>
    <Route path="/Beauty">
<Beauty />
    </Route>
    <Route path="/Cart">
<Cart />
    </Route>
    
    <Route path="/Aboutus">
<Aboutus />
    </Route>
    
    <Route path="/Login">
         <SignInPage />
    </Route>

    <Route path="/Signup">
         <SignUpPage />
    </Route>
    <Route path="/Signout">
         <SignOut />
    </Route>

 
  </Switch>
  <Footer />
  </BrowserRouter>

 );

export default withAuthentication(UserAuth);