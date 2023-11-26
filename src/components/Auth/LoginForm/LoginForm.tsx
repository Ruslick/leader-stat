import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";

import { AuthField } from "../../../shared/ui/Auth/AuthField/AuthField";
import { AuthForm } from "../../../shared/ui/Auth/AuthForm/AuthForm";
import { AuthFormAction } from "../../../shared/ui/Auth/AuthFormAction/AuthFormAction";
import { Button } from "../../../shared/ui/Button/Button";
// import { loginUser } from "../../../store/auth/loginUser";
import { Paths } from "../../../shared/constants/paths";
import { SignInValues } from "../../../shared/types/auth/auth";
import { AuthDivider } from "../../../shared/ui/Auth/AuthDivider/AuthDivider";
import { Text } from "../../../shared/ui/Text/Text";
import { Flex } from "../../../shared/ui/_layout/Flex/Flex";
import { AlternativeLogins } from "../AlternativeLogins/AlternativeLogins";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/store.hooks";
import { loginUserThunk } from "../../../store/auth/loginUser";
import regex from "../../../shared/constants/regex";

export const LoginForm: FC = () => {
  const { loading } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    register,
    formState: { isValid },
    setFocus,
  } = useForm<SignInValues>();

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  return (
    <AuthForm onSubmit={handleSubmit((data) => dispatch(loginUserThunk(data)))}>
      <Flex>
        <Text tag="h1">Войти</Text>
        <AuthFormAction actionText="Создать аккаунт." to={Paths.Registration}>
          Вы новый пользователь?
        </AuthFormAction>
      </Flex>
      <AuthField
        autoComplete="email"
        type="text"
        label="Адрес электронной почты"
        disabled={loading}
        {...register("email", { required: true, pattern: regex.email })}
      />
      <AuthField
        autoComplete="password"
        type="password"
        label="Пароль"
        disabled={loading}
        {...register("password", {
          required: true,
        })}
      />
      <Flex row justify="center">
        <Button type="submit" variant="secondary" padding="big" disabled={loading || !isValid}>
          Продолжить
        </Button>
      </Flex>

      <AuthDivider />
      <AlternativeLogins />
    </AuthForm>
  );
};
