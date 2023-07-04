import React from "react";
import "./CSS/Navigation.css"
import { useNavigate } from "react-router-dom";





export default function Navigation(){
  const navigate = useNavigate();
    return(

    <div className="width-30" id="navbarNav">
    
   
    <ul className="navbar-links padding-between move-left">
      <li className="">
        <a
          href="#home"
          onClick={() => navigate('')}
        >
          Home
        </a>
      </li>
      <li className="nav-item up">
        <a
          href="#workouts"
          onClick={() => navigate('workouts')}
        >
          Workouts
        </a>
      </li>
      <li className="nav-item up">
        <a
          href="#planner"
          onClick={() => navigate('planner')}
    
        >
          Planner
        </a>
      </li>
      </ul>
    
      
      </div>
    
      


    );
}