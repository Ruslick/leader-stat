import { FC } from "react";
import { useForm } from "react-hook-form";

import { AuthForm } from "../../shared/Auth/AuthForm/AuthForm";
import { AuthFormAction } from "../../shared/Auth/AuthFormAction/AuthFormAction";
import { Paths } from "../../../constants/paths";
import { AlternativeOptions } from "./AlternativeOptions";
import { Button } from "../../shared/Button/Button";
import { AuthField } from "../../shared/Auth/AuthField/AuthField";

type FormValues = {
  email: string;
  password: string;
};

export const SignInForm: FC = () => {
  const { handleSubmit, register } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <AuthForm
      onSubmit={onSubmit}
      title="Войти"
      actions={
        <>
          <AuthFormAction actionText="Создать аккаунт." to={Paths.Registration}>
            Вы новый пользователь?
          </AuthFormAction>
        </>
      }
      alternativeOptions={<AlternativeOptions />}
    >
      <AuthField autoComplete="email" type="email" placeholder="Адрес электронной почты" {...register("email")} />
      <AuthField autoComplete="password" type="password" placeholder="Пароль" {...register("password")} />
      <Button type="submit" variant="secondary" padding="small">
        Продолжить
      </Button>
    </AuthForm>
  );
};
