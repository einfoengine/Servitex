import React from 'react';
import {ElementTitle} from '../Utilities';
import { Link } from 'react-router-dom';

const ServiceCategorieElement = ({props}) => {
    // console.log("service elements",props);
    return (
        <div 
            className="mt-element mt-service mt-fancy-card card" 
        >
            <div className="mt-post-intro">
                <img src={props.img} alt="Cat Icon" />
                <span>Service Providers: {props.count}</span>
                <ElementTitle text={props.title} />
                <p>{props.body}</p>
            </div>
            <div>
                <Link to="/service-providers">
                    Find a pro
                </Link>
            </div>
        </div>
    )
}

export default ServiceCategorieElement
