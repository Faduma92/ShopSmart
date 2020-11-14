import React from 'react'
import {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
  Card,
  Button,
  Container,
  Row,
  Col
} from "react-bootstrap";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 300,
    width: 200
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function Cart(props) {

  const [spacing, setSpacing] = React.useState(10);
  const classes = useStyles();
  const [cartStorage, setcartStorage] = useState([]);
  const [justforyou, setJustforyou] = useState([]);

  function getcartStorages() {
    return fetch("/cart").then((data) => data.json());
  }

  useEffect(() => {
    getcartStorages().then((data) => {
      const newArray = data.splice(0, 5);
      console.log(data);
      setcartStorage(newArray);
    });
  }, []);

  function removeData(cartId) {
    window.location.reload(false);
    return fetch('/cart/' + cartId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(data => data.json())
  }

  function clearData() {
    window.location.reload(false);
    return fetch('/cart' , {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(data => data.json())
  }
  

  const getTotalSum = (cartStorage) => {
    let totalAmount = 0.00;
    cartStorage.map((value) => (
      totalAmount = value.price + totalAmount
    ))
    return (Math.round(totalAmount * 100) / 100).toFixed(2);
  };

  return (
    <div>
      <h1 className="text-center">Cart</h1>
      
      {cartStorage.length === 0 && (
        <div>
          <br/><br/><br/><br/><br/><br/>
          <h2 className="text-center">Your Cart is Empty</h2>
        </div>
      )}
      {
      cartStorage.map((value) => (
        <Container>
        <br/>
        <Card border="secondary" display="flex">
          <Card.Body>
            <Row >
              <Col>
      <Card.Title>{value.productname}</Card.Title>
              </Col>
              <Col md="auto">
      <Card.Title>$ {value.price}</Card.Title>
              </Col>
              <Col xs lg="2">
              </Col>
              <Col xs lg="2">
                <Button variant="primary" onClick={() => removeData(value._id)}>Remove</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      ))
    } 
      {cartStorage.length > 0 && (
            <Container>
            <br/>
              <Card border="secondary" display="flex">
                <Card.Body>
                  <Row >
                    <Col>
            <Card.Title>Grand Total</Card.Title>
                    </Col>
                    <Col md="auto">
        <Card.Title>$ {getTotalSum(cartStorage)}</Card.Title>
                    </Col>
                    <Col xs lg="2">
                <Button variant="primary" onClick={() => clearData()}>Clear Cart</Button>
              </Col>
                  </Row>
                </Card.Body>
              </Card>
          </Container>
      )}
    </div>
  )
}
