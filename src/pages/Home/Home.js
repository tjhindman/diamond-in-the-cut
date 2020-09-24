import React from "react";
import { HomeHeader, AboutUs, ProjectsPreview } from '../../components'

const Home = () => {
  return (
    <div style={{overflow: "auto"}}>
      <HomeHeader />
      <AboutUs />
      <ProjectsPreview />
    </div>
  );
};

export default Home;