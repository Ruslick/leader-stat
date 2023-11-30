import { FC } from "react";
import { themes } from "../../shared/constants/themes";
import { useTheme } from "../../shared/hooks/themes/useTheme";
import { DropDownMenu } from "../../shared/ui/DropDownMenu/DropDownMenu";
import { Button } from "../../shared/ui/Button/Button";
import { Flex } from "../../shared/ui/_layout/Flex/Flex";
import { Container } from "../../shared/ui/_layout/Container/Container";

export const ThemeSelector: FC = () => {
  const { setTheme } = useTheme();

  return (
    <DropDownMenu text="Тема">
      <Container ml={2}>
        <Flex align="start" gap={0}>
          {Object.values(themes).map((theme) => (
            <Button key={theme} onClick={() => setTheme(theme)} variant="link" textSize="small" padding="no">
              {theme[0].toUpperCase() + theme.slice(1)}
            </Button>
          ))}
        </Flex>
      </Container>
    </DropDownMenu>
  );
};
