import React from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import '../App.css';


function Profile(){
  return (
    <>
    <Card className='profileCard' style={{ width: '18rem' }}>
      <div id="profileTop">
      <Card.Header></Card.Header>
    <Image id="profilePic" variant="top" src="https://c8.alamy.com/comp/P9MYWR/man-avatar-profile-P9MYWR.jpg" roundedCircle/>
    <Card.Body>
      <Card.Title id="cardTitle">Bob</Card.Title>
    </Card.Body>
</div>
    <Card.Body>
      <Card.Link href="#">Profile</Card.Link>
      <Card.Link href="#">Report</Card.Link>
    </Card.Body>
  </Card>

  <Card className='profileCard' style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Text>
        Bob bob bob bob bob bob bob bob bobbob bob bob bobbob bob bob bobbob bob bob bobbob bob bob bobbob bob bob bobbob bob bob bobbob bob bob bobbob bob bob bobbob bob bob bobbob bob bob bobbob bob bob bobbob bob bob bobbob bob bob bobbob bob bob bobbob bob bob bobbob bob bob bobbob bob bob bobbob bob bob bobbob bob bob bobbob bob bob bobbob bob bob bob.
      </Card.Text>
    </Card.Body>
  </Card>
  </>
  );
}

export default Profile;
