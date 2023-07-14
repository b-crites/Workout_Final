import React from "react";
import "./CSS/Header.css";
import Navigation from "./Navigation";
import LoginBtn from "./LoginBtn";
import Auth from "../utils/auth";

export default function Header() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className="navbar-dark">
      <div className="padding-left">
        <h3 className="disabled">Workout Final</h3>
      </div>
      <div className="nav-middle">
        <Navigation />
      </div>
      <div className="padding-right">
        {Auth.loggedIn() ? (
          <>
            <span className="white-text padding-right">
              Welcome, {Auth.getProfile().data.firstName}!
            </span>
            <button className="logInButton" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <LoginBtn />
          </>
        )}
        ;
      </div>
    </div>
  );
}