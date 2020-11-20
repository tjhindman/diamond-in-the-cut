import React, { useState } from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const styles = {
  navWrap: {
    height: "10vh",
    position: "relative",
    fontSize: "2em",
    color: "white",
    background: "white",
  },
  navLinks: {
    fontSize: "0.8em",
    width: "100%",
  },
};

const NavBar = () => {
  // TODO: FIGURE OUT WHY TF THIS SHIT ISNT SWITCHING TABS IN NAVBAR COMPONENT >:[
  // const [activeKey, setActiveKey] = useState(1);

  return (
    <React.Fragment>
      <Navbar fixed="top" style={styles.navWrap}>
        <Navbar.Brand>Hindman Diamond in the Cut</Navbar.Brand>
        <Nav className="justify-content-end" style={styles.navLinks}>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/contactus">Contact Us</Nav.Link>
        </Nav>
      </Navbar>
    </React.Fragment>
  );
};

export default NavBar;
