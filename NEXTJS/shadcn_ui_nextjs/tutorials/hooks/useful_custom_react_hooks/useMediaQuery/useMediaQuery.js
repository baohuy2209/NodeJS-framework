import React from "react";
import useEventListener from "../useEventListener/useEventListener";
export default function useMediaQuery(mediaQuery) {
  const [isMatch, setIsMatch] = React.useState(false);
  const [mediaQueryList, setMediaQueryList] = React.useState(null);

  React.useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener("change", (e) => setIsMatch(e.matches), mediaQueryList);
  return isMatch;
}
