import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import styles from "../styles/NavBar.module.css";

export const NavBar = (props) => {
  return (
    <>
      <Navbar fixed="top" className={styles.navWrap}>
        <Navbar.Brand className={styles.navTitle}>
          Hindman Diamond in the Cut
        </Navbar.Brand>
        <Nav className={"justify-content-end " + styles.navLinks}>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/contactus">Contact Us</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
