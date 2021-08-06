import React from 'react';
import { Link } from 'react-router-dom';
import {BsGrid, BsPerson, BsFileSpreadsheet} from 'react-icons/bs';

const SideBarLeft = (props) => {
    return (
        <div className='mt-sidebar-left'>
            <ul class="list-group">
                <li class="list-group-item">
                    <Link to='/dashboard'>
                        <BsGrid/>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li class="list-group-item">
                    <Link to='/dashboard/profile'>
                        <BsPerson/>
                        <span>Profile</span>
                    </Link>
                </li>
                <li class="list-group-item">
                    <Link to='/dashboard/profile'>
                        <BsPerson/>
                        <span>Hiring</span>
                    </Link>
                </li>
                <li class="list-group-item">
                    <Link to='/dashboard/profile'>
                        <BsPerson/>
                        <span>My Jobs</span>
                    </Link>
                </li>
                <li class="list-group-item">
                    <Link to='/dashboard/book-keeping'>
                        <BsFileSpreadsheet />
                        <span>Book Keeping</span>
                        <span class="badge rounded-pill bg-warning text-dark">300</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideBarLeft
