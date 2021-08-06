import React, { Component } from 'react';
import PostForm from './PostForm';
import Breadcrumb from '../Breadcrumb';
import UserIntro from '../Utilities/UserIntro';


class JobPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        userName: 'Mr. Service Provider',
        experienceYears: 2,
        projectsCompleted: 12,
        spentOver: 3000,
        ratings: 4.6,
      },
      jobDetails: {
        currencyPoints: 10,
      },
    };
  }

  render() {
    return (
      <div className='mt-job-post'>
        <Breadcrumb/>
        <section id='mt-services-category' className='mt-section mt-services-category'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <UserIntro userName={this.state.user.userName} />
                        <PostForm/>    
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}
export default JobPost;
