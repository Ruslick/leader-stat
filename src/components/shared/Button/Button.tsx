import { FC, MouseEventHandler, ReactNode, memo } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary" | "transparent" | "link" | "outline";
  active?: boolean;
  padding?: "no" | "extraSmall" | "small" | "normal" | "big";
  textSize?: "small" | "normal";
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
}

export const Button: FC<ButtonProps> = memo(
  ({
    children,
    onClick,
    variant = "primary",
    padding = "big",
    textSize = "normal",
    active,
    icon,
    type = "button",
  }) => {
    const className = classNames(
      styles[variant],
      styles[`${padding}Padding`],
      styles[`${textSize}Text`],
      { [styles.active]: active },
    );

    return (
      <button type={type} className={className} onClick={onClick}>
        {icon}
        {children}
      </button>
    );
  },
);
