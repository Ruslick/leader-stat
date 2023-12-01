import { FC, useState } from "react";

import { logout } from "../../../store/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/store.hooks";
import { Button } from "../Button/Button";
import { Container } from "../_layout/Container/Container";
import { Flex } from "../_layout/Flex/Flex";
import { Paper } from "../_layout/Paper/Paper";
import styles from "./UserWidget.module.scss";
import { ThemeSelector } from "../../../components/ThemeSelector/ThemeSelector";
import { Paths } from "../../constants/paths";
import { ButtonLink } from "../_button/ButtonLink";
import { selectAuth } from "../../../store/auth/authSelectors";
import { useNavigate } from "react-router-dom";

interface UserWidgetProps {
  id: string;
  avatarUrl: string;
}

export const UserWidget: FC<UserWidgetProps> = ({ id, avatarUrl }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { success } = useAppSelector(selectAuth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  if (!success) {
    return (
      <Button variant="transparent" padding="normal" onClick={() => navigate(Paths.Login)}>
        Войти
      </Button>
    );
  }

  return (
    <Paper p={0} variant="card" w={"fit-content"}>
      <Flex gap={0} w={"fit-content"}>
        <Button variant="transparent" padding="normal" radius="no" w={"100%"} onClick={() => setIsOpen(!isOpen)}>
          <Flex row align="center">
            <Container mr={10}>{id}</Container>
            <img className={styles.avatar} src={avatarUrl} alt="user_avatar" />
          </Flex>
        </Button>

        {isOpen && (
          <Container m={3}>
            <Flex justify="center" align="center">
              <ButtonLink to={Paths.Profile}>Профиль</ButtonLink>
              <ThemeSelector />
              <Button w={"100%"} textSize="small" padding="small" onClick={() => dispatch(logout())}>
                Выйти
              </Button>
            </Flex>
          </Container>
        )}
      </Flex>
    </Paper>
  );
};
