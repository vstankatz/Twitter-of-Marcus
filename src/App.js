import React from 'react';
import Header from "./components/Header";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import TweetControl from "./components/TweetControl";
import { Row, Col, Container } from 'react-bootstrap';
import Suggestions from "./components/Suggestions";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {

      masterTweetList: []

    };
    this.handleAddingNewTweetToList = this.handleAddingNewTweetToList.bind(this);
  }

  handleAddingNewTweetToList(newTweet){
    var newMasterTweetList = this.state.masterTweetList.slice();
    newMasterTweetList.push(newTweet);
    this.setState({masterTweetList: newMasterTweetList});

  }
  render(){
  return (
    <div>

    <Header/>
    <Container>
    <Row>
    <Col md="auto"><Profile/></Col>
    <Col md="auto"><TweetControl onTweetCreation={this.handleAddingNewTweetToList} /><Feed  feed={this.state.masterTweetList} /></Col>
    <Col md="auto"><Suggestions/></Col>

    </Row>
    </Container>
    </div>
  );
}
}
export default App;
