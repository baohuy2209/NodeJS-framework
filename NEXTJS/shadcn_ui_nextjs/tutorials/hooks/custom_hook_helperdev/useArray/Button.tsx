import React from "react";

type Props = {
  onClick: () => void;
  children: string;
};

export default function Button({ onClick, children }: Props) {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
}
