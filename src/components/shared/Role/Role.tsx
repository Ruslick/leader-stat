import { FC, ReactNode, memo } from "react";

import styles from "./Role.module.scss";
import { Text } from "../Text/Text";

interface RoleProps {
  children: ReactNode;
  icon: ReactNode;
}

export const Role: FC<RoleProps> = memo(({ children, icon }) => {
  return (
    <div className={styles.container}>
      {icon}
      <Text tag="span">{children}</Text>
    </div>
  );
});
