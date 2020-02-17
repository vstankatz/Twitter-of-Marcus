import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function TweetForm(props){
  let _author = null;
  let _body = null;

  function handleTweetFormSubmission(event) {
    event.preventDefault();
    props.onTweetCreation({author: _author.value, body: _body.value, id: v4()});
    _author.value = '';
    _body.value = '';
  }

  return(

      <form onSubmit={handleTweetFormSubmission}>
        <input
          type='text'
          id='author'
          placeholder='author'
          ref={(input) => {_author = input;}}/>
        <textarea
          type='text'
          id='body'
          placeholder='body'
          ref={(input) => {_body = input;}}/>
        <button type='submit'>Tweet!</button>
      </form>

  );
}

TweetForm.propTypes = {
  onTweetCreation: PropTypes.func
};

export default TweetForm;
