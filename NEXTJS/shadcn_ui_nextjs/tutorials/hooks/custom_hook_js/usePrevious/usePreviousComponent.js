import React from "react";
import usePrevious from "./usePrevious";
const MoneyCount = () => {
  const [value, setValue] = React.useState(0);
  const lastValue = usePrevious(value);
  return (
    <div>
      <p>
        Current: {value} - Previous: {lastValue}
      </p>
      <button onClick={() => setValue(value + 1)}>Increment Money</button>
    </div>
  );
};
export default MoneyCount;
