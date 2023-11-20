import { FC } from "react";
import classNames from "classnames";

import styles from "./FiltersMenu.module.scss";
import { ShowHiddenField } from "./ShowHiddenField";
import { useAppSelector } from "../../hooks/store.hooks";
import { selectIsOpenedFilterMenu } from "../../store/settings/settingsSelectors";
import { Selector } from "../shared/Selector/Selector";
import { Button } from "../shared/Button/Button";

export const FiltersMenu: FC = () => {
  const open = useAppSelector(selectIsOpenedFilterMenu);

  return (
    <div className={classNames(styles.menu, { [styles.open]: open })}>
      <Selector title="Город"  >
        <Button variant="link" padding="small" textSize="small">Волгоград</Button>
        <Button variant="link" padding="small" textSize="small">Волгоград</Button>
        <Button variant="link" padding="small" textSize="small">Волгоград</Button>
      </Selector>

      <ShowHiddenField />
    </div>
  );
};
