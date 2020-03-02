import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  results: []
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function getResult(movies) {
    dispatch({
      type: "GET_RESULT",
      payload: movies
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        results: state.results,
        getResult
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
