import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import DatePicker from "react-multi-date-picker";

const PostForm = (props) => {
    const today = new Date()
    const tomorrow = new Date()

    tomorrow.setDate(tomorrow.getDate() + 1)
    const [values, setValues] = useState([today, tomorrow])
    return (
        <div className="mt-job-post mt-element">
            {/* <hr /> */}
            <h2 className="h2 mt-h2 title-section">
                Make your job post:
            </h2>
            <Form>
                <div className='mb-3 title'>
                    <label htmlFor='jobTitle' className='form-label'>
                    Job title
                    </label>
                    <input
                    type='text'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    />
                </div>
                <div className='row mb-3'>
                    <div className='col-auto'>
                        <label htmlFor="" className>Job types</label>
                        <select className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='col-auto'>
                        <label htmlFor="" className>Dates</label>
                        <br/>
                        <DatePicker 
                        multiple
                        value={values} 
                        onChange={setValues}
                        className="test"
                        />
                    </div>
                </div>
                <div className='mb-3 job-details'>
                    <label for='exampleFormControlTextarea1' className='form-label'>
                    Job Details
                    </label>
                    <textarea
                    className='form-control'
                    id='exampleFormControlTextarea1'
                    rows='3'
                    ></textarea>
                </div>
                <div className='mb-3 job-details'>
                    <label for='exampleFormControlTextarea1' className='form-label'>
                    Upload file
                    </label>
                    <input type="file" className="form-control" />
                </div>
                {/* <a href='.' className='mt-form-submit mt-btn-submit' variant='primary'>Submit</a> */}
                <Link className='btn btn-primary' to="/service-providers">Submit</Link>
            </Form>
        </div>
    )
}

export default PostForm
