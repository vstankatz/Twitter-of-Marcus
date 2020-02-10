import React from "react";
import { Container, Card, Form, Row, Col, ListGroup, Image, FormControl, Button }from 'react-bootstrap';
import '../App.css';

function Suggestions() {
  return (
    <h3>'List of Suggestions'</h3>
    <ListGroup>
      <ListGroup.Item>
        <Image className='feedImage' src="https://www.netactivity.us/backup2019/wp-content/uploads/2018/08/Network-Profile.png"></Image>
        <h5>Tweet Author</h5>
        <p>Cras justo odio</p></ListGroup.Item>
    </ListGroup>
  )
};
export default Suggestions;
