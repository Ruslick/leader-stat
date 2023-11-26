import { FC } from "react";

import { Text } from "../../../shared/ui/Text/Text";
import { LogoMini } from "../../../shared/ui/icons/logos/LogoMini";
import { FooterLinks } from "./FooterLinks";
import { FooterSecurity } from "./FooterSecurity";
import { Flex } from "../../../shared/ui/_layout/Flex/Flex";

export const Footer: FC = () => {
  return (
    <Flex>
      <LogoMini />
      <Flex row justify="space-between">
        <Text tag="p">
          LeaderStart – агрегатор хакатонов на котором можно найти команду для состязаний,
          <br /> влиться в комьюнити и узнать о последних новостях из мира хакатонов.
        </Text>
        <Flex>
          <FooterLinks />
          <FooterSecurity />
        </Flex>
      </Flex>
    </Flex>
  );
};
