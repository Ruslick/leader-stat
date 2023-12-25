import { FC } from "react";
import { selectHackatons } from "../../store/hackatons/hackatonSelectors";
import { useAppSelector } from "../../shared/hooks/store.hooks";
import { Flex } from "../../shared/ui/_layout/Flex/Flex";
import { Paper } from "../../shared/ui/_layout/Paper/Paper";
import { Button } from "../../shared/ui/Button/Button";
import { getDayMonthFromDate } from "../../shared/utils/date-converters";

export const HackatonAside: FC = () => {
  const { loading, success, hackatons } = useAppSelector(selectHackatons);

  if (loading || !success) {
    return null;
  }

  const { image_url, end_registration } = hackatons[0];
  return (
    <Flex gap={16}>
      <Paper p={0} w={"400px"}>
        <Flex gap={0}>
          <img src={image_url} width={"100%"} />
          <Button radius="no" w={"100%"}>
            Регистрация до {getDayMonthFromDate(end_registration)}{" "}
          </Button>
        </Flex>
      </Paper>
      <Button w={"100%"} variant="secondary" textSize="small">
        Пойск участников или команд
      </Button>
    </Flex>
  );
};
