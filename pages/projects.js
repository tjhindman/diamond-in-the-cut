import Head from "next/head";

import { NavBar } from "../components";
import { ProjectCard } from "../components/ProjectsPreview";

import { projectList } from "./api/test";

import styles from "../styles/Projects.module.css";

const Projects = (props) => {
  return (
    <div className={styles.projWrap}>
      <Head>
        <title>Projects | Diamond in the Cut</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <h1 className={styles.projHeader}>Projects</h1>
      <hr style={{ width: "50vw" }} />
      <div className={styles.imgWrap}>
        {projectList.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
