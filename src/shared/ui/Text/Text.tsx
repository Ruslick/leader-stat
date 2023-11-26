import { FC, ReactNode, createElement, memo } from "react";
import classNames from "classnames";

import styles from "./Text.module.scss";

interface TextProps {
  tag?: "p" | "span" | "h1" | "h2";
  children: ReactNode;
  weight?: "regular" | "bold";
  active?: boolean;
  id?: string;
  colorInherit?: boolean;
}

export const Text: FC<TextProps> = memo(
  ({ tag = "p", children, weight, active, id, colorInherit = false }) => {
    const className = classNames(styles.text, styles[tag], weight ? styles[weight] : "", {
      [styles.active]: active,
      [styles.colorInherit]: colorInherit,
    });

    return createElement(tag, { className, id }, children);
  },
);
