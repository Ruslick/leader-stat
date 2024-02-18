import { Button, Stack } from "@mantine/core";
import { SignUpValues } from "@src/shared/types/auth/auth";
import { auth } from "@src/stores/auth/store";
import { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PasswordInput, TextInput } from "react-hook-form-mantine";

export const RegisterForm: FC = () => {
  const { handleSubmit, control, getValues } = useForm<SignUpValues>({
    defaultValues: {
      email: "",
      first_name: "",
      last_name: "",
      middle_name: "",
      password: "",
      repeat_password: "",
    },
  });

  const onSubmit: SubmitHandler<SignUpValues> = (data) => {
    auth.register(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={"xl"}>
        <Stack gap={"xs"}>
          <TextInput
            autoComplete="new-email"
            placeholder="leader-stat@ya.ru"
            control={control}
            rules={{ required: true }}
            name="email"
            label="Адрес электронной почты или номер телефона"
          />
          <TextInput control={control} placeholder="Иван" rules={{ required: true }} name="first_name" label="Имя" />
          <TextInput
            control={control}
            placeholder="Иванов"
            rules={{ required: true }}
            name="last_name"
            label="Фамилия"
          />
          <TextInput
            control={control}
            placeholder="Иванович"
            rules={{ required: true }}
            name="middle_name"
            label="Отчество"
          />
          <PasswordInput
            control={control}
            rules={{ required: true, minLength: 3 }}
            name="password"
            label="Пароль"
            autoComplete="new-password"
          />
          <PasswordInput
            control={control}
            autoComplete="repeat"
            rules={{ required: true, validate: (value) => value === getValues().password }}
            name="repeat_password"
            label="Повторите пароль"
          />
        </Stack>
        <Stack gap={"xs"}>
          <Button type="submit" fullWidth size="lg" variant="default">
            Зарегистрироваться
          </Button>
        </Stack>
      </Stack>
    </form>
  );
};
