import regex from "../../../shared/constants/regex";
import { SignUpValues } from "../../../shared/types/auth/auth";

export type ConfigField<T> = {
  name: keyof T;
  autoComplete: string;
  type: string;
  label: string;
  placeholder?: string;
  config: {
    required?: boolean;
    pattern?: RegExp;
    validate?: (value: string) => boolean;
  };
};

export const registerConfig: ConfigField<SignUpValues>[] = [
  {
    name: "email",
    autoComplete: "email",
    type: "text",
    label: "Адрес электронной почты",
    placeholder: "ex@example.com",
    config: { required: true, pattern: regex.email },
  },
  {
    name: "first_name",
    autoComplete: "first-name",
    type: "text",
    label: "Имя",
    placeholder: "Иван",
    config: { required: true },
  },
  {
    name: "middle_name",
    autoComplete: "middle-name",
    type: "text",
    label: "Отчество",
    placeholder: "Иванович",
    config: { required: true },
  },
  {
    name: "last_name",
    autoComplete: "last-name",
    type: "text",
    label: "Фамилия",
    placeholder: "Иванов",
    config: {required: true},
  },
  {
    name: "password",
    autoComplete: "new-password",
    type: "password",
    label: "Пароль",
    config: { required: true },
  },
  {
    name: "repeat_password",
    autoComplete: "new-password",
    type: "password",
    label: "Повторите пароль",
    config: { required: true,  },
  },
];
