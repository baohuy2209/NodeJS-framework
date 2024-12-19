import React from "react";
export default function useEventListener(
  eventType,
  callback,
  element = window
) {
  const callbackRef = useRef(callback);
  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  React.useEffect(() => {
    if (element == null) {
      return;
    }
    const handler = (e) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => {
      element.removeEventListener(eventType, handler);
    };
  }, [eventType, element]);
}
