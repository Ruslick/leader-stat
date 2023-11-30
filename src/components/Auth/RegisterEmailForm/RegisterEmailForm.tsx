import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";

import { selectAuth } from "../../../store/auth/authSelectors";
import { registerUserThunk } from "../../../store/auth/registerUserThunk";

import { Paths } from "../../../shared/constants/paths";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks/store.hooks";
import { SignUpValues } from "../../../shared/types/auth/auth";
import { AuthDivider } from "../../../shared/ui/Auth/AuthDivider/AuthDivider";
import { AuthField } from "../../../shared/ui/Auth/AuthField/AuthField";
import { AuthForm } from "../../../shared/ui/Auth/AuthForm/AuthForm";
import { AuthFormAction } from "../../../shared/ui/Auth/AuthFormAction/AuthFormAction";
import { Button } from "../../../shared/ui/Button/Button";
import { Text } from "../../../shared/ui/Text/Text";
import { Flex } from "../../../shared/ui/_layout/Flex/Flex";
import { AlternativeLogins } from "../AlternativeLogins/AlternativeLogins";
import { registerConfig } from "./registerConfig";

export const RegisterEmailForm: FC = () => {
  const { loading, error } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
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

  const fields = registerConfig.map(({ config, ...props }) => {
    return (
      <AuthField
        error={errors[props.name]}
        {...props}
        {...register(props.name, {
          ...config,
          validate: props.name === "repeat_password" ? (value) => getValues("password") === value : undefined,
        })}
      />
    );
  });

  return (
    <AuthForm onSubmit={onSubmit}>
      <Flex>
        <Text tag="h1">Создать аккаунт</Text>
        <AuthFormAction actionText="Войти." to={Paths.Login}>
          У вас уже есть аккаунт?
        </AuthFormAction>
      </Flex>
      <Flex gap={5}>
        {fields}
        <Flex row justify="center">
          <Button
            type="submit"
            variant="secondary"
            padding="big"
            w={"100%"}
            disabled={loading || getValues("password") !== getValues("repeat_password")}
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
