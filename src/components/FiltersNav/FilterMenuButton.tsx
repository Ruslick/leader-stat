import { FC } from "react";
import { animated, useSpring } from "@react-spring/web";

import { Button } from "../shared/Button/Button";
import { useAppDispatch, useAppSelector } from "../../hooks/store.hooks";
import { BurgerFilterIcon } from "../shared/icons/actions/BurgerFilterIcon";
import { toggleFilterMenu } from "../../store/settings/settingsSlice";
import { selectIsOpenedFilterMenu } from "../../store/settings/settingsSelectors";

export const FilterMenuButton: FC = () => {
  const dispatch = useAppDispatch();
  const active = useAppSelector(selectIsOpenedFilterMenu);

  const props = useSpring({
    from: { paddingRight: 0 },
    to: { paddingRight: active ? 110 : 0 },
  });

  return (
    <animated.li style={props}>
      <Button
        variant="secondary"
        textSize="small"
        icon={<BurgerFilterIcon />}
        onClick={() => dispatch(toggleFilterMenu())}
        active={active}
      >
        Фильтр
      </Button>
    </animated.li>
  );
};
