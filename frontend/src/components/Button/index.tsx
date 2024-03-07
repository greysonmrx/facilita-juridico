import React from "react";

import { Spinner } from "../Spinner";

import { variants } from "./variants";

export type IButtonSize = "md" | "lg" | "sm";
export type IButtonVariant = "primary" | "outline";

interface RootProps extends React.ComponentProps<"button"> {
  isLoading?: boolean;
  size?: IButtonSize;
  variant?: IButtonVariant;
}

const ButtonRoot: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  RootProps
> = (
  {
    children,
    className,
    isLoading,
    variant = "primary",
    size = "lg",
    ...props
  },
  ref
) => {
  return (
    <button
      ref={ref}
      className={variants({ variant, size, className })}
      {...props}
      disabled={props.disabled || isLoading}
      aria-disabled={props.disabled || isLoading}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  );
};

const ButtonText: React.FC<React.ComponentProps<"span">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
};

const ForwardedButtonRootRef = React.forwardRef(ButtonRoot);

export const Button = {
  Root: ForwardedButtonRootRef,
  Text: ButtonText,
};
