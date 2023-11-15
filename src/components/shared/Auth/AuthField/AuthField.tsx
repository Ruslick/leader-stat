import { InputHTMLAttributes, forwardRef } from "react";
import styles from "./AuthField.module.scss";

interface AuthFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  autoComplete: string;
  disabled: boolean;
  placeholder: string;
}

export const AuthField = forwardRef<HTMLInputElement, AuthFieldProps>(
  (props, ref) => {
    return <input ref={ref} className={styles.field} {...props} />;
  },
);
