import AuthUserContext from '../UserAuthentication/Session/context';
import React, { useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import { Card, Button } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Icon from "@material-ui/core/Icon";
import { useEffect, useState } from "react";

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

export default function Health() {
  const authUser = useContext(AuthUserContext);
  const [spacing, setSpacing] = React.useState(10);
  const classes = useStyles();
  const [product, setProduct] = useState([]);
  

  function getProducts() {
    return fetch("/product/health").then((data) => data.json());
  }

  useEffect(() => {
    getProducts().then((data) => {
      console.log(data);
      setProduct(data);
    });
  }, []);

      // Add to Cart Function
      function addToCart(newCart) {
        return fetch('/cart', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            useremail: authUser.email,
            skunumber: newCart.skunumber,
            productname: newCart.productname,
            price: newCart.price,
            stockquantity: 1
          })
    
        })
          .then(data => data.json())
      }
    
      const handleSubmit = (productid) => {
        console.log(productid)
        var newCart = product.filter(product => {
          if (product._id == productid) {
            return product
          }
        })
        console.log(newCart)
        addToCart(newCart[0])
      };
  
      
  return (
    <div className="latest-product-area">
      <h3 className="section-tittle text-center mb-50">Health</h3>
      <Grid container className={classes.root} spacing={5}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={spacing}>
            {product.map((value) => (
              <Grid key={value._id} item>
                <Paper className={classes.paper}>
                <Card.Img variant="top" src={value.productimage} style={{height: "130px"}} />                  <Card.Body>
                    <Card.Title style={{fontSize: "14px"}}>{value.productname}</Card.Title>
                    <Card.Text>$ {value.price}</Card.Text>
                    {
              authUser &&
                    <IconButton aria-label="add to favorites">
                      <Icon onClick={() => handleSubmit(value._id)}>add_circle</Icon>
                    </IconButton>
                    
            }
                  </Card.Body>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
