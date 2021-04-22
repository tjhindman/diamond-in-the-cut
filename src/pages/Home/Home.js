import React from "react";
import { HomeHeader, AboutUs, ProjectsPreview } from "../../components";

const Home = () => {
  return (
    <div style={{ paddingTop: "10vh" }}>
      <HomeHeader />
      <AboutUs />
      <ProjectsPreview />
    </div>
  );
};

export default Home;
