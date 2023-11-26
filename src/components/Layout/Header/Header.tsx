import { FC } from "react";

import { UserWidget } from "../../../shared/ui/UserWidget/UserWidget";
import { Logo } from "../../../shared/ui/icons/logos/Logo";
import { Flex } from "../../../shared/ui/_layout/Flex/Flex";
import { HeaderNavbar } from "../../HeaderNavbar/HeaderNavbar";

export const Header: FC = () => {
  return (
    <Flex row justify="space-between">
      <Logo />
      <HeaderNavbar />
      <UserWidget id="Admin" avatarUrl="https://i.pravatar.cc/100" />
    </Flex>
  );
};
