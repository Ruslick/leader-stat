import { Button, Group, Stack, Text, Title } from "@mantine/core";
import { FC } from "react";
import { Link } from "react-router-dom";
import { colors } from "../../../shared/constants/colors";
import { SSO } from "../SSO";
import { RegisterForm } from "./RegisterForm";

export const Register: FC = () => {
  return (
    <Stack gap={"xl"}>
      <Stack gap={"xs"}>
        <Title order={2} c={colors.head}>
          Создать аккаунт
        </Title>
        <Group gap={"xs"}>
          <Text>У вас уже есть аккаунт?</Text>
          <Button size="compact-md" component={Link} to={"/login"} p={0}>
            Войти.
          </Button>
        </Group>
      </Stack>
      <RegisterForm />
      <Text ta={"center"}>Или</Text>
      <SSO />
    </Stack>
  );
};
