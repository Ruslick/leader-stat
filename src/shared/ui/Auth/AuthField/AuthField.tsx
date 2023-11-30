import { InputHTMLAttributes, forwardRef, useId } from "react";
import cx from "classnames";
import { FieldError } from "react-hook-form";

import styles from "./AuthField.module.scss";
import { Flex } from "../../_layout/Flex/Flex";

interface AuthFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  autoComplete: string;
  disabled?: boolean;
  label: string;
  error?: FieldError;
}

export const AuthField = forwardRef<HTMLInputElement, AuthFieldProps>(({ error, label, ...props }, ref) => {
  const id = useId();
  return (
    <Flex gap={0}>
      <label className={cx(styles.label, { [styles.error]: error })} htmlFor={id}>
        {label}
      </label>
      <input id={id} ref={ref} className={styles.field} {...props} />
    </Flex>
  );
});
