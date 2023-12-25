import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { selectAuth } from "../../../store/auth/authSelectors";
import { Paths } from "../../constants/paths";
import { useAppSelector } from "../../hooks/store.hooks";
import { Button } from "../Button/Button";
import { Container } from "../_layout/Container/Container";
import { Flex } from "../_layout/Flex/Flex";
import styles from "./UserWidget.module.scss";

interface UserWidgetProps {
  id: string;
  avatarUrl: string;
}

export const UserWidget: FC<UserWidgetProps> = ({ id, avatarUrl }) => {
  const { success } = useAppSelector(selectAuth);
  const navigate = useNavigate();

  if (!success) {
    return (
      <Button variant="transparent" padding="normal" onClick={() => navigate(Paths.Login)}>
        Войти
      </Button>
    );
  }

  return (
    <Link to={Paths.Profile}>
      <Button padding="normal">
        <Flex row align="center">
          <Container mr={10}>{id}</Container>
          <img className={styles.avatar} src={avatarUrl} alt="user_avatar" />
        </Flex>
      </Button>
    </Link>
  );
};
