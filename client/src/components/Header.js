import React from "react";
import "./CSS/Header.css";
import Navigation from "./Navigation";
import LoginBtn from "./LoginBtn";

export default function Header(){


    return(
<div className="navbar-dark">
<div className="padding-left">
<h3>Workout Final</h3>
</div>
<div className="nav-middle">
<Navigation />
</div>
<div className="padding-right">
    <LoginBtn />
</div>

</div>




);
};