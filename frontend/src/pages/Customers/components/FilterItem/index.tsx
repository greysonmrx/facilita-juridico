import React from "react";

import { Icon } from "@/components/Icon";

import { cn } from "@/utils/cn";

const FilterItemRoot: React.FC<React.ComponentProps<"div">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        className,
        "flex items-center flex-1 max-h-9 text-sm py-1.5 pl-3 pr-2 space-x-1 leading-4 bg-white border border-solid border-gray-200 text-blue-950 rounded lg:max-w-52"
      )}
      {...props}
    >
      {children}
    </div>
  );
};
FilterItemRoot.displayName = "FilterItemRoot";

const FilterItemLabel: React.FC<React.ComponentProps<"strong">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <strong className={cn(className, "")} {...props}>
      {children}
    </strong>
  );
};
FilterItemLabel.displayName = "FilterItemLabel";

const FilterItemValue: React.FC<React.ComponentProps<"p">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <p className={cn(className, "w-full truncate")} {...props}>
      {children}
    </p>
  );
};
FilterItemValue.displayName = "FilterItemValue";

const FilterItemDeleteButton: React.FC<React.ComponentProps<"button">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        className,
        "text-red-500 enabled:hover:bg-red-50 p-1 rounded ml-1 disabled:cursor-not-allowed disabled:text-gray-500"
      )}
      {...props}
    >
      <Icon name="x-bold" size={15} />
      {children}
    </button>
  );
};
FilterItemDeleteButton.displayName = "FilterItemDeleteButton";

export const FilterItem = {
  Root: FilterItemRoot,
  Label: FilterItemLabel,
  Value: FilterItemValue,
  DeleteButton: FilterItemDeleteButton,
};
