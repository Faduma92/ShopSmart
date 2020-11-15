import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import AuthUserContext from "../UserAuthentication/Session/context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 300,
    width: 200,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function Cart(props) {
  const authUser = useContext(AuthUserContext);
  const [cartStorage, setcartStorage] = useState([]);

  function getcartStorages() {
    return fetch("/cart").then((data) => data.json());
  }

  useEffect(() => {
    getcartStorages().then((data) => {
      console.log(data);
      setcartStorage(data[0].products);
    });
  }, []);

  function removeData(productsku) {
    setcartStorage(
      cartStorage.filter((product) => product.skunumber !== productsku)
    );
    return fetch("/cart/delete", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        useremail: authUser.email,
        // useremail: authUser.useremail,
        skunumber: productsku,
      }),
    }).then((data) => data.json());
  }

  function clearData() {
    cartStorage.map((product) => {
      console.log(product.skunumber);
      removeData(product.skunumber);
    });
    setcartStorage([]);
  }

  function productTotalSum(productID) {
    var totalAmount = 0.0;
    cartStorage.map((value) => {
      if (value._id == productID) {
        totalAmount = value.price * value.stockquantity;
      }
    });
    return totalAmount;
  }

  const getGrandTotalSum = (cartStorage) => {
    let totalAmount = 0.0;
    cartStorage.map(
      (value) =>
        (totalAmount = (value.price + totalAmount) * value.stockquantity)
    );
    return (Math.round(totalAmount * 100) / 100).toFixed(2);
  };

  const getTotalSum = (cartStorage) => {
    let totalAmount = 0.0;
    cartStorage.map((value) => (totalAmount = value.price + totalAmount));
    return (Math.round(totalAmount * 100) / 100).toFixed(2);
  };

  function incrementCount(cartId) {
    var newStockQuantity = 0;
    setcartStorage([
      cartStorage.map((product) => {
        if (product._id == cartId) {
          newStockQuantity = product.stockquantity + 1;
        }
      }),
    ]);
    newQuantity(cartId, newStockQuantity);
  }

  function decrementCount(cartId) {
    var newStockQuantity = 0;
    setcartStorage([
      cartStorage.map((product) => {
        if (product._id == cartId) {
          newStockQuantity = product.stockquantity - 1;
        }
      }),
    ]);
    if (newStockQuantity > 0) {
      newQuantity(cartId, newStockQuantity);
    } else {
      removeData(cartId);
    }
  }

  function newQuantity(cartId, newStockQuantity) {
    console.log(cartId);
    return fetch("/cart/" + cartId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        stockquantity: newStockQuantity,
      }),
    }).then((data) => data.json());
  }

  function totalItem(cartStorage) {
    var totalItemCount = 0;
    cartStorage.map((item) => {
      totalItemCount = totalItemCount + item.stockquantity;
    });
    return totalItemCount;
  }

  return (
    <div>
      <h1 className="text-center">Cart</h1>
  
      {cartStorage.length > 0 && (
        <Container fluid>
          <br />
          <Card border="secondary">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title>Product Name</Card.Title>
                </Col>
                <Col xs lg="1">
                  <Card.Title>Total</Card.Title>
                </Col>
                <Col xs lg="1">
                  <Card.Title>Tax Incl.</Card.Title>
                </Col>
                <Col xs lg="1"></Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      )} 

      {cartStorage.map((value) => (
        <Container fluid>
          <br />
          <Card border="secondary">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title>{value.productname}</Card.Title>
                </Col>
                <Col xs lg="1">
                  <Card.Title>$ {value.price}</Card.Title>
                </Col>
                <Col xs lg="1">
                  <Card.Title>
                    $ {(Math.round(value.price * 1.13 * 100) / 100).toFixed(2)}
                  </Card.Title>
                </Col>
                <Col xs lg="1">
                  <Button
                    variant="primary"
                    onClick={() => removeData(value.skunumber)}
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      ))} :
      {cartStorage.length > 0 && (
        <Container fluid>
          <br />
          <Card border="secondary">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title>Grand Total</Card.Title>
                </Col>
                <Col xs lg="1">
                  <Card.Title>
                    ${" "}
                    {(Math.round(getTotalSum(cartStorage) * 100) / 100).toFixed(
                      2
                    )}
                  </Card.Title>
                </Col>
                <Col xs lg="1">
                  <Card.Title>
                    ${" "}
                    {(
                      Math.round(getGrandTotalSum(cartStorage) * 1.13 * 100) /
                      100
                    ).toFixed(2)}
                  </Card.Title>
                </Col>
                <Col xs lg="1">
                  <Button variant="danger" onClick={() => clearData()}>
                    Clear Cart
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      )}
      {cartStorage.length == 0 && (
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h2 className="text-center">Your Cart is Empty</h2>
        </div>
      )}

      
    </div>
  );
}
