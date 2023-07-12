import React from "react";
import "./CSS/Header.css";
import Navigation from "./Navigation";
import LoginBtn from "./LoginBtn";

export default function Header(){


    return(
<div className="navbar-dark">
<div className="padding-left">
<h3 className="disabled">Workout Final</h3>
</div>
<div className="nav-middle">
<Navigation />
</div>
<div className="padding-right">
    <LoginBtn />
    {/* <h5 className="white-text disabled">Hello, User!</h5> */}
</div>

</div>




);
};