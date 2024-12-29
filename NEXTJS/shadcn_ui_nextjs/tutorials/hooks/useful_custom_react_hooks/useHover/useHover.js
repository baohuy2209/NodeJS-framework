import React from "react";
import useEventListener from "../useEventListener/useEventListener";
export default function useHover(ref) {
  const [hovered, setHovered] = React.useState(false);
  useEventListener("mouseover", () => setHovered(true), ref.current);
  useEventListener("mouseout", () => setHovered(false), ref.current);

  return hovered;
}
