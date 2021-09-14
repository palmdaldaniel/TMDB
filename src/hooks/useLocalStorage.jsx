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
      
      // check if item exists in our stored values
      //find index returns -1 if not item passed the test.
      const exists = values.findIndex((value) => value.id === defaultValue.id);
      if (exists !== -1) return;

      // if value.length is bigger than 10 item, remove the last one and add the newest val  to the top.
  
      if (values.length > 9) {
        values.pop();
        values.unshift(defaultValue);
        localStorage.setItem(key, JSON.stringify(values));
        return;
      }

      values.unshift(defaultValue);
      localStorage.setItem(key, JSON.stringify(values));
    }
  }, [defaultValue]);

  return [value, setValue];
};

export default useLocalStorage;
