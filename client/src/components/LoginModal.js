import React from "react";
import "../components/CSS/LoginModal.css";
import { useState } from "react";

const LoginModal = () => {
  // const isLoggedIn = props.isLoggedIn;
  const [isOpen, setIsOpen] = useState(false);
  const [activeForm, setActiveForm] = useState("login");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const showLogIn = () => {
    setActiveForm("login");
  };

  const showSignup = () => {
    setActiveForm("signup");
  };

  return (
    <>
      <>
        <div>
          <button onClick={openModal} className="logInButton">
            Login
          </button>
        </div>

        {isOpen && (
          <div id="modal-content" className="login-modal">
            <div className="login-modal-content">
              <span className="login-close" onClick={closeModal}>
                X
              </span>

              {activeForm === "login" && (
                <>
                  <div id="login-form">
                    <h2 className="login-title">Welcome Back!</h2>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="**********" />
                    <button className="logInButton" type="submit">
                      Log In
                    </button>
                    <div className="modal-footer centerDiv signup-link">
                      <p>
                        Don't have an account?{" "}
                        <a onClick={showSignup}>Signup</a>
                      </p>
                    </div>
                  </div>
                </>
              )}
              {activeForm === "signup" && (
                <div id="signup-form">
                  <h2 className="login-title">Sign Up!</h2>
                  <input className="input-50" type="text" placeholder="First Name" />
                  <input className="input-50" type="text" placeholder="Last Name" />
                  <input type="text" placeholder="Email" />
                  <input type="password" placeholder="**********" />
                  <button className="logInButton" type="submit">
                    Sign Up
                  </button>
                  <div className="modal-footer centerDiv signup-link">
                    <p>
                      Already have an account? <a onClick={showLogIn}>Login</a>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default LoginModal;
