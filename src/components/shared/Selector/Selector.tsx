import { FC, useState } from "react";
import classNames from "classnames";

import styles from "./Selector.module.scss";
import { ArrowIcon } from "../icons/ArrowIcon";

interface SelectorProps {
  title: string;
  children: React.ReactNode;
}

export const Selector: FC<SelectorProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const arrowClassName = classNames(styles.arrow, { [styles.open]: isOpen });

  return (
    <div role="select" className={styles.selector}>
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        {title}
        <div className={arrowClassName}>
          <ArrowIcon />
        </div>
      </button>
      <div className={`${styles.options} ${isOpen ? styles.open : ""}`}>
        {isOpen && children}
      </div>
    </div>
  );
};
