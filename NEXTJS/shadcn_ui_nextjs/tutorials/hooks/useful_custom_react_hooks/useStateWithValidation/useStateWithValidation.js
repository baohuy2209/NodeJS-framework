import React from "react";
export default function useStateWithValidation(validationFunc, intialValue) {
  const [state, setState] = React.useState(intialValue);
  const [isValid, setIsValid] = React.useState(() => validationFunc(state));

  const onChange = React.useCallback(
    (nextState) => {
      const value =
        typeof nextState === "function" ? nextState(state) : nextState;
      setState(value);
      setIsValid(validationFunc(value));
    },
    [validationFunc]
  );
  return [state, onChange, isValid];
}
