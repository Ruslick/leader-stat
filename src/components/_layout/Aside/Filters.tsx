import { Accordion, Input, Stack } from "@mantine/core";
import { hackatonsStore } from "@src/stores/hackatons/store";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { ListOfButtons } from "./ListOfButtons";

export const Filters: FC = observer(() => {
  const { filtersStore } = hackatonsStore;
  return (
    <Stack>
      <Accordion>
        <Accordion.Item key={"title"} value={"title"}>
          <Accordion.Control>Название</Accordion.Control>
          <Accordion.Panel>
            <Input
              placeholder="Поиск по названию"
              value={filtersStore.filters.get("title") || ""}
              onChange={(e) => filtersStore.setFilter("title", e.target.value)}
            />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item key={"cities"} value={"cities"}>
          <Accordion.Control>Города</Accordion.Control>
          <Accordion.Panel>
            <ListOfButtons filter="location" items={filtersStore.locations} />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item key={"isOnline"} value={"isOnline"}>
          <Accordion.Control>Формат</Accordion.Control>
          <Accordion.Panel>
            <ListOfButtons filter="is_online" items={["True", "False"]} />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Stack>
  );
});
