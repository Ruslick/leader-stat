import { FC } from "react";
import { Button } from "../../shared/ui/Button/Button";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/store.hooks";
import { selectHackatonsView } from "../../store/hackatons/hackatonSelectors";
import { toggleHackatonView } from "../../store/hackatons/hackatonSlice";
import { RowViewIcon } from "../../shared/ui/icons/actions/RowViewIcon";
import { ColumnsViewIcon } from "../../shared/ui/icons/actions/ColumnsViewIcon";

export const ViewButton: FC = () => {
  const view = useAppSelector(selectHackatonsView);

  const dispatch = useAppDispatch();

  return (
    <Button
      textSize="small"
      variant="secondary"
      icon={view === "grid" ? <RowViewIcon /> : <ColumnsViewIcon />}
      onClick={() => dispatch(toggleHackatonView())}
    >
      {view === "grid" ? "Строками" : "Колонками"}
    </Button>
  );
};
