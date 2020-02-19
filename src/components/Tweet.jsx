import React from 'react';
import {ListGroup, Image, Button }from 'react-bootstrap';
import PropTypes from 'prop-types';
import Moment from 'moment';

class Tweet extends React.Component {

  constructor(props){
    super(props);
    this.state = {

      count: 0
    }
    this.incrementLikes = this.incrementLikes.bind(this);
    this.decrementLikes = this.decrementLikes.bind(this);
  };

  incrementLikes() {
    this.props.changeLikes(this.props.id, 1);
  }

  decrementLikes() {
    this.props.changeLikes(this.props.id, -1);
  }


  render () {
    return(
      <div>
      <ListGroup.Item>
      <Image className='feedImage' src="https://www.netactivity.us/backup2019/wp-content/uploads/2018/08/Network-Profile.png"></Image>
      <h5>{this.props.author}</h5>
      <p>{this.props.body}</p>
      <p> Number of likes: {this.props.count}</p>
      <p>Uploaded at: {this.props.formattedWaitTime}</p>
      <Button variant="outline-success" onClick={this.incrementLikes}>Vote Up</Button>
      <Button variant="outline-danger" onClick={this.decrementLikes}>Vote Down</Button>
      </ListGroup.Item>
      </div>
    )
  }
}

Tweet.propTypes = {
  author: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  formattedWaitTime: PropTypes.string.isRequired
}
export default Tweet;
