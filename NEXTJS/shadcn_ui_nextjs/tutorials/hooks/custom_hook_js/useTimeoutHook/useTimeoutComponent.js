import React from "react";
import useTimeout from "./useTimeout";
const ExampleTimeFiveSeconds = () => {
  const [seconds, setSeconds] = React.useState(0);
  useTimeout(() => {
    setSeconds(seconds + 1);
  }, 5000);

  return <p>{seconds}</p>;
};

export default ExampleTimeFiveSeconds;
