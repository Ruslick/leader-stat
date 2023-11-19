import { FC } from "react";

import { ThemeSelector } from "../../components/ThemeSelector/ThemeSelector";
import { Button } from "../../components/shared/Button/Button";
import { IconButton } from "../../components/shared/Button/IconButton";
import { Role } from "../../components/shared/Role/Role";
import { Text } from "../../components/shared/Text/Text";
import { StarIcon } from "../../components/shared/icons/StarIcon";
import { MailIcon } from "../../components/shared/icons/medias/MailIcon";
import { DevelopersIcon } from "../../components/shared/icons/roles/DevelopersIcon";
import { Checkbox } from "../../components/shared/Checkbox/Checkbox";

export const Kit: FC = () => {
  return (
    <div style={{ padding: "20px" }}>
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
          <IconButton>
            <StarIcon />
          </IconButton>
          <IconButton variant="media">
            <MailIcon />
          </IconButton>

          <Button variant="primary">Primary</Button>
          <Button variant="secondary" padding="normal">
            Secondary
          </Button>
          <Button variant="transparent" icon={<StarIcon />} padding="small">
            Transparent
          </Button>
          <Button variant="transparent" padding="small">
            Transparent
          </Button>
          <Button padding="small" icon={<StarIcon />}>
            Any with icon
          </Button>
          <Button variant="link" textSize="small" padding="no">
            Link.
          </Button>
        </div>
        <hr />

        <Text tag="h1">Checkbox</Text>
        <Checkbox
          onChange={(isChecked) => {
            console.log(isChecked);
          }}
        />
        <Checkbox
          onChange={(isChecked) => {
            console.log(isChecked);
          }}
          checked
        />

        <hr />

        <Text tag="h1">Компонент роль</Text>
        <Role icon={<DevelopersIcon />}>Разработчики</Role>
      </div>
    </div>
  );
};
