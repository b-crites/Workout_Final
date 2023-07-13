import React, { useEffect } from "react";
import '../components/CSS/Planner.css';
import Auth from "../utils/auth";

const Planner = () => {


  
  // useEffect(() => {
  //   anime({
  //     targets: '.planner',
  //     translateX: '',
  //     duration: 750,
  //     delay: anime.stagger(150)
  //   });
  // }, []);
    return (

        <>

{Auth.loggedIn() ? (
        <>
        <div className="planner">
  <div className="day">Monday</div>
  {/* <div className="card-holder">
    <div className="planner-card">
      <h2>{props.title}</h2>
      <p>Description: {props.description} </p>
    </div>
    </div> */}

  <div className="day" id="tuesday">Tuesday</div>

  <div className="day" id="wednesday">Wednesday</div>
  <div className="day" id="thursday">Thursday</div>
  <div className="day" id="friday">Friday</div>
  <div className="day" id="saturday">Saturday</div>
  <div className="day" id="sunday">Sunday</div>
</div>
        </>
    ):(
        <>
    <h3 className="white-text centerDiv">Please login or sign up to use the planner.</h3>
    </>
    )};


</>
    )};

    export default Planner;