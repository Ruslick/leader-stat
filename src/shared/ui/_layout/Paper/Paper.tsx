import { FC, ReactNode } from "react";
import classNames from "classnames";

import styles from "./Paper.module.scss";

interface PaperProps {
  h?: number | string;
  w?: number | string;
  p?: number;
  r?: number;
  variant?: "card" | "transparent" | "primary";
  children: ReactNode;
  active?: boolean;
  absolute?: boolean;
}

export const Paper: FC<PaperProps> = ({
  h = "auto",
  w = "auto",
  variant = "transparent",
  r = 6,
  p = 5,

  children,
  active,
  absolute,
}) => {
  const className = classNames(styles.paper, styles[variant], {
    [styles.active]: active,
    [styles.absolute]: absolute,
  });
  const style = {
    height: typeof h === "number" ? `var(--s${h})` : h,
    width: typeof w === "number" ? `var(--s${w})` : w,
    borderRadius: `var(--s${r})`,
    padding: `var(--s${p})`,
  };
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};
