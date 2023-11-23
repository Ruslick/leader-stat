import { FC, ReactNode, useId, useState } from "react";
import { ArrowIcon } from "../icons/ArrowIcon";
import styles from "./DropDownMenu.module.scss";
import { DropDownMenuList } from "./DropDownMenuList";

interface DropDownMenuProps {
  text: string;
  children: ReactNode;
}

export const DropDownMenu: FC<DropDownMenuProps> = ({ text, children }) => {
  const id = useId();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.menu}>
      <input
        type="checkbox"
        checked={isOpen}
        id={id}
        className={styles.input}
        onChange={() => setIsOpen(!isOpen)}
      />
      <label className={styles.face} htmlFor={id}>
        <div className={styles.text}>{text}</div>
        <div className={styles.arrow}>
          <ArrowIcon />
        </div>
      </label>
      <DropDownMenuList isOpen={isOpen}>{children}</DropDownMenuList>
    </div>
  );
};
