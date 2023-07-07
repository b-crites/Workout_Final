import { reducer } from '../utils/reducers';
import {
  UPDATE_EXERCISES,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  CLEAR_EXERCISE,
  UPDATE_EXERCISE_REPETITION,
  UPDATE_EXERCISE_DURATION,
  ADD_TO_EXERCISE,
  REMOVE_FROM_EXERCISE,
} from '../utils/actions';

// create a sample of what our global state will look like
const initialState = {
  exercises: [],
  categories: [{ name: 'Arms' }],
  currentCategory: 'Arms',
  currentExercise: {
    _id: 1,
    name: 'Bicep Curl',
    description:
      'Stand up straight with a dumbbell in each hand at arm\'s length. Keep your elbows close to your torso and rotate the palms of your hands until they are facing forward. This will be your starting position. Now, keeping the upper arms stationary, exhale and curl the weights while contracting your biceps. Continue to raise the weights until your biceps are fully contracted and the dumbbells are at shoulder level. Hold the contracted position for a brief pause as you squeeze your biceps. Then, inhale and slowly begin to lower the dumbbells back to the starting position. Repeat for the recommended amount of repetitions.',
    category: 'Arms',
    duration: 30,
    reps: 10,
  },
  exercise: [],
};

test('UPDATE_EXERCISES', () => {
  let newState = reducer(initialState, {
    type: UPDATE_EXERCISES,
    exercises: [{}, {}],
  });

  expect(newState.exercises.length).toBe(2);
  expect(initialState.exercises.length).toBe(0);
}
);

test('UPDATE_CATEGORIES', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CATEGORIES,
    categories: [{}, {}],
  });

  expect(newState.categories.length).toBe(2);
  expect(initialState.categories.length).toBe(1);
}
);

test('UPDATE_CURRENT_CATEGORY', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CURRENT_CATEGORY,
    currentCategory: 'Legs',
  });

  expect(newState.currentCategory).toBe('Legs');
  expect(initialState.currentCategory).toBe('Arms');
}
);

test('CLEAR_EXERCISE', () => {
  let newState = reducer(initialState, {
    type: CLEAR_EXERCISE,
  });

  expect(newState.currentExercise).toBe(null);
}
);

test('UPDATE_EXERCISE_REPETITION', () => {
  let newState = reducer(initialState, {
    type: UPDATE_EXERCISE_REPETITION,
    repetitions: 20,
  });

  expect(newState.currentExercise.repetitions).toBe(20);
  expect(initialState.currentExercise.repetitions).toBe(10);
}

);

test('UPDATE_EXERCISE_DURATION', () => {
  let newState = reducer(initialState, {
    type: UPDATE_EXERCISE_DURATION,
    duration: 20,
  });

  expect(newState.currentExercise.duration).toBe(20);
  expect(initialState.currentExercise.duration).toBe(30);
}

);

test('ADD_TO_EXERCISE', () => {
  let newState = reducer(initialState, {
    type: ADD_TO_EXERCISE,
    exercise: { name: 'Bicep Curl' },
  });

  expect(newState.exercise.length).toBe(1);
  expect(initialState.exercise.length).toBe(0);
}
);

test('REMOVE_FROM_EXERCISE', () => {
  let newState1 = reducer(initialState, {
    type: ADD_TO_EXERCISE,
    exercise: { name: 'Bicep Curl' },
  });

  let newState2 = reducer(newState1, {
    type: REMOVE_FROM_EXERCISE,
    _id: 1,
  });

  expect(newState2.exercise.length).toBe(0);
  expect(initialState.exercise.length).toBe(0);
}
);

test('UPDATE_EXERCISES', () => {
  let newState = reducer(initialState, {
    type: UPDATE_EXERCISES,
    exercises: [{}, {}],
  });

  expect(newState.exercises.length).toBe(2);
  expect(initialState.exercises.length).toBe(0);
}
);

test('UPDATE_CATEGORIES', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CATEGORIES,
    categories: [{}, {}],
  });

  expect(newState.categories.length).toBe(2);
  expect(initialState.categories.length).toBe(1);
}
);

test('UPDATE_CURRENT_CATEGORY', () => {
  let newState = reducer(initialState, {
    type: UPDATE_CURRENT_CATEGORY,
    currentCategory: 'Legs',
  });

  expect(newState.currentCategory).toBe('Legs');
  expect(initialState.currentCategory).toBe('Arms');
}
);

test('CLEAR_EXERCISE', () => {
  let newState = reducer(initialState, {
    type: CLEAR_EXERCISE,
  });

  expect(newState.currentExercise).toBe(null);
}
);

test('UPDATE_EXERCISE_REPETITION', () => {
  let newState = reducer(initialState, {
    type: UPDATE_EXERCISE_REPETITION,
    repetitions: 20,
  });

  expect(newState.currentExercise.repetitions).toBe(20);
  expect(initialState.currentExercise.repetitions).toBe(10);
}

);



