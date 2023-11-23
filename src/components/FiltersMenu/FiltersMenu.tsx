import { animated, useTransition } from "@react-spring/web";
import classNames from "classnames";
import { FC } from "react";

import { useAppSelector } from "../../hooks/store.hooks";
import { selectAllFilters } from "../../store/filters/filtersSelectors";
import { selectIsOpenedFilterMenu } from "../../store/settings/settingsSelectors";
import { DropDownMenu } from "../shared/DropDownMenu/DropDownMenu";
import styles from "./FiltersMenu.module.scss";
import { ShowHiddenField } from "./ShowHiddenField";
import { StandartFilterMenuDropDown } from "./StandartFilterMenuDropDown";

export const FiltersMenu: FC = () => {
  const open = useAppSelector(selectIsOpenedFilterMenu);
  const { cities, formats, roles } = useAppSelector(selectAllFilters);

  const transitions = useTransition(open, {
    from: { opacity: 0, x: -100 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: -100, position: "absolute" },
  });

  return transitions(
    (animatedStyles, item) =>
      item && (
        <animated.div className={classNames(styles.menu)} style={animatedStyles}>
          <StandartFilterMenuDropDown filterSection="cities" text="Города" filters={cities} />
          <StandartFilterMenuDropDown filterSection="formats" text="Формат" filters={formats} />

          {/* TODO */}
          <DropDownMenu text="Дата">
            <input type="date" />
            <input type="date" />
            <input type="date" />
            <input type="date" />
          </DropDownMenu>

          {/* TODO */}
          <DropDownMenu text="Длительность">
            <input type="range" />
          </DropDownMenu>

          <StandartFilterMenuDropDown filterSection="roles" text="Роли" filters={roles} />
          <ShowHiddenField />
        </animated.div>
      ),
  );
};
