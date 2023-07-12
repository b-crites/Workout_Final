import React from "react";
import "./css/Navigation.css";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  return (
    <div className="width-30" id="navbarNav">
      <ul className="navbar-links padding-between move-left">
        <li className="">
          <a onClick={() => navigate("")}>Home</a>
        </li>
        <li className="nav-item up">
          <a onClick={() => navigate("workouts")}>Workouts</a>
        </li>
        <li className="nav-item up">
          <a onClick={() => navigate("planner")}>Planner</a>
        </li>
      </ul>
    </div>
  );
}