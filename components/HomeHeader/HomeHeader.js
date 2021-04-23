import React from "react";

import Carousel from "react-bootstrap/Carousel";

export const HomeHeader = (props) => {
  return (
    <Carousel style={{ width: "70%" }}>
      {props.projectList.map((project) => (
        <Carousel.Item style={{ height: "47vh" }}>
          <img
            className="d-block w-100"
            style={{ height: "100%" }}
            src={project.image}
            alt={project.project}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
