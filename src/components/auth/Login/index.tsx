import { Button, Group, Stack, Text, Title } from "@mantine/core";
import { FC } from "react";
import { Link } from "react-router-dom";
import { colors } from "../../../shared/constants/colors";
import { SSO } from "../SSO";
import { LoginForm } from "./LoginForm";

export const Login: FC = () => {
  return (
    <Stack gap={"xl"}>
      <Stack gap={"xs"}>
        <Title order={2} c={colors.head}>
          Войти
        </Title>
        <Group gap={"xs"}>
          <Text>Вы новый пользователь?</Text>
          <Button size="compact-md" component={Link} to={"/registration"} p={0}>
            Создать аккаунт.
          </Button>
        </Group>
      </Stack>
      <LoginForm />
      <Stack>
        <Text ta={"center"}>Или</Text>
      </Stack>
      <SSO />
    </Stack>
  );
};
