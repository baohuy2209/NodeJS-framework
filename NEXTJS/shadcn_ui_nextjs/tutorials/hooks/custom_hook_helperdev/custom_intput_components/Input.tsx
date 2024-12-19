import React from "react";
import { cn } from "@/lib/utils";

type TInputElement = React.InputHTMLAttributes<HTMLInputElement>;

type TInput = TInputElement & {
  lblText?: string;
  direction?: "horizontal" | "vertical";
};

export default function Input({ lblText, direction, ...props }: TInput) {
  const Comp = "input";

  return (
    <div
      className={cn(
        "flex items-center gap-1",
        direction === "horizontal" && "items-center",
        direction === "vertical" && "flex-col items-start"
      )}
    >
      {lblText && <label>{lblText}</label>}
      <Comp
        {...props}
        className={cn(
          "w-full border border-gray-400 rounded-md p-2 shadow-md duration-500 hover:border-blue-400 focus:border-blue-400 focus:outline-blue-400 focus:shadow-lg",
          props.className
        )}
      />
    </div>
  );
}
