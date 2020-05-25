import React from 'react';

const Filter = ({value,handleChange}) =>{
    return(
        
    <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
        </div>
        <input type="text" className="form-control" value={value} onChange={handleChange} 
        aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
    </div>
    )
}
export default Filter;