import { FC, ReactNode, memo } from "react";
import styles from "./DropDownMenu.module.scss";

interface DropDownMenuListProps {
  children: ReactNode;
}

export const DropDownMenuList: FC<DropDownMenuListProps> = memo(({ children }) => {
  return <ul className={styles.items}>{children}</ul>;
});
