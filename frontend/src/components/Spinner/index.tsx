import React from "react";

import { cn } from "@/utils/cn";

const Spinner: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-full bg-transparent border-2 border-gray-400 border-l-transparent w-5 h-5 animate-spin",
        className
      )}
      {...props}
    />
  );
};

export { Spinner };
