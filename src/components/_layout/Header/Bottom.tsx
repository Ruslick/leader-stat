import { Button, Group } from "@mantine/core";
import { StarIcon } from "@src/shared/icons/StarIcon";
import { BurgerFilterIcon } from "@src/shared/icons/actions/BurgerFilterIcon";
import { ColumnsViewIcon } from "@src/shared/icons/actions/ColumnsViewIcon";
import { DoneIcon } from "@src/shared/icons/actions/DoneIcon";
import { HeartIcon } from "@src/shared/icons/actions/HeartIcon";
import { RowViewIcon } from "@src/shared/icons/actions/RowViewIcon";
import { layoutStore } from "@src/stores/layout";
import { notify } from "@src/stores/notifications";
import { observer } from "mobx-react-lite";
import { FC } from "react";

export const Bottom: FC = observer(() => {
  const showWorkInProgress = () => {
    notify.working();
  };
  return (
    <Group justify="space-between">
      <Group>
        <Button
          variant="default"
          onClick={() => layoutStore.toggleSidebar()}
          data-active={layoutStore.isSidebarOpen}
          leftSection={<BurgerFilterIcon />}
        >
          Фильтр
        </Button>
        <Button variant="default" leftSection={<StarIcon />} onClick={showWorkInProgress}>
          Хакатоны для меня
        </Button>
        <Button variant="default" leftSection={<DoneIcon />} onClick={showWorkInProgress}>
          Я участвую
        </Button>
        <Button variant="default" leftSection={<HeartIcon />} onClick={showWorkInProgress}>
          Избранное
        </Button>
      </Group>
      <Button
        variant="default"
        onClick={() => layoutStore.toggleView()}
        leftSection={layoutStore.view === "rows" ? <RowViewIcon /> : <ColumnsViewIcon />}
      >
        {layoutStore.view === "rows" ? "Строками" : "Колонками"}
      </Button>
    </Group>
  );
});
