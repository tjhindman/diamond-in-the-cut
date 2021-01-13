import React from "react";

import Carousel from "react-bootstrap/Carousel";

export const HomeHeader = () => {
  return (
    <Carousel style={{ zIndex: "0" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "66vh" }}
          src="./images/header.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "66vh" }}
          src="./images/header2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "66vh" }}
          src="./images/header3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
