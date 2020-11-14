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
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";


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
  const [cartStorage, setcartStorage] = useState([]);


  function getcartStorages() {
    return fetch("/cart").then((data) => data.json());
  }

  useEffect(() => {
    getcartStorages().then((data) => {
      setcartStorage(data);
    });
  }, []);

  function removeData(cartId) {
    window.location.reload();
    return fetch('/cart/' + cartId, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(data => data.json())
  }

  function clearData() {
    window.location.reload();
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
                <IconButton>
                <Icon>remove_circle_outline</Icon>
                </IconButton>
              <span>{value.stockquantity}</span>
              <IconButton>
                <Icon>add_circle_outline</Icon>
                </IconButton>
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
            <Card.Title>Tax</Card.Title>
                    </Col>
                    <Col  md="auto">
        <Card.Title>$ {(Math.round(getTotalSum(cartStorage) * 0.13 * 100) / 100).toFixed(2)}</Card.Title>
                    </Col>
                    <Col xs lg="2">
                    </Col>
                    <Col xs lg="2">
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            <br/>
              <Card border="secondary" display="flex">
                <Card.Body>
                  <Row >
                    <Col>
            <Card.Title>Grand Total</Card.Title>
                    </Col>
                    <Col md="auto">
        <Card.Title>$ {(Math.round(getTotalSum(cartStorage) * 1.13 * 100) / 100).toFixed(2)}</Card.Title>
                    </Col>
                    <Col xs lg="2">
                    <Card.Title>Total Items: {cartStorage.length}</Card.Title>
                    </Col>
                    <Col xs lg="2">
                <Button variant="primary" onClick={() => clearData()}>Clear Cart</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
          </Container>
      )}
      {cartStorage.length == 0 && (
        <div>
          <br/><br/><br/><br/><br/><br/>
          <h2 className="text-center">Your Cart is Empty</h2>
        </div>
      )}
    </div>
  )
}
