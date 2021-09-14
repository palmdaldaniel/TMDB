import React, { useState, useEffect } from "react";

const useLocalStorage = (key, defaultValue = null) => {
  const [value, setValue] = useState(() => {
    // get value from localStorage
    const jsonValue = localStorage.getItem(key);

    return jsonValue ? JSON.parse(jsonValue) : defaultValue;
  });

  useEffect(() => {

    let values = []

        if(!defaultValue) return
     // console.log(values.length);
    const jsonValue = localStorage.getItem(key)

    if(!jsonValue) {
        console.log('there is no value here,lets set one');
        values.push(defaultValue)
        localStorage.setItem(key, JSON.stringify(values)); 
    } else {
      values = JSON.parse(jsonValue) 
      values.push(defaultValue)
      localStorage.setItem(key, JSON.stringify(values)); 
    }


  }, [defaultValue]);

  return [value, setValue];
};

export default useLocalStorage;
