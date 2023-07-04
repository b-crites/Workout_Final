import React from "react";


export default function AddButton({ isLoggedIn }){
    const display = {
        display: 'none'

    }
return(
    <>
    { isLoggedIn ? (<div className="move-right">
                <button className="add-btn">+</button>
            </div>): (<div style={display}></div>)}
    
    </>
    );
}