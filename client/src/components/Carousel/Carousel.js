import React from "react";
import { Carousel } from "react-bootstrap";
import electronics from "./electronics.jpg";
import health from "./health.jpg";
import beauty from "./beauty.png";

function MyCarousel() {
  return (
    <div>
      <Carousel style={{ height: "60vh" }}>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={electronics}
            alt="First slide"
            style={{ height: "60vh" }}
          />
          <Carousel.Caption>
            <h3>Electronics</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src={health}
            alt="Second slide"
            style={{ height: "60vh" }}
          />
          <Carousel.Caption>
            <h3>Health and Wellness</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={beauty}
            alt="Third slide"
            style={{ height: "60vh" }}
          />
          <Carousel.Caption>
            <h3>Beauty and Cosmetics</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MyCarousel;
