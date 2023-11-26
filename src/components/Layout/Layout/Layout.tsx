import { FC } from "react";
import { Outlet } from "react-router-dom";

import styles from "./Layout.module.scss";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

export const Layout: FC = () => {
  
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
