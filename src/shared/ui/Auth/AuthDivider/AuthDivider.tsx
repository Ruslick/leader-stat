import { FC } from "react";
import { Flex } from "../../_layout/Flex/Flex";
import { Text } from "../../Text/Text";

import styles from "./AuthDivider.module.scss";

export const AuthDivider: FC = () => {
  return (
    <Flex gap={5} row align="center">
      <div className={styles.divider} />
      <Text tag="p">Или</Text>
      <div className={styles.divider} />
    </Flex>
  );
};
