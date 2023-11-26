import { InputHTMLAttributes, forwardRef, useId } from "react";
import ReactInputMask from "react-input-mask";

import styles from "./AuthField.module.scss";

interface AuthFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  autoComplete: string;
  disabled?: boolean;
  label: string;
  mask?: string;
}

export const AuthField = forwardRef<HTMLInputElement, AuthFieldProps>((props, ref) => {
  const id = useId();
  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {props.label}
      </label>
      {props.mask ? (
        <ReactInputMask mask={props.mask} className={styles.field} {...props} />
      ) : (
        <input id={id} ref={ref} className={styles.field} {...props} />
      )}
    </div>
  );
});
