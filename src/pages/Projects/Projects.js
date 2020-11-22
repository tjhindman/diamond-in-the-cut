import React from "react";
import { ProjectCard } from "../../components/ProjectsPreview";
import "./Projects.css";

const Projects = () => {
  const imgEx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      <hr style={{ width: "20vw" }} />
      <div className="imgWrap">
        {/* Test logic for when real images are being populated in state */}
        {imgEx.map((fakeImg) => (
          <ProjectCard key={fakeImg} />
        ))}
      </div>
    </>
  );
};

export default Projects;
