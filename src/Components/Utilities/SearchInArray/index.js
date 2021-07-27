import React from 'react'

/*
Definition: 
*/ 

function SearchInArray() {
    return (
        <div className="mt-utility mt-keyword-search input-group">
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            <button className="btn-primary btn" id="inputGroup-sizing-default">Search</button>
        </div>
    )
}

export default SearchInArray
