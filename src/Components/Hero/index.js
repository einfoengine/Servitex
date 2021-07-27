import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainSearch from '../Utilities/MainSearch';
class Hero extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            comTitle : 'Hire the best service providers for your everyday needs',
            comClass: '',
            comPlaceholders: [
                'What service do you need',
                'Where do you need it'
            ]
        }
    }

    
    
    render() {
        let {comTitle, comClass, comPlaceholders} = this.state;
        return (
            <section id='mt-hero' className='mt-section mt-hero'>
                <Container>
                    <Row>
                        <Col>
                            <MainSearch comTitle={comTitle} comclassName={comClass} comPlaceholders={comPlaceholders}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Hero;
