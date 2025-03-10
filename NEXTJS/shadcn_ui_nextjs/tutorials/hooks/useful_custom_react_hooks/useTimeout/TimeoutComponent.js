import React from "react";
import useTimeout from "./useTimeout";
export default function TimeoutComponent() {
  const [count, setCount] = React.useState(10);

  const { clear, reset } = useTimeout(() => setCount(10), 1000);

  return (
    <div>
      <div>{Count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </div>
  );
}
