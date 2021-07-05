import React, { Component } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import Login from '../Login';
import JobList from '../JobList';
import JobDetails from '../JobDetails';
import MyJobs from '../MyJobs';
import Reports from '../Reports';
import Messages from '../Messages';
import Message from '../Message';
import JobPost from '../JobPost';
import Profile from '../Profile';
import ProfileCreate from '../ProfileCreate';
import Home from '../Home';
import Professionals from '../Professionals';
// import Home from '../Home';

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positions: {
        left: true,
        main: true,
        right: true,
      },
      layout: {
        left: null,
        main: 12,
        right: null,
      },
    };
  }

  render() {
    console.log('body props', this.props);
    return (
      <div id='main-routs'> 
        <Switch>
          <Route path='/' exact component={Home} />   
          <Route path='/login' exact component={Login} />   
          <Route path='/jobs' exact component={JobList} />   
          <Route path='/myjobs' exact component={MyJobs} />
          <Route path='/reports' exact component={Reports} />
          <Route path='/messages' exact component={Messages} />
          <Route path='/message/id' exact component={Message} />
          <Route path='/login' exact component={Login} />
          <Route path='/jobpost' exact component={JobPost} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/profile-create' exact component={ProfileCreate} />
          <Route path='/professionals' exact component={Professionals} />
          <Route path='/:job' exact component={JobDetails}/>
        </Switch>
      </div>

    );
  }
}
export default Body;
