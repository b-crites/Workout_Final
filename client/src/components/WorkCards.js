import React from "react";
import "./CSS/Workouts.css";
import AddButton from "./AddButton";

export default function WorkCards(props) {
  const isLoggedIn = props.isLoggedIn;


  return (
    <div className="centerDiv row">
      <div className="workout-dark-bg search">
        <div className="workout-card padding">
          <div className="text-left">
            <h3>{props.title}</h3>
            <h5>Difficulty: {props.difficulty} </h5>
            <h5>Description: {props.description}</h5>
          </div>

          {isLoggedIn ? (
           <AddButton />
          ) : (
            'hide'
          )}
        </div>
      </div>
    </div>

    
  );
}