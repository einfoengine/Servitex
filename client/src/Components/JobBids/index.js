import React, { Component } from 'react';
import BidForm from './BidForm';
import Breadcrumb from '../Breadcrumb';
import UserIntro from '../Utilities/UserIntro';


class JobBids extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        userName: 'Mr. User Name',
        experienceYears: 2,
        projectsCompleted: 12,
        spentOver: 3000,
        ratings: 4.6,
      },
      jobDetails: {
        currencyPoints: 10,
        type: 'Type of the job'
      },
    };
  }

  render() {
    return (
      <div className='mt-job-bids'>
        <Breadcrumb/>
        <section id='mt-services-category' className='mt-section mt-services-category'>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <BidForm/>    
                    </div>
                    <div className="col-4">
                        <h3>Employer details</h3>
                        <UserIntro userName="Mr. Maruf"/>
                        <div>
                          <h3>Job info</h3>
                          <span>Job type: {this.state.jobDetails.type}</span>
                        </div>
                        <div>
                          <h3>Job Dates</h3>
                          <span className='d-block'>Sun - 12/4/7</span>
                          <span className='d-block'>Sun - 12/4/7</span>
                          <span className='d-block'>Sun - 12/4/7</span>
                          <span className='d-block'>Sun - 12/4/7</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}
export default JobBids;
