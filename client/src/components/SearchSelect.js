import React from "react";

export default function SearchSelect(){

    return(
        
        <>
        <div className="centerDiv">
    <div className="search">
        <label className='white-label' htmlFor="muscles">Choose a Muscle: </label>
        <select id="muscles" name="muscles">
            <option>Select...</option>
            <option>Abdomen</option>
            <option>Chest</option>
            <option>Quads</option>
            <option>Back</option>
        </select>
    <div className="searchBtn centerDiv">
        <button className="search-btn" id="SearchSelectBtn">Search</button>
    </div>
    </div>
    </div>
        <hr className="search"></hr>
        </>
    );
}