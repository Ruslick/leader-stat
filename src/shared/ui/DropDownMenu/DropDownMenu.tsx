import { FC, ReactNode, useId, useState } from "react";
import { ArrowIcon } from "../icons/ArrowIcon";
import styles from "./DropDownMenu.module.scss";
import { DropDownMenuList } from "./DropDownMenuList";
import { Text } from "../Text/Text";

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
        <Text weight="bold" colorInherit>{text}</Text>
        <div className={styles.arrow}>
          <ArrowIcon />
        </div>
      </label>
      {isOpen && <DropDownMenuList>{children}</DropDownMenuList>}
    </div>
  );
};
