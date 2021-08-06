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
import ServiceProviders from '../ServiceProviders';
import Dashboard from '../Dashboard';
import JobBids from '../JobBids';
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
    return (
      <> 
        <Switch>
          <Route path='/' exact component={Home} />   
          <Route path='/login' exact component={Login} />   
          <Route path='/jobs' exact component={JobList} />   
          <Route path='/myjobs' exact component={MyJobs} />
          <Route path='/job-post' exact component={JobPost} />
          <Route path='/job-bid' exact component={JobBids} />
          <Route path='/reports' exact component={Reports} />
          <Route path='/messages' exact component={Messages} />
          <Route path='/message/id' exact component={Message} />
          <Route path='/login' exact component={Login} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/profile-create' exact component={ProfileCreate} />
          <Route path='/professionals' exact component={Professionals} />
          <Route path='/service-providers' exact component={ServiceProviders} />
          <Route path='/dashboard' exact component={Dashboard}/>
          <Route path='/dashboard/profile' exact component={Dashboard}/>
          <Route path='/dashboard/book-keeping' exact component={Dashboard}/>
          {/* <Route path='/:job' exact component={JobDetails}/> */}
        </Switch>
      </>

    );
  }
}
export default Body;