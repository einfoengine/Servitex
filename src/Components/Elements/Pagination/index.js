import React from 'react';

function Pagination({postsPerPage, totalPosts, paginate}) {
    const pageNumbers = [];

    for(let i = 1; i<=Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation example" className='mt-element mt-pagination'>
            <ul class="pagination">
                <li class="page-item"><a className="page-link" href="!#">Previous</a></li>
                {pageNumbers.map((number)=>{
                    return(
                        <li key={number} class="page-item"><a className="page-link" href="!#" onClick={(e)=>{e.preventDefault(); paginate(number)}}>{number}</a></li>
                    )
                })}
                <li class="page-item"><a className="page-link" href="!#">Next</a></li>
            </ul>
        </nav>
    )
}

export default Pagination;
