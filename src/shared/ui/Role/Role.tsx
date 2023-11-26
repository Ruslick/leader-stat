import { FC, ReactNode, memo } from "react";

import { Text } from "../Text/Text";
import { Flex } from "../_layout/Flex/Flex";

interface RoleProps {
  children: ReactNode;
  icon: ReactNode;
}

export const Role: FC<RoleProps> = memo(({ children, icon }) => {
  return (
    <Flex row gap={3} align="center">
      {icon}
      <Text tag="span">{children}</Text>
    </Flex>
  );
});
