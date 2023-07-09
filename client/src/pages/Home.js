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
//   useEffect(() => {
//   anime({
//     targets: '.padding-top .trans-card-bg',
//     translateX: '75%',
//     delay: anime.stagger(100) // increase delay by 100ms for each elements.
//   });
// }, []);

//   useEffect(() => {
//     var tl = anime.timeline({
//         duration: 1850
//       });
//       tl.add({
//         targets: '.padding-top .p-graph',
//         translateX: '75%'
//       })
//       .add({
//         targets: '.padding-top .text',
//         translateX: '72%'
//       }, '-=300') // relative offset
//       .add({
//         targets: '.padding-top .card-Body',
//         translateX: '75%'
//       },'-=300' )
//       .add({
//         targets: '.padding-top .trans-card-bg',
//         translateX: '75%'
//       },'-=300' ); // 
//     }, []);
  
  

  return (
    
      <div className="vh">
      <div className="padding-top">
        <div className="trans-card-bg shadow offscreen">
          <div className="card-Body">
            <h1 className="text centerDiv">Welcome!</h1>
            <p className="p-graph centerDiv">We are here to help with your workout!</p>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Home;
