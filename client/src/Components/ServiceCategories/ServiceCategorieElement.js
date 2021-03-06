import React from 'react';
import { Link } from 'react-router-dom';
import {ElementTitle} from '../Utilities';

const ServiceCategorieElement = ({id, title, body, clickHandeler}) => {
    return (
        <div className="mt-element mt-service mt-fancy-card card" onClick={()=>{
            console.log('I am clicked');
            clickHandeler();
        }}>
            <div className="mt-post-intro">
                <ElementTitle text={title} />
                {/* <Image className='circle' src='holder.js/50x50' thumbnail /> */}
                <img src="https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_960_720.jpg" alt="Servitex Category" className="img-thumbnail" />
                <p>{body}</p>
                <Link to='job-post'>Post a job</Link>
            </div>
        </div>
    )
}

export default ServiceCategorieElement