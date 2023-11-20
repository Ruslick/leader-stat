import classNames from "classnames";
import { FC, useState } from "react";

import { Hackaton } from "../../types/hackaton";
import { getDateTextRole, getDayMonthFromDate } from "../../utils/date";
import { Button } from "../shared/Button/Button";
import { Text } from "../shared/Text/Text";
import styles from "./Hackaton.module.scss";
import { Role } from "../shared/Role/Role";
import { CupIcon } from "../shared/icons/roles/CupIcon";
import { FinishIcon } from "../shared/icons/roles/FinishIcon";
import { CursorIcon } from "../shared/icons/roles/CursorIcon";
import { IconButton } from "../shared/Button/IconButton";
import { HeartIcon } from "../shared/icons/actions/HeartIcon";
import { EyeIcon } from "../shared/icons/actions/EyeIcon";

interface HackatonCardProps {
  meta: Hackaton;
}

export const HackatonCard: FC<HackatonCardProps> = ({ meta }) => {
  const {
    title,
    description,
    descriptionShort,
    end_registration,
    start,
    end,
    grandPrize,
    isOnline,
  } = meta;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={classNames(styles.hackaton, {
        [styles.active]: isHovered,
      })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Text tag="h1" active={isHovered}>
        {title}
      </Text>
      <Text tag="h2">{descriptionShort}</Text>
      <Text tag="p">{description}</Text>
      <div className={styles.roles}>
        <Role icon={<CupIcon />}>{grandPrize}</Role>
        <Role icon={<FinishIcon />}>{getDateTextRole(start, end)}</Role>
        <Role icon={<CursorIcon />}>{isOnline ? "Онлайн" : "Оффлайн"}</Role>
      </div>
      <div className={styles.bottomMenu}>
        <Button
          padding="small"
          textSize="small"
          radius="small"
          variant="inverted"
          active={isHovered}
        >
          Регистрация до {getDayMonthFromDate(end_registration)}
        </Button>
        <div className={styles.actions}>
          <IconButton onClick={() => {}}>
            <EyeIcon />
          </IconButton>
          <IconButton onClick={() => {}}>
            <HeartIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
