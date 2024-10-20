import React from "react";
import useInterval from "./useInterval";
const ResourceCounter = () => {
  const [resources, setResources] = React.useState(0);
  useInterval(() => {
    setResources(resources + 2);
  }, 2500);

  return <p>{resources}</p>;
};
export default ResourceCounter;
