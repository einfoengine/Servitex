import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
// import {Link} from 'react-router-dom';

export default class JobDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job: {
        id: 1,
        postDate: '12/June/2021',
        endDate: '17/June/2021',
        time: '4:53pm',
        employer: 'Mr. Maruf',
        employerStatus: 'Gold',
        employerSpendRecord: 3000,
        totalJobs: 3,
        employerReview: 6,
        employerRatings: 4.5,
        totalBids: 4,
        title: 'Job title',
        description:
          'Hello this is a demo job description! Mainly this will be rendered from the database.',
        attachment: '',
        budget: 50,
        type: 'Fixed',
        reauiredSkills: ['skill 1', 'skill 2'],
        link: '',
      },
      user:{
          currency: 'USD'
      }
    };
  }

  render() {
    console.log('Location - ',this.props.location.pathname);
    console.log('Props - ',this.props.location.maruf);
    return (
      <div>
        <Card>
          <Card.Header>
            <div className='s-title-job d-flex justify-content-between'>
              <h3>{this.state.job.title}</h3>{' '}
            </div>
          </Card.Header>
          <Card.Body>
            <div className="s-date-job d-flex justify-content-between">
                <span>start: {this.state.job.postDate} at {this.state.job.time}</span>
                <span>end: {this.state.job.endDate}</span>
            </div>
            <div className="s-employer d-flex">
                <span>Job Owner:</span><h6 className="s-employer-name">{this.state.job.employer}</h6>
            </div>
            <div className="s-employer-record d-flex justify-content-between">
                <span className="s-employer-name">Spent more than - {this.state.job.employerSpendRecord} {this.state.user.currency}</span>
                <span className="s-employer-name">Job complition - {this.state.job.totalJobs}</span>
                <span className="s-employer-name">Reviews - {this.state.job.employerReview}</span>
                <span className="s-employer-name">Ratings - {this.state.job.employerRatings}/5</span>
            </div>
          </Card.Body>
          <ListGroup className='list-group-flush'>
            <ListGroupItem>{this.state.job.description}</ListGroupItem>
            <ListGroupItem>
                <h6>Activity on this job</h6>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Proposals:  Less than 5</li>
                  <li class="list-group-item">Last viewed by client:  58 minutes ago</li>
                  <li class="list-group-item">Interviewing: 1</li>
                  <li class="list-group-item">Invites sent: 0</li>
                  <li class="list-group-item">Unanswered invites: 0</li>
                </ul>
                
            </ListGroupItem>
          </ListGroup>
        </Card>
          <Button variant='primary mt-4'>Bid on this project</Button>
      </div>
    );
  }
}
