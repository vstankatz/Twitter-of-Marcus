import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import { Form, FormControl, Button } from 'react-bootstrap';
import Moment from 'moment';

function TweetForm(props){
  let _author = null;
  let _body = null;

  function handleTweetFormSubmission(event) {
    event.preventDefault();
    props.onTweetCreation({author: _author.value, body: _body.value, count:0, id: v4(), timeOpen: new Moment()});

    _author.value = '';
    _body.value = '';
  }

  return(


    <Form onSubmit={handleTweetFormSubmission}>
      <Form.Group controlId="author.ControlInput1">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" id='author' ref={(input) => {_author = input;}} placeholder="Bob" />
      </Form.Group>
      <Form.Group controlId="body.ControlTextarea1">
        <Form.Label>Body</Form.Label>
        <Form.Control as="textarea" id='body' ref={(input) => {_body = input;}} />
      </Form.Group>
      <Button variant="info" type='submit'>Tweet!</Button>
    </Form>

  );
}

TweetForm.propTypes = {
  onTweetCreation: PropTypes.func
};

export default TweetForm;
