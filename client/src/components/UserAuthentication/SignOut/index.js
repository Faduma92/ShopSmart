import React from 'react';
 
import { withFirebase } from '../Firebase';
 
const SignOutButton = ({ firebase }) => {
  const handleClick = (e) => {
    console.log('trigger', firebase);
    firebase.doSignOut();
  }
  return (<button type="button" onClick={handleClick}>
    Click to Sign Out
  </button>)
};
 
export default withFirebase(SignOutButton);

