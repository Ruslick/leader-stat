import { FC } from "react";
import { Button } from "../shared/Button/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/store.hooks";
import { BurgerFilterIcon } from "../shared/icons/actions/BurgerFilterIcon";
import { toggleFilterMenu } from "../../store/settings/settingsSlice";
import { selectIsOpenedFilterMenu } from "../../store/settings/settingsSelectors";

export const HackatonFilterMenuButton: FC = () => {
  const dispatch = useAppDispatch();
  const active = useAppSelector(selectIsOpenedFilterMenu);

  return (
    <Button
      variant="secondary"
      icon={<BurgerFilterIcon />}
      textSize="small"
      onClick={() => dispatch(toggleFilterMenu())}
      active={active}
    >
      Фильтр
    </Button>
  );
};
