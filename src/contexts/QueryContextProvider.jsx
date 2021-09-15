import React, { useContext, createContext, useState, useEffect } from "react";

const QueryContext = createContext();


// custom hook to provide textinput from searchfrom to different components
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
