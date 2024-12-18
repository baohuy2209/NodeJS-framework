import { useRef, useState } from "react";
import useClickOutside from "./useClickOutSide";
import Button from "../useArray/Button";

function ClickOutsideComp() {
  const [open, setOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(modalRef, () => {
    if (open) setOpen(false);
  });

  return (
    <>
      <Button
        className="bg-black text-white"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
      >
        Open
      </Button>
      <div
        ref={modalRef}
        style={{
          display: open ? "block" : "none",
          backgroundColor: "blue",
          color: "white",
          width: "100px",
          height: "100px",
          position: "absolute",
          top: "calc(50% - 50px)",
          left: "calc(50% - 50px)",
        }}
      >
        <span>Modal</span>
      </div>
    </>
  );
}

export default ClickOutsideComp;
