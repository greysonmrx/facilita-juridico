import React from "react";

import { Icon } from "@/components/Icon";

import { cn } from "@/utils/cn";

const CustomerCardRoot: React.FC<React.ComponentProps<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        className,
        "relative flex flex-col gap-2 border border-gray-200 rounded p-5 items-center"
      )}
      {...props}
    >
      {children}
    </div>
  );
};
CustomerCardRoot.displayName = "CustomerCardRoot";

const CustomerCardDeleteButton: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  React.ComponentProps<"button">
> = ({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        className,
        "flex absolute top-2.5 right-2.5 items-center justify-center p-2 rounded border-none bg-red-550 text-white transition-all duration-200 ease-in hover:bg-red-450 focus:shadow-red-300 focus:shadow-[0_0_0_2px] focus-visible:shadow-[0_0_0_2px] focus-visible:shadow-red-300 focus-within:shadow-[0_0_0_2px] focus-within:shadow-red-300"
      )}
      {...props}
    >
      <Icon name="trash-bold" size={15} />
    </button>
  );
};
CustomerCardDeleteButton.displayName = "CustomerCardDeleteButton";

const CustomerCardAvatar: React.FC<React.ComponentProps<"img">> = ({
  className,
  ...props
}) => {
  return (
    <img
      className={cn(className, "w-12 aspect-square")}
      alt="Avatar"
      {...props}
    />
  );
};
CustomerCardAvatar.displayName = "CustomerCardAvatar";

const CustomerCardTitle: React.FC<React.ComponentProps<"h1">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <h1
      {...props}
      className={cn(className, "w-full font-semibold truncate text-center")}
    >
      {children}
    </h1>
  );
};
CustomerCardTitle.displayName = "CustomerCardTitle";

const CustomerCardContent: React.FC<React.ComponentProps<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(className, "w-full flex flex-col gap-1.5 items-center")}
    >
      {children}
    </div>
  );
};
CustomerCardContent.displayName = "CustomerCardContent";

const CustomerCardValueContent: React.FC<React.ComponentProps<"div">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        className,
        "w-full flex gap-0.5 items-center justify-center"
      )}
    >
      {children}
    </div>
  );
};
CustomerCardValueContent.displayName = "CustomerCardValueContent";

const CustomerCardValueText: React.FC<React.ComponentProps<"p">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      {...props}
      className={cn(className, "truncate font-regular text-gray-500 text-xs")}
    >
      {children}
    </p>
  );
};
CustomerCardValueText.displayName = "CustomerCardValueText";

const ForwardedCustomerCardDeleteButton = React.forwardRef(
  CustomerCardDeleteButton
);

export const CustomerCard = {
  Root: CustomerCardRoot,
  DeleteButton: ForwardedCustomerCardDeleteButton,
  Avatar: CustomerCardAvatar,
  Title: CustomerCardTitle,
  Content: CustomerCardContent,
  ValueContent: CustomerCardValueContent,
  ValueText: CustomerCardValueText,
};
