import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";

import { AuthForm } from "../../shared/Auth/AuthForm/AuthForm";
import { AuthFormAction } from "../../shared/Auth/AuthFormAction/AuthFormAction";
import { Paths } from "../../../constants/paths";
import { AlternativeOptions } from "./AlternativeOptions";
import { Button } from "../../shared/Button/Button";
import { AuthField } from "../../shared/Auth/AuthField/AuthField";
import { SignInValues } from "../../../types/auth";
import { useAppDispatch, useAppSelector } from "../../../hooks/store.hooks";
import { loginUser } from "../../../store/auth/loginUser";
import { selectAuth } from "../../../store/auth/authSelectors";

export const LoginForm: FC = () => {
  const { loading, error } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
    setError,
    setFocus,
  } = useForm<SignInValues>();

  const onSubmit = handleSubmit((data) => {
    dispatch(loginUser(data));
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
      error={errors.root?.message}
    >
      <AuthField
        autoComplete="email"
        type="text"
        placeholder="Адрес электронной почты"
        disabled={loading}
        {...register("email", { required: true, pattern: /.+@.+\..+/ })}
      />
      <AuthField
        autoComplete="password"
        type="password"
        placeholder="Пароль"
        disabled={loading}
        {...register("password", {
          required: true,
          minLength: 5,
          maxLength: 20,
        })}
      />
      <Button
        type="submit"
        variant="secondary"
        padding="big"
        disabled={loading || !isValid}
      >
        Продолжить
      </Button>
    </AuthForm>
  );
};
