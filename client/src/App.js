import logo from './logo.svg';
import './App.css';
import MyNav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import Electronics from './components/Electronics/Electronics'
import Health from './components/Health/Health'
import Beauty from './components/Beauty/Beauty'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import React, { useState, useEffect } from 'react';

function App() {
  return (
    
<div>
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
    
  
   </Switch>
   </BrowserRouter>
   <Footer />
</div>
  );
}

export default App;
