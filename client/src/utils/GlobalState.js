import React, { createContext, useContext } from "react";
import { useExerciseReducer } from './reducers'

const ExerciseContext = createContext();
const { Provider } = ExerciseContext;

const ExerciseProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useExerciseReducer({
    exercises: [],
    categories: [],
    currentCategory: '',
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useExerciseContext = () => {
  return useContext(ExerciseContext);
};

export { ExerciseProvider, useExerciseContext };