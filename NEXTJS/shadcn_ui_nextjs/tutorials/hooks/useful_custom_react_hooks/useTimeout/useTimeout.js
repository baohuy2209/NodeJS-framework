import React from "react";
export default function useTimeout(callback, delay) {
  const callbackRef = React.useRef(callback);
  const timeoutRef = React.useRef();

  React.useEffect(() => {
    callbackRef.current = callback;
  }, [delay]);

  const set = React.useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = React.useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  React.useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = React.useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}
