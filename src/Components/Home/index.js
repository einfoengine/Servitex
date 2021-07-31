import React, { Component } from 'react';

import Hero from '../Hero';
import ServiceCategories from '../ServiceCategories';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: 'Home state'
        }
    }
    
    render() {
        return (
            <>
                <Hero />
                <ServiceCategories />
            </>
        );
    }
}

export default index;
