import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function Jobs({ jobs }) {
  return (
    <>
      <Card className='mt-module mt-render-my-job'>
        <Card.Header>Your jobs</Card.Header>
        <ListGroup className='list-group-flush'>
          {jobs.map((job) => {
            return (
              <ListGroupItem key={job.id}>
                <Card.Body>
                  <Card.Title className={`post-id-${job.id} d-flex`}>
                    <a className='flex-fill' href={'/job/' + job.id}>{job.title}</a>
                    <span class="badge bg-success">Status</span>
                  </Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    <ul className='mt-job-finential-brief'>
                      <li className="mt-budget-info">
                      Fixed price - Budget $45.00 (USD)
                      </li>
                      <li className="mt-funded"> Funded: $20.00</li>
                      <li className="mt-due-amount"> Due: $25.00</li>
                      <li className="mt-due-amount"> Submission: <span className='text-success'>26/06/2021</span></li>
                    </ul>

                  </Card.Subtitle>
                  <Card.Text className='mt-my-job-brief'>
                    <h6>Brief:</h6>
                    {job.body}
                  </Card.Text>
                  <Card.Text className='mt-my-job-milestone'>
                    <h6>Milestone:</h6>
                    <ol>
                      <li>
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        {/* <label class="form-check-label" for="flexCheckDefault">
                          Default checkbox
                        </label> */}
                      </div>
                        <span>Title</span>
                        <span className='text-danger'>status</span>
                      </li>
                    </ol>
                  </Card.Text>
                </Card.Body>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Card>
    </>
  );
}

export default Jobs;
