import React from "react";

export default function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = React.useRef(true);

  React.useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}
