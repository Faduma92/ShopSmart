import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Newsletter.css";
import Img from "./Newsletter.png";

var sectionStyle = {
  backgroundImage: `url(${Img})`,
  backgroundRepeat: "no-repeat",
};

function Newsletter() {
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
            <input type="email" placeholder="Your email here"></input>

            <Button variant="primary">Subscribe</Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Newsletter;
