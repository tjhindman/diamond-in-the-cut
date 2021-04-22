import React from "react";

import Carousel from "react-bootstrap/Carousel";

export const HomeHeader = (props) => {
  console.log(props);
  return (
    <Carousel style={{ alignSelf: "center", width: "85%" }}>
      {props.projectList.map((project) => (
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "66vh" }}
            src={project.image}
            alt={project.project}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
