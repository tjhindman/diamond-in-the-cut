import React from 'react'

import Card from 'react-bootstrap/Card'

const HomeHeader = () => {
    return (
        <Card className="text-white">
          <Card.Img src="./images/header.jpg" alt="Hindman Diamond in the Cut"/>
          <Card.ImgOverlay style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Card.Title style={{fontSize: '4em'}}>Hindman Diamond in the Cut</Card.Title>
            {/* <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text> */}
          </Card.ImgOverlay>
        </Card>
    );
}
 
export default HomeHeader;