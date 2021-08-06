import React from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import JobList from './JobList';
import LastActivity from './LastActivity';

const DashboardSummery = (props) => {
    return (
        <>
            <div className="col-7">
                <LastActivity/>
                <Calendar/>
            </div>
            <div className="col-5">
                <JobList/>
            </div>
        </>
    )
}

export default DashboardSummery
