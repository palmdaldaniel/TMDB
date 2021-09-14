import React, { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue = null) => {
  const [value, setValue] = useState(() => {
    // get value from localStorage
    const jsonValue = localStorage.getItem(key);

    return jsonValue ? JSON.parse(jsonValue) : defaultValue;
  });

  useEffect(() => {

    
    let values = [];
    // don't run this one if defaultValue is not set yeat
    if (!defaultValue) return;
   
    const jsonValue = localStorage.getItem(key);

    if (!jsonValue) {

      values.push(defaultValue);
      localStorage.setItem(key, JSON.stringify(values));
    } else {
      values = JSON.parse(jsonValue);
      values.push(defaultValue);
      localStorage.setItem(key, JSON.stringify(values));
    }
  }, [defaultValue]);

  return [value, setValue];
};

export default useLocalStorage;
