import Head from "next/head";

import { NavBar } from "../components";
import { ProjectCard } from "../components/ProjectsPreview";

import { projectList } from "./api/test";

import styles from "./Projects.module.css";

const Projects = () => {
  const imgEx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div style={{ backgroundColor: "lightgray", paddingTop: "10vh" }}>
      <Head>
        <title>Projects | Diamond in the Cut</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <h1
        style={{
          margin: "0 auto",
          width: "60vw",
          paddingTop: "2%",
          fontFamily: "'Crimson Text', serif",
        }}
      >
        Projects
      </h1>
      <hr style={{ width: "50vw" }} />
      <div className={styles.imgWrap}>
        {/* Test logic for when real images are being populated in state */}
        {projectList.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
