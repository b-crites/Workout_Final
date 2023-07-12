import React, { useState } from "react";
import "./css/LoginBtn.css";
import { SlMenu } from "react-icons/sl";
import LoginModal from "./LoginModal";
import { useNavigate } from "react-router-dom";

export default function LoginBtn() {

  const [navOpen, setNavOpen] = useState(false);

  const openNav = () => {
    setNavOpen(true);
  }
const closeNav = () => {
  setNavOpen(false);
}
  const navigate = useNavigate();
  return (
    <div>
      <div className="media-hide">
        <LoginModal />

      </div>
      <div className="media-show">
        <button className="media-btn" aria-label="Navigation Menu Button" onClick={openNav}>
          <SlMenu />
        </button>
        {navOpen && (
          <div className="media-menu">
            <div className="media-menu-content">
            <span className="media-close" onClick={closeNav}>X</span>

            <ul>
              <li aria-label="Home Tab"><a onClick= {e => { navigate(''); closeNav()}}>Home</a></li>
              <li aria-label="Workouts Tab"><a onClick= {e => { navigate('workouts'); closeNav()}}>Workouts</a></li>
              <li aria-label="Planner Tab"><a onClick= {e => { navigate('planner'); closeNav()}}>Planner</a></li>
            </ul>
            <div>
              <button className="logInButton">Login</button>
              
            </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}