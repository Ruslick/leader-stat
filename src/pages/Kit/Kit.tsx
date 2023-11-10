import { FC } from "react";

import { ThemeSelector } from "../../components/ThemeSelector/ThemeSelector";
import { Text } from "../../components/shared/Text/Text";
import { StarIcon } from "../../components/shared/icons/StarIcon";
import { Button } from "../../components/shared/Button/Button";
import { logger } from "../../utils/logger";
import { Role } from "../../components/shared/Role/Role";
import { KeyboardIcon } from "../../components/shared/icons/roles/KeyboardIcon";
import { Card } from "../../components/shared/Card/Card";
import { IconButton } from "../../components/shared/Button/IconButton";
import { MailIcon } from "../../components/shared/icons/medias/MailIcon";

export const Kit: FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Text tag="h1">Выбор темы</Text>

      <div style={{ display: "flex" }}>
        <ThemeSelector />
      </div>
      <hr />

      <Text tag="h1">Типография</Text>

      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Text tag="h1">Head</Text>
        <Text tag="h2">SubHead</Text>
        <Text tag="p">Body</Text>
        <Text tag="p" weight="bold">
          Body Bold
        </Text>
        <Text active>Любой текст в активном состоянии</Text>
      </div>
      <hr />

      <Text tag="h1">Кнопки</Text>
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <IconButton onClick={logger}>
          <StarIcon />
        </IconButton>
        <IconButton variant="media" onClick={logger}>
          <MailIcon />
        </IconButton>

        <Button variant="primary" onClick={logger}>
          Primary
        </Button>
        <Button variant="secondary" onClick={logger} padding="normal">
          Secondary
        </Button>
        <Button
          variant="transparent"
          onClick={logger}
          icon={<StarIcon />}
          padding="small"
        >
          Transparent
        </Button>
        <Button variant="transparent" onClick={logger} padding="small">
          Transparent
        </Button>
        <Button onClick={logger} padding="small" icon={<StarIcon />}>
          Any with icon
        </Button>
        <Button variant="link" textSize="small" padding="no" onClick={logger}>
          Link.
        </Button>
      </div>
      <hr />

      <Text tag="h1">Компонент роль</Text>
      <Role icon={<KeyboardIcon />}>Разработчики</Role>

      <hr />

      <Text tag="h1">Компонент карточки</Text>
      <Card
        meta={{
          id: "1",
          title:
            "Международный хакатон. «Цифровой прорыв. Сезон: Искусственный интеллект»",
          subTitle: "Трек 1 – MOBILE+WEB. Трек 2 – METAVERSE.",
          description:
            "Разработай сервис для подбора оптимального отделения банка, учитывая потребности клиента и доступность услуг.",
          buttonText: "Регистрация до 10 октября",
        }}
        roles={[
          <Role icon={<KeyboardIcon />}>Разработчики</Role>,
          <Role icon={<KeyboardIcon />}>Разработчики</Role>,
          <Role icon={<KeyboardIcon />}>Разработчики</Role>,
          <Role icon={<KeyboardIcon />}>Разработчики</Role>,
          <Role icon={<KeyboardIcon />}>Разработчики</Role>,
          <Role icon={<KeyboardIcon />}>Разработчики</Role>,
          <Role icon={<KeyboardIcon />}>Разработчики</Role>,
          <Role icon={<KeyboardIcon />}>Разработчики</Role>,
          <Role icon={<KeyboardIcon />}>Разработчики</Role>,
          <Role icon={<KeyboardIcon />}>Разработчики</Role>,
          <Role icon={<KeyboardIcon />}>Разработчики</Role>,
          <Role icon={<KeyboardIcon />}>Разработчики</Role>,
          <Role icon={<KeyboardIcon />}>Разработчики</Role>,
          <Role icon={<KeyboardIcon />}>Разработчики</Role>,
          <Role icon={<KeyboardIcon />}>Разработчики</Role>,
        ]}
        actions={{
          onFavorite: (hid) => {
            console.log(hid);
          },
          onHide: (hid) => {
            console.log(hid);
          },
          isFavorite: false,
          isHidden: false,
        }}
      />
      <hr />
    </div>
  );
};
