import React from 'react';

function Pagination({postsPerPage, totalPosts, paginate}) {
    const pageNumbers = [];

    for(let i = 1; i<=Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation example" className='mt-utility mt-pagination'>
            <ul className="pagination">
                <li className="page-item"><a className="page-link" href="!#">Previous</a></li>
                {pageNumbers.map((number)=>{
                    return(
                        <li key={number} className="page-item"><a className="page-link" href="!#" onClick={(e)=>{e.preventDefault(); paginate(number)}}>{number}</a></li>
                    )
                })}
                <li className="page-item"><a className="page-link" href="!#">Next</a></li>
            </ul>
        </nav>
    )
}

export default Pagination;
