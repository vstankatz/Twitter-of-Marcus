import React from 'react';
import {ListGroup, Image }from 'react-bootstrap';
import PropTypes from 'prop-types';

function Tweet(props){
  return(
    <div>
      <ListGroup.Item>
        <Image className='feedImage' src="https://www.netactivity.us/backup2019/wp-content/uploads/2018/08/Network-Profile.png"></Image>
        <h5>{props.author}</h5>
        <p>{props.body}</p>
      </ListGroup.Item>
    </div>
  );
}
Tweet.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}
export default Tweet;
