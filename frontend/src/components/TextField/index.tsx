import React from "react";

import { cn } from "@/utils/cn";

const TextFieldRoot: React.FC<React.ComponentProps<"div">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col gap-1.5 flex-1", className)} {...props}>
      {children}
    </div>
  );
};
TextFieldRoot.displayName = "TextFieldRoot";

const TextFieldLabel: React.FC<React.ComponentProps<"label">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <label
      className={cn(
        "flex items-center text-sm font-semibold text-blue-850 text-left",
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
};
TextFieldLabel.displayName = "TextFieldLabel";

const TextFieldRequiredIndicator: React.FC<React.ComponentProps<"span">> = ({
  className,
  ...props
}) => {
  return (
    <span className={cn("ml-px text-red-500", className)} {...props}>
      *
    </span>
  );
};
TextFieldRequiredIndicator.displayName = "TextFieldRequiredIndicator";

const TextFieldContent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  React.ComponentProps<"input">
> = ({ className, ...props }, ref) => {
  return (
    <div className="relative">
      <input
        ref={ref}
        className={cn(
          "w-full px-3 py-2.5 max-h-12 text-sm border border-gray-150 bg-transparent transition-all duration-300 ease-out rounded focus-visible:border-blue-500 focus-visible:shadow-[0_0_0_1px] focus-visible:shadow-blue-500 focus:border-blue-500 focus:shadow-[0_0_0_1px] focus:shadow-blue-500 focus-within:border-blue-500 focus-within:shadow-[0_0_0_1px] focus-within:shadow-blue-500 outline-none hover:border-blue-300 data-[error=true]:border-red-500 data-[error=true]:shadow-red-500 disabled:border-gray-200 disabled:bg-gray-50 peer",
          className
        )}
        {...props}
      />
    </div>
  );
};
TextFieldContent.displayName = "TextFieldContent";

const TextFieldErrorMessage: React.FC<React.ComponentProps<"span">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={cn("font-medium text-sm text-red-500 text-left", className)}
      {...props}
    >
      {children}
    </span>
  );
};
TextFieldErrorMessage.displayName = "TextFieldErrorMessage";

const ForwardedTextFieldContentRef = React.forwardRef(TextFieldContent);

export const TextField = {
  Root: TextFieldRoot,
  Label: TextFieldLabel,
  RequiredIndicator: TextFieldRequiredIndicator,
  Content: ForwardedTextFieldContentRef,
  ErrorMessage: TextFieldErrorMessage,
};
