import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const styles = {
  navTitle: {
    fontFamily: "'Tangerine', cursive"
  },
  navWrap: {
    height: "10vh",
    fontSize: "2em",
    background: "white",
  },
  navLinks: {
    fontSize: "0.7em",
    fontFamily: "'Prata', serif",
    width: "100%",
  },
};

export const NavBar = () => {
  // TODO: FIGURE OUT WHY TF THIS SHIT ISNT SWITCHING TABS IN NAVBAR COMPONENT >:[
  // const [activeKey, setActiveKey] = useState(1);

  return (
    <>
      <Navbar fixed="top" style={styles.navWrap}>
        <Navbar.Brand style={styles.navTitle}>Hindman Diamond in the Cut</Navbar.Brand>
        <Nav className="justify-content-end" style={styles.navLinks}>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/contactus">Contact Us</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};
