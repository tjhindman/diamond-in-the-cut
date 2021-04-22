import React from "react";

// import styles from "./ProjectCard.module.css";

const styles = {
  proWrap: {
    backgroundColor: "darkgray",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  imgWrap: {
    overflow: "auto",
    whiteSpace: "nowrap",
    // height: "30vh",
    width: "80vw",
  },
  image: {
    display: "inline-block",
    width: "23%",
    margin: "1%",
    backgroundColor: "black",
  },
};

export const ProjectsPreview = (props) => {
  const imgEx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(props);
  return (
    <div style={styles.proWrap}>
      <h1
        style={{
          fontSize: "3em",
          paddingTop: "1.5%",
          fontFamily: "'Prata', serif",
        }}
      >
        Projects
      </h1>
      <hr style={{ width: "20vw" }} />
      <div style={styles.imgWrap}>
        {/* Test logic for when real images are being populated in state */}
        {props.projectList.map((project) => (
          <img
            className="image"
            style={styles.image}
            src={project.image}
            alt={project.project}
          />
        ))}
      </div>
    </div>
  );
};
