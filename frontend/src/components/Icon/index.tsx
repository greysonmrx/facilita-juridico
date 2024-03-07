import React from "react";
import * as PhosphorIcons from "@phosphor-icons/react";

export type IconName =
  | "plus-bold"
  | "funnel-bold"
  | "path-bold"
  | "at-bold"
  | "phone-bold"
  | "pencil-bold"
  | "trash-bold"
  | "x-bold"
  | "warning-octagon-bold"
  | "map-pin-fill";

const iconList: Record<IconName, React.FC<Pick<IconProps, "size">>> = {
  "plus-bold": (props) => <PhosphorIcons.Plus weight="bold" {...props} />,
  "funnel-bold": (props) => <PhosphorIcons.Funnel weight="bold" {...props} />,
  "path-bold": (props) => <PhosphorIcons.Path weight="bold" {...props} />,
  "at-bold": (props) => <PhosphorIcons.At weight="bold" {...props} />,
  "pencil-bold": (props) => <PhosphorIcons.Pencil weight="bold" {...props} />,
  "trash-bold": (props) => <PhosphorIcons.Trash weight="bold" {...props} />,
  "phone-bold": (props) => <PhosphorIcons.Phone weight="bold" {...props} />,
  "x-bold": (props) => <PhosphorIcons.X weight="bold" {...props} />,
  "warning-octagon-bold": (props) => (
    <PhosphorIcons.WarningOctagon weight="bold" {...props} />
  ),
  "map-pin-fill": (props) => <PhosphorIcons.MapPin weight="fill" {...props} />,
};

export interface IconProps extends PhosphorIcons.IconProps {
  name: IconName;
  size: number;
}

const Icon: React.FC<IconProps> = ({ name, size, ...props }) =>
  iconList[name]({ size, ...props });

export { Icon };
