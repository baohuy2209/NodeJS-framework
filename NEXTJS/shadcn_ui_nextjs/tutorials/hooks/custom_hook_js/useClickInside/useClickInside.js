import React from "react";
const useClickInside = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && ref.current.contains(e.target)) {
      callback();
    }
  };
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};
export default useClickInside;
