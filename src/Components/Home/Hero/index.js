import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainSearch from '../../Elements/MainSearch';
class Hero extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            comHeading : 'Hire the best service providers for your everyday needs',
            comClass: '',
            comPlaceholders: [
                'What service do you need',
                'Where do you need it'
            ]
        }
    }

    
    
    render() {
        let {comHeading, comClass, comPlaceholders} = this.state;
        return (
            <section>
                <Container>
                    <Row>
                        <Col>
                            <MainSearch comHeading={comHeading} comClass={comClass} comPlaceholders={comPlaceholders}/>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Hero;
