import React, { Component } from 'react';
import { Card, Button, Image, Form } from 'react-bootstrap';
import {Link} from 'react-router-dom';


class JobPost extends Component {
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
      },
    };
  }

  render() {
    const { userName, experienceYears, projectsCompleted, spentOver, ratings } =
      this.state.user;
    const { currencyPoints } = this.state.jobDetails;
    return (
      <div className='mt-component mt-job-post-wrap'>
        <div className='mt-user-ifo mt-element d-flex flex-row'>
          <Image src='holder.js/171x180' thumbnail />
          <Card.Body>
            <Card.Title className='mt-h5'><Link t0='#'>{userName}</Link></Card.Title>
            <Card body className='d-flex mb-4'>
              <div className='text-muted'>
                Working science: {experienceYears} | Completed projects:{' '}
                {projectsCompleted} | Spent over: {spentOver} | Ratings:{' '}
                {ratings}
              </div>
            </Card>
            <Card.Text className='mb-4'>
              You are about to make a post for a job. This will cost you{' '}
              <span>{currencyPoints}</span> points! If you cancel this post in 2
              hours, it will cost you {currencyPoints / 2} points. If you hire a
              professional you will win {Math.round(currencyPoints / 6)} points.
              You can use your points to hire more or you can keep them to win a
              special price from our end.
            </Card.Text>
            <Button variant='primary'>Buy points</Button>
          </Card.Body>
        </div>
        <div className="mt-job-post mt-element">
            <hr />
            <h2 className="h2 mt-h2 title-section">
                Make your job post:
            </h2>
            <Form>
            <div className='mb-3 title'>
                <label htmlFor='jobTitle' className='form-label'>
                Job title
                </label>
                <input
                type='text'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                />
            </div>
            <div className='row mb-3'>
                <div class='col-auto'>
                    <label htmlFor="" className>Job types</label>
                    <select class="form-select" aria-label="Default select example">
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                </div>
                <div class='col-auto'>
                    <label htmlFor="" className>Budget</label>
                    <input type="text" className="form-control" />
                </div>
                <div class='col-auto'>
                    <label htmlFor="" className>Delivery time</label>
                    <input type="text" className="form-control" />
                </div>
                <div class='col-auto'>
                    <label htmlFor="" className>Required skills</label>
                    <input type="text" className="form-control" />
                </div>
            </div>
            <div class='mb-3 job-details'>
                <label for='exampleFormControlTextarea1' class='form-label'>
                Job Details
                </label>
                <textarea
                class='form-control'
                id='exampleFormControlTextarea1'
                rows='3'
                ></textarea>
            </div>
            <div class='mb-3 job-details'>
                <label for='exampleFormControlTextarea1' class='form-label'>
                Upload file
                </label>
                <input type="file" className="form-control" />
            </div>
            <Button className='mt-form-submit mt-btn-submit' variant='primary'>Submit</Button>
            </Form>
        </div>
      </div>
    );
  }
}
export default JobPost;
