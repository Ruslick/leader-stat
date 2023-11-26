import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../shared/ui/Button/Button";
import { Flex } from "../../../shared/ui/_layout/Flex/Flex";
import { Paths } from "../../../shared/constants/paths";

export const FooterLinks: FC = () => {
  return (
    <Flex row>
      <Link to={Paths.News}>
        <Button variant="link" padding="no" textSize="small">
          Новости
        </Button>
      </Link>
      <Link to={Paths.Hackatons}>
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
    </Flex>
  );
};
