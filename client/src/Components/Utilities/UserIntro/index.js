import React from 'react';
import { Link } from 'react-router-dom';

const UserIntro = (props) => {
    return (
        <div>
            <div className='mt-user-ifo mt-element row'>
                <div className="col-3">
                    <img className='img-fluid img-fluid img-thumbnail' src='https://cdn.pixabay.com/photo/2017/09/18/16/11/building-2762241_960_720.jpg' alt='Servitex user thumbnile is missing' thumbnail />
                </div>
                <div className='col-9'>
                    <h5 className='mt-h5'><Link to='.'>{props.userName}</Link></h5>
                    <div className='d-flex mb-4'>
                        <div className='text-muted'>
                            Working science: {props.experienceYears} | Completed projects:
                            {props.projectsCompleted} | Spent over: {props.spentOver} | Ratings:
                            {props.ratings}
                        </div>
                    </div>
                    <p className='mb-4'>
                        You are about to make a post for a job. This will cost you{' '}
                        <span>{props.currencyPoints}</span> points! If you cancel this post in 2
                        hours, it will cost you {props.urrencyPoints / 2} points. If you hire a
                        professional you will win {Math.round(props.currencyPoints / 6)} points.
                        You can use your points to hire more or you can keep them to win a
                        special price from our end.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserIntro
