import { FC, MouseEventHandler, ReactNode, memo } from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

interface IconButtonProps {
  children: ReactNode;
  variant?: "primary" | "media";
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const IconButton: FC<IconButtonProps> = memo(
  ({ children, variant = "primary", onClick }) => {
    const className = classNames({
      [styles.primaryIconButton]: variant === "primary",
      [styles.mediaIconButton]: variant === "media",
    });
    return (
      <button onClick={onClick} className={className}>
        {children}
      </button>
    );
  },
);
