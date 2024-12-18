import { OptionHTMLAttributes, SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
type TSelectElement = SelectHTMLAttributes<HTMLSelectElement>;
type TOptionsElement = OptionHTMLAttributes<HTMLOptionElement>;
type TSelect = TSelectElement & {
  lblText?: string;
  direction?: "horizontal" | "vertical";
};

export function Option({ ...props }: TOptionsElement) {
  const Comp = "option";
  return (
    <Comp {...props} value={props.value}>
      {props.children}
    </Comp>
  );
}

export default function Select({ lblText, direction, ...props }: TSelect) {
  const Comp = "select";

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
      >
        {props.children}
      </Comp>
    </div>
  );
}
