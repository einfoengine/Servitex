import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Posts({ posts }) {
  return (
    <>
      <Card className='mt-module mt-job-list'>
        <Card.Header>Job invitations for you</Card.Header>
        <ListGroup className='list-group-flush'>
          {posts.map((job) => {
            return (
              <ListGroupItem key={job.id}>
                <Card.Body>
                  <Card.Title className={`post-id-${job.id}`}>
                    <Link to={{
                      pathname: `/job?id=${job.id}`,
                      maruf: {
                        owner: 'Maruf'
                      }
                    }}>
                      <h5 className='mt-h5'>{job.title}</h5>
                    </Link>
                  </Card.Title>
                  <Card.Subtitle className='mb-2 text-muted'>
                    Fixed price - Budget $45.00 (USD)
                  </Card.Subtitle>
                  <Card.Text>{job.body}</Card.Text>
                  {/* <a href="." className="btn btn-primary">Bid on the project</a> */}
                  <Link className='btn btn-primary' to='/job-bid'>Bid on this project</Link>
                </Card.Body>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </Card>
    </>
  );
}

export default Posts;
