import { FC } from "react";
import { Text } from "../../shared/ui/Text/Text";
import { Checkbox } from "../../shared/ui/Checkbox/Checkbox";
import { Flex } from "../../shared/ui/_layout/Flex/Flex";

export const ShowHiddenField: FC = () => {
  return (
    <Flex row justify="space-between" align="center">
      <Text weight="bold">Показывать скрытое</Text>
      <Checkbox onChange={() => {}} />
    </Flex>
  );
};
