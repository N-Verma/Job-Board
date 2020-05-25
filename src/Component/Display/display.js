import React from 'react';

const Display =({companies}) =>{
    return(
        <div>
            <h1 className="display-7">Job Board</h1>
            <div className="list-group">
            {companies.map((company,i)=>(
                <div key={i}>
                    <a className="list-group-item list-group-item-action flex-column align-items-start">
                        <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">{company.position}</h5>
                            <small>Contact: {company.contact}</small>
                        </div>
                        <p class="mb-1">{company.name}</p>
                        <small>{company.location}</small>
                    </a>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Display;