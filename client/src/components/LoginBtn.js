import React from "react";
import "./CSS/LoginBtn.css";
import { SlMenu } from "react-icons/sl";

export default function LoginBtn() {
  return (
    <div>
      <div className="media-hide">
        <button className="logInButton">Login</button>
      </div>
      <div className="media-show">
        <button className="menu-btn">
          <SlMenu />
        </button>
      </div>
    </div>
  );
}
