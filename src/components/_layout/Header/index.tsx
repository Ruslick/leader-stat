import { FC } from "react";
import { Stack } from "@mantine/core";
import { Top } from "./Top";
import { Bottom } from "./Bottom";

export const Header: FC = () => {
  return (
    <Stack h={"100%"} justify="center">
      <Top />
      <Bottom />
    </Stack>
  );
};
