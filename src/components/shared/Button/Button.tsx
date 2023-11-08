import { FC, MouseEventHandler, ReactNode } from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  variant?: "primary" | "secondary" | "transparent";
  small?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  variant = "primary",
  small = false,
}) => {
  return (
    <button className={`${styles[variant]} ${small ? styles.small : styles.big}`} onClick={onClick}>
      {children}
    </button>
  );
};
