import logo from "./logo.svg";
 import "./App.css";
 import MyNav from "./components/Nav/Nav";
 import Home from "./components/Home/Home";
 import Footer from "./components/Footer/Footer";
 import Electronics from "./components/Electronics/Electronics";
 import Health from "./components/Health/Health";
 import Beauty from "./components/Beauty/Beauty";
 import Aboutus from "./components/Aboutus/Aboutus";
 import Cart from "./components/Cart/Cart";
import SignInPage from './components/UserAuthentication/SignIn';
import SignUpPage from './components/UserAuthentication/SignUp';
import SignUpLink from './components/UserAuthentication/SignUp';
import * as ROUTES from './components/UserAuthentication/constants/routes';
import UserAuthentication from './components/UserAuthentication/UserAuthentication'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import SignOut from './components/UserAuthentication/SignOut';


function App() {
  return (
    
    <div>
    <BrowserRouter>
      <MyNav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Redirect to="/" />
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
      </Switch>
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
