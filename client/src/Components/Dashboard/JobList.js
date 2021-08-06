import React from 'react'

const JobList = () => {
    return (
        <div className="mt-job-list card">
            <div className='mt-tabs mt-job-list-tabs'>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#mt-job-list" aria-expanded="true" aria-controls="mt-job-list">
                    Button with data-bs-target
                </button>
                <ul class="nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href=".">All</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href=".">Hiring</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href=".">Hired</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="." tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
            <div id="mt-job-list" className="mt-tabs-content mt-tab-job-list collapse">
                <ul class="list-group">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                    <li class="list-group-item">A fourth item</li>
                    <li class="list-group-item">And a fifth one</li>
                </ul>
            </div>
        </div>
    )
}

export default JobList
