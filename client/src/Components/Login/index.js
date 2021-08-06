import React, { Component } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

export default class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       layout: "Login"
    }
  }
  static getDerivedStateFromProps(props, state){
    console.log('Props from getDerivedStateFromProps - ', props);
    console.log('State from getDerivedStateFromProps - ', state);
    return null;
  }
  render() {
    return (
      <div id='mt-login' className='mt-module mt-login mt-4'>
        <Form>
          <Form.Group as={Row} className='mb-3' controlId='formHorizontalEmail'>
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type='email' placeholder='Email' />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className='mb-3'
            controlId='formHorizontalPassword'
          >
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control type='password' placeholder='Password' />
            </Col>
          </Form.Group>
          {/* <fieldset>
            <Form.Group as={Row} className='mb-3'>
              <Form.Label as='legend' column sm={2}>
                Radios
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type='radio'
                  label='first radio'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios1'
                />
                <Form.Check
                  type='radio'
                  label='second radio'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios2'
                />
                <Form.Check
                  type='radio'
                  label='third radio'
                  name='formHorizontalRadios'
                  id='formHorizontalRadios3'
                />
              </Col>
            </Form.Group>
          </fieldset> */}
          <Form.Group as={Row} className='mb-3' controlId='formHorizontalCheck'>
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label='Remember me' />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className='mb-3'>
            <Col sm={{ span: 10, offset: 2 }}>
              <Button type='submit'>Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
