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
                Bid on this project
            </h2>
            <Form>
                <div className='mb-3 job-salary'>
                    <label for='exampleFormControlTextarea1' className='form-label'>
                    Demand your salary
                    </label>
                    <input type='text' className='form-control' />
                </div>
                <div className='mb-3 job-details'>
                    <label for='exampleFormControlTextarea1' className='form-label'>
                    Your message
                    </label>
                    <textarea
                    className='form-control'
                    id='exampleFormControlTextarea1'
                    rows='3'
                    ></textarea>
                </div>
                <div className='mb-3 job-resources'>
                    <label for='exampleFormControlTextarea1' className='form-label'>
                    Upload file's
                    </label>
                    <input type="file" className="form-control" />
                </div>
                {/* <a href='.' className='mt-form-submit mt-btn-submit' variant='primary'>Submit</a> */}
                <Link className='btn btn-primary' to="/dashboard">Submit</Link>
            </Form>
        </div>
    )
}

export default PostForm
