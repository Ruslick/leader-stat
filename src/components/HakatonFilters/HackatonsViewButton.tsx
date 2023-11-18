import { FC } from "react";
import { Button } from "../shared/Button/Button";
import { StringsViewIcon } from "../shared/icons/actions/StringsViewIcon";
import { useAppDispatch, useAppSelector } from "../../hooks/store.hooks";
import { selectHackatonsView } from "../../store/hackatons/hackatonSelectors";
import { toggleHackatonView } from "../../store/hackatons/hackatonSlice";

export const HackatonsViewButton: FC = () => {
  const view = useAppSelector(selectHackatonsView);

  const dispatch = useAppDispatch();

  return (
    <Button
      padding="small"
      variant="transparent"
      icon={<StringsViewIcon />}
      onClick={() => dispatch(toggleHackatonView())}
    >
      {view === "grid" ? "Списком" : "Сеткой"}
    </Button>
  );
};
