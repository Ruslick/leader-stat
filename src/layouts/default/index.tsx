import { AppShell, Box, Container } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { FC } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@src/components/_layout/Header";
import { Filters } from "@src/components/_layout/Aside/Filters";
import { Footer } from "@src/components/_layout/Footer";
import { layoutStore } from "@src/stores/layout";


const bgcolor = "violet.9";
const mainPadding = "lg";

export const DefaultLayout: FC = observer(() => {
  return (
    <AppShell
      withBorder={false}
      bg={bgcolor}
      header={{ height: "130px" }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: {
          desktop: !layoutStore.isSidebarOpen,
          mobile: true,
        },
      }}
    >
      {/* HEADER */}
      <AppShell.Header bg={bgcolor}>
        <Container px={mainPadding} fluid h={"100%"}>
          <Header />
        </Container>
      </AppShell.Header>

      {/* SIDEBAR */}
      <AppShell.Navbar bg={bgcolor}>
        <Box pl={mainPadding} pt={mainPadding}>
          <Filters />
        </Box>
      </AppShell.Navbar>

      {/* MAIN CONTENT */}
      <AppShell.Main bg={bgcolor}>
        <Container p={mainPadding} fluid>
          <Outlet />
        </Container>

        {/* FOOTER */}
        <Container p={mainPadding} fluid>
          <Footer />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
});
