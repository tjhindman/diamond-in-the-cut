import React from "react";
import { HomeHeader, AboutUs, ProjectsPreview } from '../../components'

const Home = () => {
  return (
    <React.Fragment>
      <HomeHeader />
      <AboutUs />
      <ProjectsPreview />
      <div style={{height: '50vh'}}></div>
      <div style={{height: '50vh'}}></div>
      <div style={{height: '50vh'}}></div>
      <div style={{height: '50vh'}}></div>
      <div style={{height: '50vh'}}></div>
      <div style={{height: '50vh'}}></div>
    </React.Fragment>
  );
};

export default Home;