import React from 'react';
import PropTypes from 'prop-types';
import {Button }from 'react-bootstrap';

export default function CreateTweetButton(props){
  return (
    <div>
      <Button variant="info" onClick={props.onCreateNewTweet}>Create Tweet!</Button>
    </div>
  );
}
CreateTweetButton.propTypes = {
  onCreateNewTweet: PropTypes.func
};
