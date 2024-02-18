import { Button, Stack } from "@mantine/core";
import { FiltersNames } from "@src/shared/types/hackaton";
import { hackatonsStore } from "@src/stores/hackatons/store";
import { observer } from "mobx-react-lite";
import { FC } from "react";

interface Props {
  items?: string[];
  filter: FiltersNames;
}

export const ListOfButtons: FC<Props> = observer(({ items, filter }) => {
  if (!items) return null;
  const { toggleFilter, getIsFilterActive } = hackatonsStore.filtersStore;

  const buttons = items.map((item) => (
    <Button
      key={item}
      radius={0}
      variant={getIsFilterActive(filter, item) ? "filled" : "transparent"}
      onClick={() => toggleFilter(filter, item)}
      rightSection={getIsFilterActive(filter, item) ? "X" : null}
    >
      {item}
    </Button>
  ));

  return (
    <Stack gap={0} align="start">
      {buttons}
    </Stack>
  );
});
