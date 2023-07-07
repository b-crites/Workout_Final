import { useReducer } from 'react';
import {
  UPDATE_EXERCISES,
  ADD_TO_EXERCISE,
  UPDATE_EXERCISE_DURATION,
  REMOVE_FROM_EXERCISE,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_EXERCISE,
  UPDATE_EXERCISE_REPETITION,
} from './actions';

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  switch (action.type) {
    // Returns a copy of state with an update products array. We use the action.products property and spread it's contents into the new array.
    case UPDATE_EXERCISES:
      return {
        ...state,
        exercises: [...action.exercises],
      };

    case ADD_TO_EXERCISE: // might not be needed
      return {
        ...state,
        exercise: [...state.exercise, action.exercise],
      };


    case UPDATE_EXERCISE_DURATION:
      return {
        ...state,
        currentExercise: {
          ...state.exercise,
          duration: action.duration,
        },
      };

    case REMOVE_FROM_EXERCISE: // COME BACK TO THIS, NOT SURE IF NEEDED
      let newState = state.cart.filter((product) => {
        return product._id !== action._id;
      });

      // Then we return a copy of state and check to see if the cart is empty.
      // If not, we set the cartOpen status to  `true`. Then we return an updated cart array set to the value of `newState`.
      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState,
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory,
      };
      case CLEAR_EXERCISE:
        return {
          ...state,
          currentExercise: null,
      };
    case UPDATE_EXERCISE_REPETITION:
      return {
        ...state,
        currentExercise: {
          ...state.currentExercise,
          repetitions: action.repetitions,
      },
    };

    // Return the state as is in the event that the `action.type` passed to our reducer was not accounted for by the developers
    // This saves us from a crash.
    default:
      return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState);
}
