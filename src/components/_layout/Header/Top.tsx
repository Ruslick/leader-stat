import { Group, SegmentedControl } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserLogin } from "./_profile/UserLogin";
import { UserProfile } from "./_profile/UserProfile";
import { auth } from "../../../stores/auth/store";
import { Logo } from "../../../shared/icons/logos/Logo";

export const Top: FC = observer(() => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  return (
    <Group justify="space-between" gap={"lg"}>
      <Logo />
      <SegmentedControl
        size="lg"
        onChange={(value) => navigate(value)}
        value={path}
        data={[
          { label: "Новости", value: "news" },
          { label: "Хакатоны", value: "hackatons" },
          { label: "Маркет", value: "market" },
          { label: "Сообщения", value: "messages" },
        ]}
      />
      {auth.isAuth ? <UserProfile /> : <UserLogin />}
    </Group>
  );
});
