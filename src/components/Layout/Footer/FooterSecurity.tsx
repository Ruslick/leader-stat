import { FC } from "react";
import { Button } from "../../shared/Button/Button";
import { TelegramIcon } from "../../shared/icons/medias/TelegramIcon";
import { Text } from "../../shared/Text/Text";
import { ThemeSelector } from "../../ThemeSelector/ThemeSelector";

export const FooterSecurity: FC = () => {
  return (
    <>
      <Button
        variant="link"
        padding="no"
        textSize="small"
        icon={<TelegramIcon />}
      >
        @LeaderStat
      </Button>
      <Text tag="p">© 2023 Все права защищены</Text>
      <ThemeSelector />
    </>
  );
};
