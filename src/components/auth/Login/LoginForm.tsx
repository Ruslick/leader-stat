import { Button, Stack } from "@mantine/core";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PasswordInput, TextInput } from "react-hook-form-mantine";
import { SignInValues } from "../../../shared/types/auth/auth";
import { auth } from "../../../stores/auth/store";

export const LoginForm: FC = () => {
  const { handleSubmit, control } = useForm<SignInValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<SignInValues> = (data) => auth.login(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={"xl"}>
        <Stack gap={"xs"}>
          <TextInput
            name="email"
            control={control}
            rules={{ required: true }}
            label="Адрес электронной почты или номер телефона"
          />
          <PasswordInput name="password" control={control} rules={{ required: true }} label="Пароль" />
        </Stack>
        <Stack gap={"xs"}>
          <Button type="submit" fullWidth size="lg" variant="default">
            Войти
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};
