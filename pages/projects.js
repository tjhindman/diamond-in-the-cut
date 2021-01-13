import Head from 'next/head'

import { NavBar } from "../components";
import { ProjectCard } from "../components/ProjectsPreview";

import styles from "./Projects.module.css";

const Projects = () => {
  const imgEx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
    <Head>
      <title>Projects | Diamond in the Cut</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <NavBar />
      <h1 style={{ textAlign: "center" }}>Projects</h1>
      <hr style={{ width: "20vw" }} />
      <div className={styles.imgWrap}>
        {/* Test logic for when real images are being populated in state */}
        {imgEx.map((fakeImg) => (
          <ProjectCard key={fakeImg} />
        ))}
      </div>
    </div>
  );
};

export default Projects;