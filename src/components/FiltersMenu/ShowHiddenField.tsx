import { FC } from "react";
import { Text } from "../shared/Text/Text";
import { Checkbox } from "../shared/Checkbox/Checkbox";
import styles from "./FiltersMenu.module.scss"

export const ShowHiddenField: FC = () => {
  return (
    <div className={styles.showHiddenField}>
      <Text weight="bold">Показывать скрытое</Text>
      <Checkbox onChange={() => {}} />
    </div>
  );
};
