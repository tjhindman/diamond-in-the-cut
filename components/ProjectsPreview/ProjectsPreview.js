import React from "react";

import styles from "./ProjectPreview.module.css";

export const ProjectsPreview = (props) => {
  return (
    <div className={styles.proWrap}>
      <h1 className={styles.header}>Projects</h1>
      <hr style={{ width: "20vw" }} />
      <div className={styles.imgWrap}>
        {props.projectList.map((project) => (
          <img
            className="image"
            className={styles.image}
            src={project.image}
            alt={project.project}
          />
        ))}
      </div>
    </div>
  );
};
