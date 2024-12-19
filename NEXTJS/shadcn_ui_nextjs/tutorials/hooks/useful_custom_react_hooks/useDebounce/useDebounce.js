import React from "react";
import useTimeout from "../useTimeout/useTimeout";

export default function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay);
  React.useEffect(reset, [...dependencies, reset]);
  React.useEffect(clear, []);
}
