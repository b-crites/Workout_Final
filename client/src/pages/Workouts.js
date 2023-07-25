import React, { useEffect, useState } from "react";
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

    const [isOpen, setIsOpen] = useState(false);
    const [selectedDay, setSelectedDay] = useState('');
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleDaySelect = (day) => {
      setSelectedDay(day);
      setIsOpen(false);
    };
  

  // useEffect(() => {
  //   app.get("mongodb://localhost:27017/exercises")
  // })

  return (
    <>
      <SearchSelect />

      

      <div className="centerDiv row">
        <div className="workout-dark-bg search">
          <div className="workout-card padding">
            <div className="text-left">
            <div className="move-right">
              {Auth.loggedIn() ? (
                <>
                  <button onClick={toggleDropdown} className="add-btn">+</button>
                  {isOpen && (
        <div className="modal">
        <div className="modal-content">
          <ul>
            <li onClick={() => handleDaySelect('Monday')}>Monday</li>
            <li onClick={() => handleDaySelect('Tuesday')}>Tuesday</li>
            <li onClick={() => handleDaySelect('Wednesday')}>Wednesday</li>
            <li onClick={() => handleDaySelect('Thursday')}>Thursday</li>
            <li onClick={() => handleDaySelect('Friday')}>Friday</li>
            <li onClick={() => handleDaySelect('Saturday')}>Saturday</li>
            <li onClick={() => handleDaySelect('Sunday')}>Sunday</li>
          </ul>
          </div>
        </div>
      )}
                </>
              ) : (
                <></>
              )}
            </div>
              <h3 className="">Pushups</h3>
              <h5>Reps: 10-12 </h5>
              <h5>Description: Lie on the floor face down and place your hands about 36 inches apart while holding your torso up at arms length. Next, lower yourself downward until your chest almost touches the floor as you inhale. Now breathe out and press your upper body back up to the starting position while squeezing your chest. After a brief pause at the top contracted position, you can begin to lower yourself downward again for as many repetitions as needed. Variations: If you are new at this exercise and do not have the strength to perform it, you can either bend your legs at the knees to take off resistance or perform the exercise against the wall instead of the floor. For the most advanced lifters, you can place your feet at a high surface such as a bench in order to increase the resistance and to target the upper chest more. </h5>
            </div>
          </div>
        </div>
        <div className="workout-dark-bg search">
          <div className="workout-card padding">
            <div className="text-left">
            <div className="move-right">
              {Auth.loggedIn() ? (
                <>
                  <button className="add-btn">+</button>
                </>
              ) : (
                <></>
              )}
            </div>
              <h3 className="">Dumbbell Flyes</h3>
              <h5>Reps: 8-10</h5>
              <h5>Description: Instructions: Lie down on a flat bench with a dumbbell on each hand resting on top of your thighs. The palms of your hand will be facing each other. Then using your thighs to help raise the dumbbells, lift the dumbbells one at a time so you can hold them in front of you at shoulder width with the palms of your hands facing each other. Raise the dumbbells up like you're pressing them, but stop and hold just before you lock out. This will be your starting position. With a slight bend on your elbows in order to prevent stress at the biceps tendon, lower your arms out at both sides in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms should remain stationary; the movement should only occur at the shoulder joint. Return your arms back to the starting position as you squeeze your chest muscles and breathe out. Tip: Make sure to use the same arc of motion used to lower the weights. Hold for a second at the contracted position and repeat the movement for the prescribed amount of repetitions. Variations: You may want to use a palms facing forward version for different stimulation.</h5>
            </div>
          </div>
        </div>
        <div className="workout-dark-bg search">
          <div className="workout-card padding">
            <div className="text-left">
            <div className="move-right">
              {Auth.loggedIn() ? (
                <>
                  <button className="add-btn">+</button>
                </>
              ) : (
                <></>
              )}
            </div>
              <h3 className="">Incline Dumbbell Bench Press</h3>
              <h5>Reps: 8-10</h5>
              <h5>Description: Lie back on an incline bench with a dumbbell in each hand atop your thighs. The palms of your hands will be facing each other. Then, using your thighs to help push the dumbbells up, lift the dumbbells one at a time so that you can hold them at shoulder width. Once you have the dumbbells raised to shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. This will be your starting position. Be sure to keep full control of the dumbbells at all times. Then breathe out and push the dumbbells up with your chest. Lock your arms at the top, hold for a second, and then start slowly lowering the weight. Tip Ideally, lowering the weights should take about twice as long as raising them. Repeat the movement for the prescribed amount of repetitions. When you are done, place the dumbbells back on your thighs and then on the floor. This is the safest manner to release the dumbbells. Variations: You can use several angles on the incline bench if the bench you are using is adjustable. Another variation of this exercise is to perform it with the palms of the hands facing each other. Also, you can perform the exercise with the palms facing each other and then twisting the wrist as you lift the dumbbells so that at the top of the movement the palms are facing away from the body. I personally do not use this variation very often as it seems to be hard on my shoulders.</h5>
            </div>
          </div>
        </div><div className="workout-dark-bg search">
          <div className="workout-card padding">
            <div className="text-left">
            <div className="move-right">
              {Auth.loggedIn() ? (
                <>
                  <button className="add-btn">+</button>
                </>
              ) : (
                <></>
              )}
            </div>
              <h3 className="">Low-Cable Cross-Over</h3>
              <h5>Reps: 12-15 </h5>
              <h5>Description: To move into the starting position, place the pulleys at the low position, select the resistance to be used and grasp a handle in each hand. Step forward, gaining tension in the pulleys. Your palms should be facing forward, hands below the waist, and your arms straight. This will be your starting position. With a slight bend in your arms, draw your hands upward and toward the midline of your body. Your hands should come together in front of your chest, palms facing up. Return your arms back to the starting position after a brief pause.</h5>
            </div>
          </div>
        </div><div className="workout-dark-bg search">
          <div className="workout-card padding">
            <div className="text-left">
            <div className="move-right">
              {Auth.loggedIn() ? (
                <>
                  <button className="add-btn">+</button>
                </>
              ) : (
                <></>
              )}
            </div>
              <h3 className="">Chest dip</h3>
              <h5>Reps: 10-12 </h5>
              <h5>Description: For this exercise you will need access to parallel bars. To get yourself into the starting position, hold your body at arms length (arms locked) above the bars. While breathing in, lower yourself slowly with your torso leaning forward around 30 degrees or so and your elbows flared out slightly until you feel a slight stretch in the chest. Once you feel the stretch, use your chest to bring your body back to the starting position as you breathe out. Tip: Remember to squeeze the chest at the top of the movement for a second. Repeat the movement for the prescribed amount of repetitions. Variations: If you are new at this exercise and do not have the strength to perform it, use a dip assist machine if available. These machines use weight to help you push your bodyweight. Otherwise, a spotter holding your legs can help. More advanced lifters can add weight to the exercise by using a weight belt that allows the addition of weighted plates.</h5>
            </div>
          </div>
        </div>
       
      </div>
    
  
   </>
   );
};

export default Workouts;