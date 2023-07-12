import React, { useEffect } from "react";
import "../components/CSS/Workouts.css";
import SearchSelect from "../components/SearchSelect";
import anime from "animejs";
import Auth from "../utils/auth";

const Workouts = () => {
  useEffect(() => {
    anime({
      targets: ".search",
      transitionX: "-100%",
      scale: "100%",
      duration: 1825,
      delay: 500,
    });
  }, []);

  return (
    <>
      <SearchSelect />

      <div className="centerDiv row">
        <div className="workout-dark-bg search">
          <div className="workout-card padding">
            <div className="text-left">
              <h3 className="">Workout Name</h3>
              <h5>Difficulty: </h5>
              <h5>Description: </h5>
            </div>
            <div className="move-right">
              {Auth.loggedIn() ? (
                <>
                  <button className="add-btn">+</button>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        {/* <div className="workout-dark-bg search">
        <div className="workout-card padding">
            <div className="text-left">
            <h3 className="">Workout Name</h3>
            <h5>Difficulty: </h5>
            <h5>Description: </h5>
            </div>
            <div className="move-right">

                <button className="add-btn">+</button>
            </div>
        </div>
    </div>
    <div className="workout-dark-bg search">
        <div className="workout-card padding">
            <div className="text-left">
            <h3 className="">Workout Name</h3>
            <h5>Difficulty: </h5>
            <h5>Description: </h5>
            </div>
            <div className="move-right">
                <button className="add-btn">+</button>
            </div>
        </div>
    </div>
    <div className="workout-dark-bg search">
        <div className="workout-card padding">
            <div className="text-left">
            <h3 className="">Workout Name</h3>
            <h5>Difficulty: </h5>
            <h5>Description: </h5>
            </div>
            <div className="move-right">
                <button className="add-btn">+</button>
            </div>
        </div>
    </div>
    <div className="workout-dark-bg search">
        <div className="workout-card padding">
            <div className="text-left">
            <h3 className="">Workout Name</h3>
            <h5>Difficulty: </h5>
            <h5>Description: </h5>
            </div>
            <div className="move-right">
                <button className="add-btn">+</button>
            </div>
        </div>
    </div>
    <div className="workout-dark-bg search">
        <div className="workout-card padding">
            <div className="text-left">
            <h3 className="">Workout Name</h3>
            <h5>Difficulty: </h5>
            <h5>Description: </h5>
            </div>
            <div className="move-right">
                <button className="add-btn">+</button>
            </div>
        </div>
    </div> */}
      </div>
    </>
  );
};

export default Workouts;