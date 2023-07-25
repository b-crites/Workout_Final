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
  <div className="card-holder">
    <div className="planner-card">
      <h2>Pushups</h2>
      <p>Description: Lie on the floor face down and place your hands about 36 inches apart while holding your torso up at arms length. Next, lower yourself downward until your chest almost touches the floor as you inhale. Now breathe out and press your upper body back up to the starting position while squeezing your chest. After a brief pause at the top contracted position, you can begin to lower yourself downward again for as many repetitions as needed. Variations: If you are new at this exercise and do not have the strength to perform it, you can either bend your legs at the knees to take off resistance or perform the exercise against the wall instead of the floor. For the most advanced lifters, you can place your feet at a high surface such as a bench in order to increase the resistance and to target the upper chest more.</p>
    </div>
    <div className="planner-card">
      <h2>Dumbbell Flyes</h2>
      <p>Description: Lie down on a flat bench with a dumbbell on each hand resting on top of your thighs. The palms of your hand will be facing each other. Then using your thighs to help raise the dumbbells, lift the dumbbells one at a time so you can hold them in front of you at shoulder width with the palms of your hands facing each other. Raise the dumbbells up like you're pressing them, but stop and hold just before you lock out. This will be your starting position. With a slight bend on your elbows in order to prevent stress at the biceps tendon, lower your arms out at both sides in a wide arc until you feel a stretch on your chest. Breathe in as you perform this portion of the movement. Tip: Keep in mind that throughout the movement, the arms should remain stationary; the movement should only occur at the shoulder joint. Return your arms back to the starting position as you squeeze your chest muscles and breathe out. Tip: Make sure to use the same arc of motion used to lower the weights. Hold for a second at the contracted position and repeat the movement for the prescribed amount of repetitions. Variations: You may want to use a palms facing forward version for different stimulation.</p>
    </div>
    <div className="planner-card">
      <h2>Single-arm cable triceps extension</h2>
      <p>Description: With your right hand, grasp a single handle attached to the high-cable pulley using a supinated (underhand; palms facing up) grip. You should be standing directly in front of the weight stack. Now pull the handle down so that your upper arm and elbow are locked in to the side of your body. Your upper arm and forearm should form an acute angle (less than 90-degrees). You can keep the other arm by the waist and you can have one leg in front of you and the other one back for better balance. This will be your starting position. As you contract the triceps, move the single handle attachment down to your side until your arm is straight. Breathe out as you perform this movement. Tip: Only the forearms should move. Your upper arms should remain stationary at all times. Squeeze the triceps and hold for a second in this contracted position. Slowly return the handle to the starting position. Repeat for the recommended amount of repetitions and then perform the same movement with the other arm. Variations: You can use exercise bands to perform this exercise.</p>
    </div>
    </div>

  <div className="day" id="tuesday">Tuesday</div>

  <div className="day" id="wednesday">Wednesday</div>
  <div className="day" id="thursday">Thursday</div>
  <div className="card-holder">
    <div className="planner-card">
      <h2>Seated Cable Rows</h2>
      <p>Description: For this exercise you will need access to a low pulley row machine with a V-bar. Note: The V-bar will enable you to have a neutral grip where the palms of your hands face each other. To get into the starting position, first sit down on the machine and place your feet on the front platform or crossbar provided making sure that your knees are slightly bent and not locked. Lean over as you keep the natural alignment of your back and grab the V-bar handles. With your arms extended pull back until your torso is at a 90-degree angle from your legs. Your back should be slightly arched and your chest should be sticking out. You should be feeling a nice stretch on your lats as you hold the bar in front of you. This is the starting position of the exercise. Keeping the torso stationary, pull the handles back towards your torso while keeping the arms close to it until you touch the abdominals. Breathe out as you perform that movement. At that point you should be squeezing your back muscles hard. Hold that contraction for a second and slowly go back to the original position while breathing in. Repeat for the recommended amount of repetitions. Caution: Avoid swinging your torso back and forth as you can cause lower back injury by doing so. Variations: You can use a straight bar instead of a V-Bar and perform with a pronated grip (palms facing down-forward) or a supinated grip (palms facing up-reverse grip).</p>
    </div>
    <div className="planner-card">
      <h2>Barbell Curl</h2>
      <p>Stand up with your torso upright while holding a barbell at a shoulder-width grip. The palm of your hands should be facing forward and the elbows should be close to the torso. This will be your starting position. While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard. Slowly begin to bring the bar back to starting position as your breathe in. Repeat for the recommended amount of repetitions. Variations: You can also perform this movement using a straight bar attachment hooked to a low pulley. This variation seems to really provide a good contraction at the top of the movement. You may also use the closer grip for variety purposes.</p>
    </div>
  </div>
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