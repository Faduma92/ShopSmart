import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Newsletter.css";
import Img from "./Newsletter.png";
import {useState} from 'react'

var sectionStyle = {
  backgroundImage: `url(${Img})`,
  backgroundRepeat: "no-repeat",
};

function Newsletter() {
  const [itemInput, setItemInput] = useState('');

  function setItem(item) {
    return fetch('/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ item })
    })
      .then(data => data.json())
   }

   const handleSubmit = (e) => {
    e.preventDefault();
    setItem(itemInput)
  };

  return (
    <div>
      <Card style={sectionStyle}>
        <Card.Body
          className="latest-wrapper lf-padding"
          style={{ padding: "100px" }}
        >
          <Card.Title className="latest-area latest-height d-flex align-items-center caption">
            <h3>
              Get our latest <br></br> deals and promotions
            </h3>
          </Card.Title>
          <Card.Text className="latest-caption">
            Subscribe to our newsletter
          </Card.Text>
          <form action="#">
            <input type="email" placeholder="Your email here" onChange={event => setItemInput(event.target.value)} value={itemInput}></input>

            <Button variant="primary" onClick={handleSubmit}>Subscribe</Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Newsletter;
