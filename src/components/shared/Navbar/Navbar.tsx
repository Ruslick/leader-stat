import { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import { Paths } from "../../../constants/paths";
import styles from "./Navbar.module.scss";
import { Button } from "../Button/Button";

export const Navbar: FC = () => {
  const { pathname } = useLocation();

  return (
    <ul role="navigation" className={styles.navbar}>
      <li>
        <Link to={Paths.News}>
          <Button variant="transparent" padding="normal" active={pathname === Paths.News}>
            Новости
          </Button>
        </Link>
      </li>
      <li>
        <Link to={Paths.Home}>
          <Button variant="transparent" padding="normal" active={pathname === Paths.Home}>
            Хакатоны
          </Button>
        </Link>
      </li>
      <li>
        <Link to={Paths.Market}>
          <Button variant="transparent" padding="normal" active={pathname === Paths.Market}>
            Маркет
          </Button>
        </Link>
      </li>
      <li>
        <Link to={Paths.Messages}>
          <Button variant="transparent" padding="normal" active={pathname === Paths.Messages}>
            Сообщения
          </Button>
        </Link>
      </li>
    </ul>
  );
};
