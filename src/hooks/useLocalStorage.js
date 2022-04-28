import { useCallback, useRef, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error return initialValue
      return initialValue;
    }
  });

  const valueRef = useRef(storedValue);

  const setValue = useCallback(
    (value) => {
      try {
        setStoredValue(value);
        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value));
        valueRef.current = value;
      } catch (error) {
        console.error(error);
      }
    },
    [key]
  );

  return [storedValue, setValue, valueRef];
}

export default useLocalStorage;
