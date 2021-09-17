import React, { useContext, createContext, useState } from "react";

const QueryContext = createContext();

// custom hook of context to minimize boilerplate code in components that share data
export const useQueryContext = () => {
  return useContext(QueryContext);
};

const QueryContextProvider = ({ children }) => {
  const [inputText, setInputText] = useState(""); 

  const values = {
    inputText,
    setInputText,
  };

  return (
    <QueryContext.Provider value={values}>{children}</QueryContext.Provider>
  );
};

export default QueryContextProvider;
