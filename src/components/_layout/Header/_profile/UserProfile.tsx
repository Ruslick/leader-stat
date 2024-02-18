import { Button, Menu } from "@mantine/core";
import { colors } from "@src/shared/constants/colors";
import { auth } from "@src/stores/auth/store";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { useNavigate } from "react-router-dom";


export const UserProfile: FC = observer(() => {
  const navigate = useNavigate();
  return (
    <Menu withArrow>
      <Menu.Target>
        <Button size="lg" variant="default">iChat</Button>
      </Menu.Target>
      <Menu.Dropdown bg={colors.normal}>
        <Menu.Item onClick={() => navigate("/profile")}>Профиль</Menu.Item>
        <Menu.Item onClick={() => auth.logout()} variant="accent">
          Выйти
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
});
