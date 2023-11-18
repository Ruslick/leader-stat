import { FC } from "react";

import styles from "./Header.module.scss";
import { Navbar } from "../../shared/Navbar/Navbar";
import { UserWidget } from "../../shared/UserWidget/UserWidget";
import { Logo } from "../../shared/icons/logos/Logo";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Navbar />
      <UserWidget id="Admin" avatarUrl="https://i.pravatar.cc/100" />
    </header>
  );
};
