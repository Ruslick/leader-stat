import { FC } from "react";

import { Hackaton } from "../../components/Hackaton/Hackaton";
import { HackatonAside } from "../../components/Hackaton/HackatonAside";
import { Flex } from "../../shared/ui/_layout/Flex/Flex";

export const HackatonPage: FC = () => {
  return (
    <Flex row justify="space-between">
      <Hackaton />
      <HackatonAside />
    </Flex>
  );
};
