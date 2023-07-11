import React from "react";
import "../components/CSS/LoginModal.css";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER, LOGIN } from "../utils/mutations";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
const LoginModal = () => {
  // const isLoggedIn = props.isLoggedIn;
  const [isOpen, setIsOpen] = useState(false);
  const [activeForm, setActiveForm] = useState("login");
  const [userFormData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [loginFormData, setLoginData] = useState({ email: "", password: "" });

  const [loginUser] = useMutation(LOGIN);
  const [addUser] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userFormData, [name]: value });
  };
  const handleLogin = async (event) => {
    try {
      const { data } = await loginUser({ variables: { ...loginFormData } });
      console.log(data);
      Auth.login(data.loginUser.token);
    } catch (err) {
      console.error(err);
    }
  };

  const handleFormSubmit = async (event) => {
    try {
      const { data } = await addUser({ variables: { ...userFormData } });
      console.log(data);
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }
  };

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
                        Don't have an account?
                        <a onClick={showSignup}>Signup</a>
                      </p>
                    </div>
                  </div>
                </>
              )}
              {activeForm === "signup" && (
                <form id="signup-form" onSubmit={handleFormSubmit}>
                  <h2 className="login-title">Sign Up!</h2>
                  <input
                    type="text"
                    name="firstName"
                    value={userFormData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={userFormData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                  />
                  <input
                    type="text"
                    name="email"
                    value={userFormData.email}
                    onChange={handleInputChange}
                    placeholder="Email"
                  />
                  {/* <input type="text" name="username" value={userFormData.username} onChange={handleInputChange} placeholder="Username" /> */}
                  <input
                    type="password"
                    name="password"
                    value={userFormData.password}
                    onChange={handleInputChange}
                    placeholder="**********"
                  />
                  <button className="logInButton" type="submit">
                    Sign Up
                  </button>
                  <div className="modal-footer centerDiv signup-link">
                    <p>
                      Already have an account? <a onClick={showLogIn}>Login</a>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </>
    </>
  );
};

export default LoginModal;
