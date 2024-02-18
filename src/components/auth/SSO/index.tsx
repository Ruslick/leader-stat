import { ActionIcon, Group } from "@mantine/core";
import { FC } from "react";
import { MailIcon } from "../../../shared/icons/medias/MailIcon";

export const SSO: FC = () => {
  return (
    <Group gap={"xs"} justify="center">
      <ActionIcon variant="default" size={"lg"}>
        <MailIcon />
      </ActionIcon>
      <ActionIcon variant="default" size={"lg"}>
        <MailIcon />
      </ActionIcon>
      <ActionIcon variant="default" size={"lg"}>
        <MailIcon />
      </ActionIcon>
      <ActionIcon variant="default" size={"lg"}>
        <MailIcon />
      </ActionIcon>
      <ActionIcon variant="default" size={"lg"}>
        <MailIcon />
      </ActionIcon>
    </Group>
  );
};
