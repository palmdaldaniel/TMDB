import React, { useContext, createContext, useState, useEffect } from "react";

const QueryContext = createContext();


// custom hook to allow to share values between components
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
