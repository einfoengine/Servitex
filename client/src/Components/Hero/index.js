import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MainSearch from '../Utilities/MainSearch';
class Hero extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            comTitle : 'Find category',
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
                <div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className={`mt-utility mt-hero-text`}>
                                    <h1 className='mt-com-title'><span>You have 3000+ experts,</span>weating to serve you!</h1>
                                </div>
                                <MainSearch comTitle={comTitle} comclassName={comClass} comPlaceholders={comPlaceholders}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Hero;
