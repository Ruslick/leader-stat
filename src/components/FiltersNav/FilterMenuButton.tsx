import { FC } from "react";

import { useAppDispatch, useAppSelector } from "../../shared/hooks/store.hooks";
import { selectIsOpenedFilterMenu } from "../../store/settings/settingsSelectors";
import { toggleFilterMenu } from "../../store/settings/settingsSlice";
import { Button } from "../../shared/ui/Button/Button";
import { BurgerFilterIcon } from "../../shared/ui/icons/actions/BurgerFilterIcon";

export const FilterMenuButton: FC = () => {
  const dispatch = useAppDispatch();
  const active = useAppSelector(selectIsOpenedFilterMenu);

  return (
    <Button
      variant="secondary"
      textSize="small"
      icon={<BurgerFilterIcon />}
      onClick={() => dispatch(toggleFilterMenu())}
      active={active}
    >
      Фильтр
    </Button>
  );
};
