import React from "react";

export const AboutUs = () => {
  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <h1 style={{ textAlign: "center", fontSize: "3em", paddingTop: "1.5%", fontFamily: "'Prata', serif" }}>
        About Us
      </h1>
      <hr style={{ width: "20vw" }} />
      <p
        style={{
          width: "70vw",
          textAlign: "center",
          margin: "auto",
          paddingBottom: "2%",
        }}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged.
      </p>
    </div>
  );
};
