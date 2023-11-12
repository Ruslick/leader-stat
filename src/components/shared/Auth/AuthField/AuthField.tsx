import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from "react";
import styles from "./AuthField.module.scss";

type AuthFieldProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const AuthField = forwardRef<HTMLInputElement, AuthFieldProps>(
  (props, ref) => {
    return <input ref={ref} className={styles.field} {...props} />;
  },
);
