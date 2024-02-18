import { Box, Container, Group, Paper } from "@mantine/core";
import { ProtectedRoute } from "@src/components/auth/ProtectedRoute/ProtectedRoute";
import { colors } from "@src/shared/constants/colors";
import { Logo } from "@src/shared/icons/logos/Logo";
import { auth } from "@src/stores/auth/store";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout: FC = observer(() => {
  return (
    <Box h="100vh" w={"100vw"}>
      <Container p={"md"} size={"lg"} h={"100%"}>
        <Group justify="space-between" my={"auto"} h={"100%"}>
          <Logo />
          <Paper bg={colors.bg} p={"xl"}>
            <ProtectedRoute condition={!auth.isAuth} redirectTo={"/hackatons"}>
              <Outlet />
            </ProtectedRoute>
          </Paper>
        </Group>
      </Container>
    </Box>
  );
});
