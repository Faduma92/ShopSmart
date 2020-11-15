import React, { useState, setState } from "react";
import { Card } from "react-bootstrap";
import "./Aboutus.css";
// import Likecounter from "./LikeCounter";

function Aboutuscard({ name, linkedin, github, image }) {
  return (
    <div>
      <Card className="cardstyle">
        <Card.Img variant="top" src={image} style={{width: "350px", height:"200px"}}/>
        <Card.Body>
          <Card.Title>
            <h4>Hi, I am: {name}</h4>
          </Card.Title>
          <Card.Text>
            <Card.Link href={linkedin}>My LinkedIn Profile</Card.Link>
          </Card.Text>
          <Card.Text>
            <Card.Link href={github}>My Git Hub Page</Card.Link>
          </Card.Text>
          {/* <Likecounter /> */}
        </Card.Body>
      </Card>
    </div>
  );
}
export default Aboutuscard;
