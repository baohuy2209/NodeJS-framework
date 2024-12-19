import React from "react";
import { cn } from "@/lib/utils";

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const Comp = "button";

  return (
    <Comp
      {...props}
      className={cn(
        "border p-2 rounded-md hover:scale-110 hover:duration-500 hover:opacity-80",
        props.className
      )}
    >
      {props.children}
    </Comp>
  );
}

export default Button;
