import React from "react";
import useClickOutside from "./useClickOutside";
const Hitbox = ({ onClickOutside }) => {
  const clickRef = React.useRef();
  useClickOutside(clickRef, onClickOutside);

  return (
    <div
      className="hit-box"
      ref={clickRef}
      style={{
        border: "5px solid green",
        height: 300,
        width: 600,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>Dont hit the box</p>
    </div>
  );
};
export default Hitbox;
