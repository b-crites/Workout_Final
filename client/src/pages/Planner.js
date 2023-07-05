import React, { useEffect } from "react";
import '../components/CSS/Planner.css';
import anime from "animejs";

const Planner = () => {

  useEffect(() => {
    anime({
      targets: '.planner .day',
      translateX: '707%',
      duration: 750,
      delay: anime.stagger(150,{direction: 'reverse'})
    });
  }, []);
    return (

        <>

<div className="planner">
  <div className="day">Monday</div>
  <div className="day">Tuesday</div>
  <div className="day">Wednesday</div>
  <div className="day">Thursday</div>
  <div className="day">Friday</div>
  <div className="day">Saturday</div>
  <div className="day">Sunday</div>
</div>
</>
    )};

    export default Planner;