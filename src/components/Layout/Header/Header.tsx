import { FC } from "react";
import { Link } from "react-router-dom";

import { Paths } from "../../../shared/constants/paths";
import { UserWidget } from "../../../shared/ui/UserWidget/UserWidget";
import { Logo } from "../../../shared/ui/icons/logos/Logo";
import { Flex } from "../../../shared/ui/_layout/Flex/Flex";
import { HeaderNavbar } from "../../HeaderNavbar/HeaderNavbar";

export const Header: FC = () => {
  return (
    <Flex row justify="space-between">
      <Link to={Paths.Home}>
        <Logo />
      </Link>
      <HeaderNavbar />
      <UserWidget id="Admin" avatarUrl="https://i.pravatar.cc/100" />
    </Flex>
  );
};
