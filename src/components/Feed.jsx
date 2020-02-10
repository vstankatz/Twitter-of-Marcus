import React from "react";
import { Container, Card, Form, Row, Col, ListGroup, Image, FormControl, Button }from 'react-bootstrap';
import '../App.css';

function Feed(){
  return (
    <>
    <Card bg="dark" style={{ width: '28rem' }}>
      <Card.Header>
        <Form>
          <Row>
            <Col md="9">
              <FormControl type="text" placeholder="Tweet" className="mr-sm-2" />
            </Col>
            <Col>
              <Button variant="outline-info">tweet</Button>
            </Col>
          </Row>
        </Form>
      </Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Image className='feedImage' src="https://www.netactivity.us/backup2019/wp-content/uploads/2018/08/Network-Profile.png"></Image>
          <h5>Tweet Author</h5>
          <p>Cras justo odio</p></ListGroup.Item>
        <ListGroup.Item>
          <Image className='feedImage' src="https://www.netactivity.us/backup2019/wp-content/uploads/2018/08/Network-Profile.png"></Image>
          <h5>Tweet Author</h5>
          Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>
          <Image className='feedImage' src="https://www.netactivity.us/backup2019/wp-content/uploads/2018/08/Network-Profile.png"></Image>
          <h5>Tweet Author</h5>
          Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>

    </>
)
}

export default Feed;
