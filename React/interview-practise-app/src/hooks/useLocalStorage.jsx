import { useState } from "react";

export default function UseLocalStorage(key, initialValue = "hello") {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) || initialValue;
  });

  const setLocalStorage = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };
  return [value, setLocalStorage];
}
