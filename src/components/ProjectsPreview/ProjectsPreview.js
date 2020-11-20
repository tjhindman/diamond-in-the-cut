import React from "react";

const styles = {
  proWrap: {
    backgroundColor: "darkgray",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imgWrap: {
    // display: 'flex',
    overflow: "auto",
    whiteSpace: "nowrap",
    height: "30vh",
    width: "80vw",
  },
  image: {
    display: "inline-block",
    width: "200px",
    height: "200px",
    margin: "15px",
    backgroundColor: "black",
  },
};

export const ProjectsPreview = () => {
  const imgEx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div style={styles.proWrap}>
      <h1 style={{ fontSize: "3em", padding: "1.5%" }}>Projects</h1>
      <hr style={{ width: "90vw" }} />
      <div style={styles.imgWrap}>
        {/* Test logic for when real images are being populated in state */}
        {imgEx.map((fakeImg) => (
          <div style={styles.image}></div>
        ))}
      </div>
    </div>
  );
};
