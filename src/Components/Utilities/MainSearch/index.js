import React from 'react';
import { Link } from 'react-router-dom';

const MainSearch = (props) => {
    return (
        <div className={`mt-utility mt-main-search ${props.comClass}`}>
            <h3 className='mt-com-title'>{props.comTitle}</h3>
            <div className="input-group mb-3">
                <input type="text" class="form-control" placeholder="Search a category" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                <Link to='/professionals' className="btn btn-primary">Find a professional</Link>
            </div>
        </div>
    )
}

export default MainSearch;
