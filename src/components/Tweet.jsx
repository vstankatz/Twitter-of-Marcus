import React from 'react';
import {ListGroup, Image }from 'react-bootstrap';
import PropTypes from 'prop-types';

class Tweet extends React.Component {

  constructor(props){
    super(props);
    this.state = {

      count: 0
    }
    this.incrementLikes = this.incrementLikes.bind(this)

    };

    incrementLikes = () => {
      let newCount = this.state.count +1
      this.setState({ count: newCount})

    }

    decrementLikes = () => {
      let newCount = this.state.count -1
      this.setState({ count: newCount})

    }

    render () {
      return(
        <div>
          <ListGroup.Item>
            <Image className='feedImage' src="https://www.netactivity.us/backup2019/wp-content/uploads/2018/08/Network-Profile.png"></Image>
            <h5>{this.props.author}</h5>
            <p>{this.props.body}</p>
            <p> Number of likes: {this.state.count}</p>
            <button onClick={this.incrementLikes}>Vote Up</button>
            <button onClick={this.decrementLikes}>Vote Down</button>
          </ListGroup.Item>
        </div>
      )
    }
  }

  Tweet.propTypes = {
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }
  export default Tweet;
