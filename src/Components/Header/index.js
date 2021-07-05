import React, { Component } from 'react';
import { Container, Row, Col, Navbar, Nav, Form, FormControl, Button, Image } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Body extends Component {
  render() {
    return (
      <section className='mt-section mt-navbar pb-4'>
        <Container>
          <Row>
            <Col>
              <Navbar expand='lg'>
                <Navbar.Brand><Link to='/'><h1>Servitex</h1></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='mr-auto flex-fill'>
                    <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                    <Nav.Link><Link to='/jobs'>Find Jobs</Link></Nav.Link>
                    <Nav.Link><Link to='/myjobs'>My Jobs</Link></Nav.Link>
                    <Nav.Link><Link to='/jobpost'>Post a job</Link></Nav.Link>
                    <Nav.Link><Link to='/messages'>Messages</Link></Nav.Link>
                  </Nav>
                  <Form inline>
                    <div className="input-group">
                      <FormControl
                        type='text'
                        placeholder='Search'
                        className='mr-sm-2'
                      />
                      <Button variant='outline-success'>Search</Button>
                    </div>
                  </Form>
                  <Nav className='mr-auto'>
                    <Nav.Link><Link to='/profile'>Profile</Link></Nav.Link>
                    <Nav.Link><Link to='/profile-create'>Create Profile</Link></Nav.Link>
                    <Nav.Link><Link to='/login'>Login</Link></Nav.Link>
                  </Nav>
                </Navbar.Collapse>
                <Image className='circle' src='holder.js/50x50' thumbnail />
              </Navbar>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}
export default Body;
