import React from "react";
export default function usePrevious(value) {
  const currentRef = React.useRef(value);
  const previousRef = React.useRef(value);

  if (currentRef.current !== value) {
    previousRef.current = currentRef.current;
    currentRef.current = value;
  }

  return previousRef.current;
}
