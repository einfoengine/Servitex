import React from 'react';
import { Link } from 'react-router-dom';

const MainSearch = (props) => {
    return (
        <div className={`mt-main-search ${props.comClass}`}>
            <h3 className='mt-com-heading'>{props.comHeading}</h3>
            <div className="input-group mb-3">
                <select className="form-select" aria-label="Default select example">
                    <option selected>{props.comPlaceholders[0]}</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <select className="form-select" aria-label="Default select example">
                    <option selected>{props.comPlaceholders[1]}</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <Link to='/professionals' className="btn btn-primary">Find a professional</Link>
            </div>
        </div>
    )
}

export default MainSearch;
