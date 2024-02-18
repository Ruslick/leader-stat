import { SimpleGrid } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { FC, useEffect } from "react";
import { Card } from "../../components/Card";
import { layoutStore } from "../../stores/layout";
import { hackatonsStore } from "../../stores/hackatons/store";

export const HackatonsPage: FC = observer(() => {
  const { hackatons } = hackatonsStore;


  useEffect(() => {
    hackatonsStore.hackatonsRequest();
  }, [])

  if (!hackatons) return null;

  return (
    <SimpleGrid cols={layoutStore.columns}>
      {hackatons.map((hackaton) => (
        <Card key={hackaton.id} {...hackaton} />
      ))}
    </SimpleGrid>
  );
});
