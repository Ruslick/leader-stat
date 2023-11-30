import { FC } from "react";
import { Button } from "../../../shared/ui/Button/Button";
import { TelegramIcon } from "../../../shared/ui/icons/medias/TelegramIcon";
import { Text } from "../../../shared/ui/Text/Text";
import { Flex } from "../../../shared/ui/_layout/Flex/Flex";

export const FooterSecurity: FC = () => {
  return (
    <Flex row justify="end">
      <Button variant="link" padding="no" textSize="small" icon={<TelegramIcon />}>
        @LeaderStat
      </Button>
      <Text tag="p">© 2023 Все права защищены</Text>
    </Flex>
  );
};
