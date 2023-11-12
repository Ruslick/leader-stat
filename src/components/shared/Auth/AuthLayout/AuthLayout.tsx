import { FC } from "react";
import { Outlet } from "react-router-dom";

import styles from "./AuthLayout.module.scss";
import { Logo } from "../../icons/Logo";

export const AuthLayout: FC = () => {
  return (
    <main className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <Outlet />
    </main>
  );
};
