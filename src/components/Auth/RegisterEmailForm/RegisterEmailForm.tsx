import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";

import { selectAuth } from "../../../store/auth/authSelectors";
import { registerUserThunk } from "../../../store/auth/registerUserThunk";

import { AlternativeLogins } from "../AlternativeLogins/AlternativeLogins";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/store.hooks";
import { AuthForm } from "../../../shared/ui/Auth/AuthForm/AuthForm";
import { Flex } from "../../../shared/ui/_layout/Flex/Flex";
import { Text } from "../../../shared/ui/Text/Text";
import { AuthFormAction } from "../../../shared/ui/Auth/AuthFormAction/AuthFormAction";
import { AuthField } from "../../../shared/ui/Auth/AuthField/AuthField";
import { Paths } from "../../../shared/constants/paths";
import { Button } from "../../../shared/ui/Button/Button";
import { AuthDivider } from "../../../shared/ui/Auth/AuthDivider/AuthDivider";
import regex from "../../../shared/constants/regex";
import { SignUpValues } from "../../../shared/types/auth/auth";

export const RegisterEmailForm: FC = () => {
  const { loading, error } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { isValid },
    setError,
    setFocus,
    getValues,
  } = useForm<SignUpValues>();

  const onSubmit = handleSubmit((data) => {
    dispatch(registerUserThunk(data));
  });

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  useEffect(() => {
    if (error) {
      setError("root", { type: "custom", message: error.message });
    }
  }, [error, setError]);

  return (
    <AuthForm onSubmit={onSubmit}>
      <Flex>
        <Text tag="h1">Создать аккаунт</Text>
        <AuthFormAction actionText="Создать аккаунт." to={Paths.Login}>
          У вас уже есть аккаунт?
        </AuthFormAction>
      </Flex>
      <Flex gap={5}>
        <AuthField
          label="Адрес электронной почты"
          autoComplete="email"
          type="email"
          placeholder="example@ex.com"
          disabled={loading}
          {...register("email", { required: true, pattern: regex.email })}
        />
        <AuthField
          autoComplete="phone"
          type="tel"
          inputMode="numeric"
          label="Телефон"
          disabled={loading}
          mask="+7 (999) 999-99-99"
          placeholder="+7 (___) ___-__-__"
          {...register("phone", {
            required: false,
          })}
        />
        <AuthField
          autoComplete="username"
          type="text"
          label="Имя пользователя"
          placeholder="Разрушитель планет"
          disabled={loading}
          {...register("username", { required: true, minLength: 3, maxLength: 20 })}
        />
        <AuthField
          autoComplete="password"
          type="password"
          label="Пароль"
          disabled={loading}
          {...register("password", { required: true })}
        />
        <AuthField
          autoComplete="password"
          type="password"
          label="Повторите пароль"
          disabled={loading}
          {...register("repeat_password")}
        />

        <Flex row justify="center">
          <Button
            type="submit"
            variant="secondary"
            padding="big"
            disabled={loading || !isValid || getValues("password") !== getValues("repeat_password")}
          >
            Продолжить
          </Button>
        </Flex>
      </Flex>
      <AuthDivider />
      <AlternativeLogins />
    </AuthForm>
  );
};
