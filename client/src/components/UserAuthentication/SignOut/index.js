import React from 'react';
// import AuthUserContext from '../Session/context';
 
import { withFirebase } from '../Firebase';
import { Button } from 'react-bootstrap';

// function clearCart(email) {
//   return fetch('/cart/delete', {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//       useremail: email,
//     })
//   })
//     .then(data => data.json())
//}
 
const SignOutButton = ({ firebase }) => {
 // const authUser = useContext(AuthUserContext);

  const handleClick = (e) => {
    console.log('trigger', firebase);
    // clearCart(authUser.email);
    firebase.doSignOut();
  }
  return (<Button className="btn-primary" type="button" onClick={handleClick}>
    Sign Out
  </Button>)
};
 
export default withFirebase(SignOutButton);

