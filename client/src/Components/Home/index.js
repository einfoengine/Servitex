import React, { Component } from 'react';
import Hero from '../Hero';
import ServiceCategories from '../ServiceCategories';
const config = require('../../config/default.json');
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'Home state'
        }
    }
    
    render() {
        console.log('********* console config', config);
        return (
            <div className='mt-home mt-route mt-component'>
                <Hero />
                <ServiceCategories />
            </div>
        );
    }
}

export default index;
