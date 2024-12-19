import React from "react";

export default function useSize(ref) {
  const [size, setSize] = React.useState({});

  React.useEffect(() => {
    if (ref.current == null) {
      return;
    }

    const observer = new ResizeObserver(([entry]) =>
      setSize(entry.contentReact)
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return size;
}
