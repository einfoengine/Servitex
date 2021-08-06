import React from 'react';
import {BiMessageDetail} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

const ServiceProvider = ({props}) => {
    // console.log("service elements",props);
    
    return (
        <>
            <div className="mt-element mt-service mt-fancy-card card" >
                <img src="https://cdn.pixabay.com/photo/2020/03/17/17/46/engineer-4941342_960_720.jpg" alt="MT Service-Provider thumbnile is missing" />
                <div className="mt-user-status d-flex">
                    <h5 className='flex-grow-1'>Users Name</h5>
                    <div>
                        <span class="badge rounded-pill bg-primary">Ratings: 4.8</span>
                    </div>
                    <a href="."><BiMessageDetail/></a>
                </div>
                <div className="mt-post-intro">
                    Service providers intro
                    Service providers intro
                    Service providers intro
                    Service providers intro
                    Service providers intro
                    Service providers intro
                    Service providers intro
                </div>
                {/* <a href="." className="btn btn-primary">Confirm</a> */}
                <Link className='btn btn-primary' to='dashboard' >Confirm</Link>
            </div>
        </>
    )
}

export default ServiceProvider