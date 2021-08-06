import React from 'react'

const UserProInfo = () => {
    return (
        <div className="mt-utility mt-pro-info">
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
        </div>
    )
}

export default UserProInfo;
