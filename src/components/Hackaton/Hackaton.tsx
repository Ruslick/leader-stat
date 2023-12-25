import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../shared/hooks/store.hooks";
import { Flex } from "../../shared/ui/_layout/Flex/Flex";
import { Text } from "../../shared/ui/Text/Text";
import { StandartRoles } from "../Hackatons/StandartRoles";
import { TrackFull } from "../../shared/ui/TrackFull/TrackFull";
import { Button } from "../../shared/ui/Button/Button";
import { HeartIcon } from "../../shared/ui/icons/actions/HeartIcon";
import { EyeIcon } from "../../shared/ui/icons/actions/EyeIcon";
import { selectHackatons } from "../../store/hackatons/hackatonSelectors";
import { getHackatonsThunk } from "../../store/hackatons/getHackatonsThunk";

const track = {
  title: "Трек 1 - MOBILE + WEB",
  description: "Описание трека",
  lists: [
    {
      title: "Сервис должен поддерживать следующий функционал:",
      items: [
        "Отображение отделений на карте и их загруженности",
        "Построение пешего и автомобильного маршрута (допустимо использование сторонних сервисов)",
        "Поиск оптимального отделения с учетом загруженности отделения и задач клиента на основе разработанного алгоритма",
        "Дополнительные «вау-фичи» с учётом трендов IT-отрасли (например, использование AI-технологий)",
      ],
    },
    {
      title: "Рекомендуемый состав команды:",
      items: [
        "Android/iOS разработчики (в случае мобильного приложения)",
        "Back-End разработчики",
        "Front-End разработчики",
      ],
    },
  ],
};

export const Hackaton: FC = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getHackatonsThunk(`?id=${params.id}`));
  }, []);

  const { loading, success, hackatons } = useAppSelector(selectHackatons);

  if (loading || !success) {
    return null;
  }
  if (!hackatons.length) {
    return <div>No hackaton found</div>;
  }

  const { title, description, grand_prize, start, end, is_online } = hackatons[0];

  return (
    <Flex gap={16}>
      <Flex gap={8}>
        <Flex>
          <Text tag="h1">{title}</Text>
          <Text>{description}</Text>
        </Flex>
        <Flex row wrap>
          <StandartRoles grand_prize={grand_prize} start={start} end={end} is_online={is_online} />
        </Flex>
      </Flex>
      <TrackFull track={track} />
      <Flex>
        <Text tag="h1">Формат участия</Text>
        <Text>Команда от 2 до 5 человек</Text>
      </Flex>

      <Flex row justify="space-between">
        <Button variant="secondary" textSize="small" padding="small">
          Сайт организатора
        </Button>
        <Flex row>
          <Button variant="secondary" textSize="small" padding="small" icon={<HeartIcon />}>
            Добавить в избранное
          </Button>
          <Button variant="secondary" textSize="small" padding="small" icon={<EyeIcon />}>
            Скрыть хакатон
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
