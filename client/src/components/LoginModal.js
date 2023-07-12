import React from "react";
import "../components/CSS/LoginModal.css";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER, LOGIN } from "../utils/mutations";
import Auth from '../utils/auth';


const LoginModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeForm, setActiveForm] = useState("login");

  // LOGIN
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, {error}] = useMutation(LOGIN);

  const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    const handleInputFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await login({
          variables: { ...formState },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }

      setFormState({
          email: '',
          password: '',
        });
      };
      // LOGIN END_______________________________________________________________________________________________________________________________________________________
    // SIGN UP
  
  const [userFormData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [addUser] = useMutation(ADD_USER);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userFormData, [name]: value });
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

  // SIGNUP END_______________________________________________________________________________________________________________________________________________________
    

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
                <form id="login-form" onSubmit={handleInputFormSubmit}>
                    <h2 className="login-title">Welcome Back!</h2>
                    <input
                      type="text"
                      name="email"
                      value={formState.email}
                  onChange={handleChange}

                      placeholder="Email"
                    />
                    <input
                      type="password"
                      name="password"
                      value={formState.password}
                  onChange={handleChange}

                      placeholder="**********"
                    />
                    <button className="logInButton" type="submit">
                      Log In
                    </button>
                    <div className="modal-footer centerDiv signup-link">
                      <p>
                        Don't have an account?
                        <a onClick={showSignup}>Signup</a>
                      </p>
                    </div>
                  </form>
                </>
              )}{error && (
                <div className="loginFail centerDiv">
                  <p>Something went wrong. Please try again.</p>
                </div>
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
