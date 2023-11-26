import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { Flex } from "../../shared/ui/_layout/Flex/Flex";
import { Button } from "../../shared/ui/Button/Button";
import { Paths } from "../../shared/constants/paths";

export const HeaderNavbar: FC = () => {
  const { pathname } = useLocation();

  return (
    <Flex row gap={2}>
      <Link to={Paths.News}>
        <Button variant="transparent" padding="normal" active={pathname === Paths.News}>
          Новости
        </Button>
      </Link>
      <Link to={Paths.Hackatons}>
        <Button variant="transparent" padding="normal" active={pathname === Paths.Hackatons}>
          Хакатоны
        </Button>
      </Link>
      <Link to={Paths.Market}>
        <Button variant="transparent" padding="normal" active={pathname === Paths.Market}>
          Маркет
        </Button>
      </Link>
      <Link to={Paths.Messages}>
        <Button variant="transparent" padding="normal" active={pathname === Paths.Messages}>
          Сообщения
        </Button>
      </Link>
    </Flex>
  );
};
