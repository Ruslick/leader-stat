import classNames from "classnames";
import { FC, ReactNode, memo } from "react";

import { Paths } from "../../constants/paths";
import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  onClick?: VoidFunction;
  variant?: "primary" | "inverted" | "secondary" | "transparent" | "link" | "outline" | "filter";
  padding?: "no" | "small" | "normal" | "big";
  textSize?: "small" | "normal";
  radius?: "no" | "small" | "normal";
  type?: "button" | "submit" | "reset";
  icon?: ReactNode;
  w?: number | string;
  to?: Paths;
  disabled?: boolean;
  active?: boolean;
}

export const Button: FC<ButtonProps> = memo(
  ({
    children,
    onClick,
    variant = "primary",
    padding = "normal",
    textSize = "normal",
    radius = "normal",
    active,
    icon,
    type = "button",
    disabled,
    w = "auto",
  }) => {
    const className = classNames(
      styles[variant],
      styles[`${padding}Padding`],
      styles[`${textSize}Text`],
      styles[`${radius}Radius`],
      { [styles.active]: active },
      { [styles.withIcon]: icon },
    );

    return (
      <button
        disabled={disabled}
        type={type}
        className={className}
        onClick={onClick}
        style={{ width: typeof w === "number" ? `var(--s${w})` : w }}
      >
        {icon}
        {children}
      </button>
    );
  },
);
