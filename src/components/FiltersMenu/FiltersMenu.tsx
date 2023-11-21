import { FC } from "react";
import classNames from "classnames";

import styles from "./FiltersMenu.module.scss";
import { ShowHiddenField } from "./ShowHiddenField";
import { useAppDispatch, useAppSelector } from "../../hooks/store.hooks";
import { selectIsOpenedFilterMenu } from "../../store/settings/settingsSelectors";
import { DropDownMenu } from "../shared/DropDownMenu/DropDownMenu";
import { selectCitiesFilters } from "../../store/filters/filtersSelectors";
import { toggleCity } from "../../store/filters/filtersSlice";
import { Button } from "../shared/Button/Button";

export const FiltersMenu: FC = () => {
  const open = useAppSelector(selectIsOpenedFilterMenu);
  const cities = useAppSelector(selectCitiesFilters);
  const dispatch = useAppDispatch();

  return (
    <div className={classNames(styles.menu, { [styles.open]: open })}>
      <DropDownMenu text="Город">
        {cities.map(([city, isSelected]) => (
          <Button
            variant="filter"
            padding="small"
            textSize="small"
            radius="small"
            key={city}
            active={isSelected}
            onClick={() => {
              dispatch(toggleCity(city));
            }}
          >
            {city}
          </Button>
        ))}
      </DropDownMenu>

      <ShowHiddenField />
    </div>
  );
};
