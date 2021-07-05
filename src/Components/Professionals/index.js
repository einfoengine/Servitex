import React, { Component } from 'react';
// import axios from 'axios';
import ListBuilder from '../Hoc/ListBuilder';

class Professionals extends Component {
    static resources = {
        dataSource:'https://jsonplaceholder.typicode.com/users',
        wrapper: 'container'
    }

    
    render() {
        return (
            <React.Fragment id='mt-professionals' className='mt-component mt-professionals'> 
                <div className="card mt-professional mt-module">
                    <img src={this.props.avater} alt="Servitex professional" />
                    <div className="mt-professional-detail">
                        <h5>{this.props.username}</h5>
                        <p>{this.props.userDescription}</p>
                        <a href="." onClick={(e)=>{e.preventDefault()}}>+6 complements</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ListBuilder(Professionals, Professionals.resources);
// export default Professionals;
