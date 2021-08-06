import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Breadcrumb from '../Breadcrumb';
import SideBarLeft from './SideBarLeft';
import DashboardSummery from './DashboardSummery';
import DashboardProfile from './DashboardProfile';
import DashboardBookKeeping from './DashboardBookKeeping';
import Profile from '../Profile';
import 'react-calendar/dist/Calendar.css';

class Dashboard extends Component {
    render() {
        return (
            // <Router>
            <div id="dashboard" className="mt-dashboard">
                <Breadcrumb/>
                <section id='mt-services-category' className='mt-section mt-services-category'>
                    <div className="container">
                        <div className="row">
                            <div className="col-3">
                                <SideBarLeft/>
                            </div>
                            <div className="mt-dashboard-content col-9">
                                <div className="row">
                                    <Switch>
                                        <Route exact path='/dashboard'>
                                            <DashboardSummery/>
                                        </Route>
                                        <Route exact path='/dashboard/profile'>
                                            <DashboardProfile/>
                                        </Route>
                                        <Route exact path='/dashboard/book-keeping'>
                                            <DashboardBookKeeping/>
                                        </Route>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            // </Router>
        );
    }
}

export default Dashboard;
