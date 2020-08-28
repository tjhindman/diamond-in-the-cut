import React from 'react';

import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
    return (
        <React.Fragment>
          <Nav className="justify-content-center" activeKey="/" style={{position: 'fixed', width: '100%', zIndex: '1', fontSize: '2em', color: 'white', background: 'rgba(255, 165, 0, 0.8)'}}>
            <Nav.Item>
              <Nav.Link href="/" style={{color: 'inherit'}}>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item> | </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/projects" style={{color: 'inherit'}}>Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item> | </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contactus" style={{color: 'inherit'}}>Contact Us</Nav.Link>
            </Nav.Item>
          </Nav>
        </React.Fragment>
    );
}
 
export default NavBar;