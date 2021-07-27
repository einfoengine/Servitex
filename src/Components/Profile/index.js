import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Profile extends Component {
    render() {
        return (
            <div className='mt-profile-wrap mt-component'>
                <section className="mt-section mt-top">
                    <div className="mt-header">
                        <div className="d-flex">
                            <div className="mt-profile-visual mr-3">
                                <img src="holder.js/200x200" alt="Servitex user Mr. Name serves as a 5 star professional" className="img-thumbnail" />
                            </div>
                            <div className="flex-fill mt-profile-info pl-3">
                                <h5><Link to='/profile'>Mr. User Name</Link></h5>
                                <span className="text-muted mt-user-address">
                                    Dhaka Bangladesh
                                </span>
                            </div>
                            <div className="mt-child-align-right mt-profile-settings">
                                <button type="button" className="btn btn-primary">Edit</button>
                            </div>
                        </div>
                    </div>
                    <hr />
                </section>
                <section className="mt-section mt-profile-body">
                    <div className="row">
                        <div className="col col-md-3 mt-aside mt-left">
                            <div className="mt-module mt-aside-header mt-earning-brief d-flex">
                                <div className="mt-earning-amount">
                                    <span className="mt-state-amoount lead">$100 +</span>
                                    <span className="mt-state-details">Total earning</span>
                                </div>
                                <div className="mt-earning-amount">
                                    <span className="mt-state-number lead">2</span>
                                    <span className="mt-state-details">Jobs</span>
                                </div>
                            </div>
                            {/* End module */}
                            <div className="mt-module mt-video mt-intro">
                                <h5 className="mt-module-title">Video Intro</h5>
                                <div className="mt-external-video">
                                    External video
                                </div>
                            </div>
                            {/* End module */}
                            <div className="mt-module mt-video mt-intro">
                                <h5 className="mt-module-title">Hours</h5>
                                <div className="mt-info-availavlity">
                                    Available <span className="text-muted">more than 30 hours per week</span>
                                </div>
                            </div>
                            {/* End module */}
                            <div className="mt-module mt-video mt-intro">
                                <h5 className="mt-module-title">Languages</h5>
                                <div className="mt-info-availavlity">
                                    <ul>
                                        <li>Bangla</li>
                                        <li>English</li>
                                    </ul>
                                </div>
                            </div>
                            {/* End module */}
                            <div className="mt-module mt-video mt-intro">
                                <h5 className="mt-module-title">Education</h5>
                                <div className="mt-info-availavlity">
                                    <ul>
                                        <li>
                                            <h6>Uni name</h6>
                                            <span className="text-muted d-block">Bachelor degree</span>
                                            <span className="text-muted d-block">2014-2018</span>
                                        </li>
                                        <li>
                                            <h6>School Name</h6>
                                            <span className="text-muted d-block">Bachelor degree</span>
                                            <span className="text-muted d-block">2014-2018</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End module */}
                            <div className="mt-module mt-video mt-intro">
                                <h5 className="mt-module-title">Certificates</h5>
                                <div className="mt-info-availavlity">
                                    <ul>
                                        <li>
                                            <h6>Institution name</h6>
                                            <span className="text-muted d-block">Bachelor degree</span>
                                            <span className="text-muted d-block">2014-2018</span>
                                        </li>
                                        <li>
                                            <h6>Institution Name</h6>
                                            <span className="text-muted d-block">Bachelor degree</span>
                                            <span className="text-muted d-block">2014-2018</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End module */}
                        </div>
                        {/* End col: aside */}
                        <div className="col col-md-9 mt-component-body">
                            <div className="mt-module mt-user-intro">
                                <div className="mt-module-header d-flex">
                                    <h4 className="mt-module-title flex-fill">Electronic gadget fixer</h4>
                                    <h6 className="mt-title-aside">$20/hr</h6>
                                </div>
                                <div className="mt-module-body">
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec quam eget felis cursus suscipit sit amet a eros. Aliquam blandit condimentum lectus, sit amet convallis lorem fermentum et. Nunc vel volutpat lectus. Maecenas ultrices quis erat sodales commodo. Donec ac neque et turpis venenatis feugiat interdum sit amet arcu. Donec purus nunc, luctus id aliquam quis, posuere id odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent quis est congue, viverra nibh ut, fringilla urna. Ut blandit blandit ultrices. Ut eu imperdiet nisl.
                                    </p>
                                    <a href='!#' onClick={(e)=>{e.preventDefault()}}>More..</a>
                                </div>
                            </div>
                            {/* End module */}
                            <hr />
                            <div className="mt-module mt-skills">
                                <div className="mt-module-header d-flex">
                                    <h4 className="mt-module-title flex-fill">You skills</h4>
                                </div>
                                <div className="mt-module-body mt-skill-badges d-flex">
                                    <span className="badge bg-secondary mr-3">Skill</span>
                                    <span className="badge bg-secondary mr-3">Skill</span>
                                    <span className="badge bg-secondary mr-3">Skill</span>
                                    <span className="badge bg-secondary mr-3">Skill</span>
                                    <span className="badge bg-secondary mr-3">Skill</span>
                                    <span className="badge bg-secondary mr-3">Skill</span>
                                    <span className="badge bg-secondary mr-3">Skill</span>
                                    <span className="badge bg-secondary mr-3">Skill</span>
                                </div>
                            </div>
                            {/* End module */}
                            <hr />
                            <div className="mt-module mt-work-history">
                                <div className="mt-module-header">
                                    <h4 className="mt-module-title flex-fill">Work History</h4>
                                </div>
                                <div className="mt-module-body">
                                    <ul>
                                        <li>
                                            <div className="card">
                                                <h6 className="mt-sub-title">Work title</h6>
                                                <div className="mt-work-intro">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec quam eget felis cursus suscipit sit amet a eros. Aliquam blandit condimentum lectus, sit amet convallis lorem fermentum et. Nunc vel volutpat lectus. Maecenas ultrices quis erat sodales commodo. Donec ac neque et turpis venenatis feugiat interdum sit amet arcu. Donec purus nunc, luctus id aliquam quis, posuere id odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent quis est congue, viverra nibh ut, fringilla urna. Ut blandit blandit ultrices. Ut eu imperdiet nisl.</p>
                                                </div>
                                                <a href='!#' onClick={(e)=>{e.preventDefault()}}>More..</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card">
                                                <h6 className="mt-sub-title">Work title</h6>
                                                <div className="mt-work-intro">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec quam eget felis cursus suscipit sit amet a eros. Aliquam blandit condimentum lectus, sit amet convallis lorem fermentum et. Nunc vel volutpat lectus. Maecenas ultrices quis erat sodales commodo. Donec ac neque et turpis venenatis feugiat interdum sit amet arcu. Donec purus nunc, luctus id aliquam quis, posuere id odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent quis est congue, viverra nibh ut, fringilla urna. Ut blandit blandit ultrices. Ut eu imperdiet nisl.</p>
                                                </div>
                                                <a href='!#' onClick={(e)=>{e.preventDefault()}}>More..</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End module */}
                            <hr />
                            <div className="mt-module mt-work-history">
                                <div className="mt-module-header">
                                    <h4 className="mt-module-title flex-fill">Project catelog</h4>
                                </div>
                                <div className="mt-module-body">
                                    <ul>
                                        <li>
                                            <div className="card">
                                                <h6 className="mt-sub-title">Work title</h6>
                                                <div className="mt-work-intro">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec quam eget felis cursus suscipit sit amet a eros. Aliquam blandit condimentum lectus, sit amet convallis lorem fermentum et. Nunc vel volutpat lectus. Maecenas ultrices quis erat sodales commodo. Donec ac neque et turpis venenatis feugiat interdum sit amet arcu. Donec purus nunc, luctus id aliquam quis, posuere id odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent quis est congue, viverra nibh ut, fringilla urna. Ut blandit blandit ultrices. Ut eu imperdiet nisl.</p>
                                                </div>
                                                <a href='!#' onClick={(e)=>{e.preventDefault()}}>More..</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="card">
                                                <h6 className="mt-sub-title">Work title</h6>
                                                <div className="mt-work-intro">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec quam eget felis cursus suscipit sit amet a eros. Aliquam blandit condimentum lectus, sit amet convallis lorem fermentum et. Nunc vel volutpat lectus. Maecenas ultrices quis erat sodales commodo. Donec ac neque et turpis venenatis feugiat interdum sit amet arcu. Donec purus nunc, luctus id aliquam quis, posuere id odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent quis est congue, viverra nibh ut, fringilla urna. Ut blandit blandit ultrices. Ut eu imperdiet nisl.</p>
                                                </div>
                                                <a href='!#' onClick={(e)=>{e.preventDefault()}}>More..</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End module */}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Profile
