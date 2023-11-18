import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../shared/Button/Button";
import { Paths } from "../../../constants/paths";

export const FooterLinks: FC = () => {
  return (
    <>
      <Link to={Paths.News}>
        <Button variant="link" padding="no" textSize="small">
          Новости
        </Button>
      </Link>
      <Link to={Paths.Home}>
        <Button variant="link" padding="no" textSize="small">
          Хакатоны
        </Button>
      </Link>
      <Link to={Paths.Market}>
        <Button variant="link" padding="no" textSize="small">
          Маркет
        </Button>
      </Link>
      <Link to={Paths.Messages}>
        <Button variant="link" padding="no" textSize="small">
          Сообщения
        </Button>
      </Link>
      <Link to={Paths.Profile}>
        <Button variant="link" padding="no" textSize="small">
          Личный кабинет
        </Button>
      </Link>
    </>
  );
};
