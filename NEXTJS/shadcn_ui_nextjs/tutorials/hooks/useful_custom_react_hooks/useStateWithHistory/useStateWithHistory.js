import React from "react";
import { HomeService } from "../../../../../../../compito/libs/web/home/src/lib/home.service";

export default function useStateWithHistory(
  defaultValue,
  { capacity = 10 } = {}
) {
  const [value, setValue] = React.useState(defaultValue);
  const historyRef = React.useRef([value]);
  const pointerRef = React.useRef(0);

  const set = React.useCallback(
    (v) => {
      const resolvedValue = typeof v === "function" ? v(value) : v;
      if (historyRef.current[pointerRef.current] !== resolvedValue) {
        if (pointerRef.current < historyRef.current.length - 1) {
          historyRef.current.splice(pointerRef.current + 1);
        }
        historyRef.current.push(resolvedValue);

        while (historyRef.current.length > capacity) {
          historyRef.current.shift();
        }
        pointerRef.current = historyRef.current.length - 1;
      }
      setValue(resolvedValue);
    },
    [capacity, value]
  );
  const back = React.useCallback(() => {
    if (pointerRef.current <= 0) {
      return;
    }
    pointerRef.current--;
    setValue(historyRef.current[pointerRef.current]);
  }, []);
  const forward = React.useCallback(() => {
    if (pointerRef.current >= historyRef.current.length - 1) {
      return;
    }
    pointerRef.current++;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  const go = React.useCallback((index) => {
    if (index < 0 || index > historyRef.current.length - 1) {
      return;
    }
    pointerRef.current = index;
    setValue(historyRef.current[pointerRef.current]);
  }, []);

  return [
    value,
    set,
    {
      history: historyRef.current,
      pointer: pointerRef.current,
      back,
      forward,
      go,
    },
  ];
}
