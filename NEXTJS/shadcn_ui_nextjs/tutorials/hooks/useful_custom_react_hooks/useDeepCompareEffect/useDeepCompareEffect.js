import { useEffect, useRef } from "react";
import isEqual from "lodash/fp/isEqual";

export default function useDeepCompareEffect(callback, dependencies) {
  const currentDependencies = useRef();
  if (!isEqual(currentDependencies.current, dependencies)) {
    currentDependencies.current = dependencies;
  }

  useEffect(callback, [currentDependencies.current]);
}
