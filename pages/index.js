import Head from "next/head";

import { projectList } from "./api/test";

import { HomeHeader, AboutUs, ProjectsPreview, NavBar } from "../components";

import styles from "../styles/Home.module.css";

const Home = (props) => {
  return (
    <div className={styles.homeWrap}>
      <Head>
        <title>Welcome | Diamond in the Cut</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className={styles.headerWrap}>
        <HomeHeader projectList={projectList} />
        <AboutUs />
      </div>
      <ProjectsPreview projectList={projectList} />
    </div>
  );
};

export default Home;
