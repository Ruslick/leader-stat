import { FC, useId, useState } from "react";
import classNames from "classnames";

import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  checked?: boolean;
  onChange: (isChecked: boolean) => void;
}

export const Checkbox: FC<CheckboxProps> = ({ checked, onChange }) => {
  const id = useId();
  const [isChecked, setIsChecked] = useState(!!checked);

  const handleChange = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  const ckeckboxClassName = classNames(styles.checkbox, {
    [styles.checked]: isChecked,
  });

  const switcherClassName = classNames(styles.switcher, {
    [styles.checked]: isChecked,
  });

  return (
    <>
      <input
        type="checkbox"
        checked={isChecked}
        defaultChecked={checked}
        onChange={handleChange}
        className={styles.input}
        id={id}
      />
      <label htmlFor={id} className={ckeckboxClassName}>
        <div className={switcherClassName}></div>
      </label>
    </>
  );
};
