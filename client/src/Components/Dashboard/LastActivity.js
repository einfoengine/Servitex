import React from 'react'
import {BiMessageDetail} from 'react-icons/bi';

const LastActivity = () => {
    return (
        <div className='mt-last-activity'>
            <div className="card d-flex">
                <h5><span className='mt-txt-muted'>You've hired</span><span>Mr. Maruf</span></h5>
                <a href="."><BiMessageDetail/></a>
            </div>
        </div>
    )
}

export default LastActivity
