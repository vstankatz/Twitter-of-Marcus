import React from 'react';
import Header from "./components/Header";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import TweetControl from "./components/TweetControl";
import { Row, Col, Container } from 'react-bootstrap';
import Suggestions from "./components/Suggestions";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Moment from 'moment';
import {Switch, Route} from 'react-router-dom';
import Test from './components/Test';



class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {

      masterTweetList: []

    };
    this.handleAddingNewTweetToList = this.handleAddingNewTweetToList.bind(this);
    this.changeLikes = this.changeLikes.bind(this);
  }

  handleAddingNewTweetToList(newTweet){
    var newMasterTweetList = this.state.masterTweetList.slice();
    newTweet.formattedWaitTime = (newTweet.timeOpen).fromNow(true)
    newMasterTweetList.push(newTweet);
    this.setState({masterTweetList: newMasterTweetList});
  }

  changeLikes(id, modifier){
    const newMasterTweetList = this.state.masterTweetList.slice();
    const updatedMasterTweetList = newMasterTweetList.map(t => {
      if (t.id === id) t.count += modifier;
      return t;
    });
    this.setState({ masterTweetList: updatedMasterTweetList})
  }

  componentDidMount = () => {
    this.waitTimeUpdateTimer = setInterval(() =>
    this.updateTweetElapsedWaitTime(),
    5000
  );
  console.log('did mount')
  }


  updateTweetElapsedWaitTime = () => {
    console.log('updated')
    let newMasterTweetList = this.state.masterTweetList.slice();
    newMasterTweetList.forEach((tweet) =>
      tweet.formattedWaitTime = (tweet.timeOpen).fromNow(true)
    );
    this.setState({masterTweetList: newMasterTweetList})
  }

  componentWillUnmount = () => {
    console.log('unmount')
    clearInterval(this.waitTimeUpdateTimer);
  }

  render(){
  return (
    <div>

    <Header/>
    <Container>




    <Switch>
    <Route exact path='/'
    render={() =>
      <Row>
      <Col md="auto"><Profile/></Col>
      <Col md="auto"><TweetControl onTweetCreation={this.handleAddingNewTweetToList} /><Feed  feed={this.state.masterTweetList.sort(function(a,b){return b.count - a.count})} changeLikes={this.changeLikes} /></Col>
      <Col md="auto"><Suggestions/></Col>
      </Row>
        }/>



    <Route path='/test' component={Test}/>
    </Switch>

    </Container>
    </div>
  );
}
}
export default App;
