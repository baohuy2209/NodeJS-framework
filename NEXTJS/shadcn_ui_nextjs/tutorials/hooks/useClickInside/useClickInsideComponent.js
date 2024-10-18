import React from "react";
import useClickInside from "./useClickInside";
const HitBox = ({ onClickInside }) => {
  const clickRef = React.useRef();
  useClickInside(clickRef, onClickInside);
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
      <p>Hit the box</p>
    </div>
  );
};
export default HitBox;
