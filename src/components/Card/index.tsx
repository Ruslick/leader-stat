import { ActionIcon, Button, Group, Paper, Stack, Text, Title } from "@mantine/core";
import { FC } from "react";
import { DoneIcon } from "../../shared/icons/actions/DoneIcon";
import { EyeIcon } from "../../shared/icons/actions/EyeIcon";
import { HeartIcon } from "../../shared/icons/actions/HeartIcon";
import { HackatonDTO } from "../../shared/types/hackaton";
import { notify } from "../../stores/notifications";

export const Card: FC<HackatonDTO> = ({ title, description, descriptionShort }) => {
  const showWorkInProgress = () => {
    notify.working();
  };
  return (
    <Paper>
      <Stack>
        <Title order={2}>{title}</Title>
        <Title order={3}>{descriptionShort}</Title>
        <Text>{description}</Text>
        <Group>
          <Text>role 1</Text>
          <Text>role 1</Text>
          <Text>role 1</Text>
        </Group>
        <Group justify="space-between">
          <Button onClick={showWorkInProgress} variant="light" size="md">
            Участвовать
          </Button>
          <Group>
            <ActionIcon onClick={showWorkInProgress}>
              <EyeIcon />
            </ActionIcon>
            <ActionIcon onClick={showWorkInProgress}>
              <HeartIcon />
            </ActionIcon>
            <ActionIcon onClick={showWorkInProgress}>
              <DoneIcon />
            </ActionIcon>
          </Group>
        </Group>
      </Stack>
    </Paper>
  );
};
