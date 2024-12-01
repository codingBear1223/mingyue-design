import { useState, useEffect } from "react";

const useDebounce = (value: any, delay: number) => {
  const [dbValue, setDbValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDbValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return dbValue;
};

export default useDebounce;
