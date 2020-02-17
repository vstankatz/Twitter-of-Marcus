import React from 'react';
import PropTypes from 'prop-types';

export default function CreateTweetButton(props){
  return (
    <div>
      <button onClick={props.onCreateNewTweet}>Create Tweet!</button>
    </div>
  );
}
CreateTweetButton.propTypes = {
  onCreateNewTweet: PropTypes.func
};
