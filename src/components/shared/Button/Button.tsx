import classNames from "classnames";
import { FC, MouseEventHandler, ReactNode, memo } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary" | "transparent" | "link" | "outline";
  active?: boolean;
  padding?: "no" | "extraSmall" | "small" | "normal" | "big";
  textSize?: "small" | "normal";
  radius?: "small" | "normal";
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = memo(
  ({
    children,
    onClick,
    variant = "primary",
    padding = "big",
    textSize = "normal",
    radius = "normal",
    active,
    icon,
    type = "button",
    disabled = false,
  }) => {
    const className = classNames(
      styles[variant],
      styles[`${padding}Padding`],
      styles[`${textSize}Text`],
      styles[`${radius}Radius`],
      { [styles.active]: active },
    );

    return (
      <button
        disabled={disabled}
        type={type}
        className={className}
        onClick={onClick}
      >
        {icon}
        {children}
      </button>
    );
  },
);
