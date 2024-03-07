import React from "react";
import * as PrimitiveDialog from "@radix-ui/react-dialog";

import { cn } from "@/utils/cn";

const DialogRoot = PrimitiveDialog.Root;
DialogRoot.displayName = "DialogRoot";

const DialogTrigger: React.FC<PrimitiveDialog.DialogTriggerProps> = ({
  children,
  ...props
}) => {
  return (
    <PrimitiveDialog.Trigger asChild {...props}>
      {children}
    </PrimitiveDialog.Trigger>
  );
};
DialogTrigger.displayName = "DialogTrigger";

const DialogContent: React.FC<PrimitiveDialog.DialogContentProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <PrimitiveDialog.Portal>
      <PrimitiveDialog.Overlay className="fixed inset-0 bg-gray-950/60 animate-fade-in z-20" />
      <PrimitiveDialog.Content
        className={cn(
          "fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          className
        )}
        {...props}
      >
        {children}
      </PrimitiveDialog.Content>
    </PrimitiveDialog.Portal>
  );
};
DialogContent.displayName = "DialogContent";

const DialogCloseButton: React.FC<PrimitiveDialog.DialogCloseProps> = ({
  children,
  ...props
}) => {
  return (
    <PrimitiveDialog.DialogClose {...props} asChild>
      {children}
    </PrimitiveDialog.DialogClose>
  );
};
DialogCloseButton.displayName = "DialogCloseButton";

export const Dialog = {
  Root: DialogRoot,
  Trigger: DialogTrigger,
  Content: DialogContent,
  CloseButton: DialogCloseButton,
};
