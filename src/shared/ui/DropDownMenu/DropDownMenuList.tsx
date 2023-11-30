import { FC, ReactNode, memo } from "react";
import { Flex } from "../_layout/Flex/Flex";

interface DropDownMenuListProps {
  children: ReactNode;
}

export const DropDownMenuList: FC<DropDownMenuListProps> = memo(({ children }) => {
  return <Flex gap={0} align="start">{children}</Flex>;
});
