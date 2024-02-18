import { Anchor, Button, Group, Stack, Text } from "@mantine/core";
import { LogoMini } from "@src/shared/icons/logos/LogoMini";
import { TelegramIcon } from "@src/shared/icons/medias/TelegramIcon";
import { FC } from "react";
import { NavLink } from "react-router-dom";

export const Footer: FC = () => {
  return (
    <Group justify="space-between" wrap="nowrap">
      <Stack>
        <LogoMini />
        <Text>
          LeaderStart – агрегатор хакатонов на котором можно найти команду для состязаний, влиться в комьюнити и узнать
          о последних новостях из мира хакатонов.
        </Text>
      </Stack>
      <Stack>
        <Group wrap="nowrap">
          <Anchor p={0} component={NavLink} to={"/hackatons"}>
            Новости
          </Anchor>
          <Anchor p={0} component={NavLink} to={"/market"}>
            Новости
          </Anchor>
          <Anchor p={0} component={NavLink} to={"/messages"}>
            Новости
          </Anchor>
          <Anchor p={0} component={NavLink} to={"/profile"}>
            Новости
          </Anchor>
          <Anchor p={0} component={NavLink} to={"/news"}>
            Новости
          </Anchor>
        </Group>
        <Group wrap="nowrap">
          <Button p={0} component={Anchor} leftSection={<TelegramIcon />}>
            @LeaderStat
          </Button>
          <Text>© 2023 Все права защищены</Text>
        </Group>
      </Stack>
    </Group>
  );
};
