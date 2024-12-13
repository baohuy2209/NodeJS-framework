import { useState } from "react";
import useEventListener from "./useEventListener";

function EventListenerComp() {
  const [key, setKey] = useState<string>("");

  /* In addition to "keydown", you can have many other options, 
     it will depend on your problem processing requirements. 
  */
  useEventListener("keydown", (e) => {
    setKey(e.key);
  });

  return <div>Last Key: {key}</div>;
}

export default EventListenerComp;
