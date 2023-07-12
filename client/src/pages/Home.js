import React, { useEffect } from "react";
import anime from "animejs";
import "../components/CSS/Home.css";

const Home = () => {
  useEffect(() => {
    anime({
      targets: ".padding-top",
      translateX: "75%",
      duration: 1825,
      delay: 500
    });
  }, []);

  
  

  return (
    
      <div className="vh">
      <div className="padding-top">
        <div className="trans-card-bg shadow offscreen">
          <div className="card-Body">
            <h1 className="text centerDiv">Welcome!</h1>
            <h4 className="p-graph centerDiv">We are here to help with your workout!</h4>
            <h4 className="p-graph centerDiv">Go to the workouts page to get started with searching for your next exercise!</h4>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Home;
