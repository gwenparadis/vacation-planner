import { useReducer } from "react";
import { UPDATE_ACTIVITIES } from "./actions";

// The reducer is a function that accepts the current state and an action. It returns a new state based on that action.
export const reducer = (state, action) => {
  switch (action.type) {
    // Returns a copy of state with an update activities array. We use the action.activities property and spread it's contents into the new array.
    case UPDATE_ACTIVITIES:
      return {
        ...state,
        activities: [...action.activities],
      };

    default:
      return state;
  }
};

export function useActivityReducer(initialState) {
  return useReducer(reducer, initialState);
}
