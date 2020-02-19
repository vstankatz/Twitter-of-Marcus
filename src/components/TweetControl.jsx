import React from "react";
import PropTypes from 'prop-types';
import TweetForm from './TweetForm';
import CreateTweetButton from './CreateTweetButton';

class TweetControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleCreateNewTweet = this.handleCreateNewTweet.bind(this)
  }

  handleCreateNewTweet(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <TweetForm onTweetCreation={this.props.onTweetCreation}/>;
    }else{
      currentlyVisibleContent = <CreateTweetButton onCreateNewTweet={this.handleCreateNewTweet}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

TweetControl.propTypes = {
  onTweetCreation: PropTypes.func
};

export default TweetControl;
