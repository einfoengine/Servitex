import React from 'react'

const UserWorkHistory = () => {
    return (
        <div className='mt-utility mt-work-history'>

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
    )
}

export default UserWorkHistory
