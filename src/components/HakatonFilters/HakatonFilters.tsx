import { FC } from "react";
import { Button } from "../shared/Button/Button";
import { StarIcon } from "../shared/icons/StarIcon";
import { BurgerFilterIcon } from "../shared/icons/actions/BurgerFilterIcon";
import { DoneIcon } from "../shared/icons/actions/DoneIcon";
import { HeartIcon } from "../shared/icons/actions/HeartIcon";
import { HackatonsViewButton } from "./HackatonsViewButton";
import styles from "./HakatonFilters.module.scss";

export const HakatonFilters: FC = () => {
  return (
    <ul role="navigation" className={styles.filters}>
      <li>
        <Button
          padding="small"
          variant="transparent"
          icon={<BurgerFilterIcon />}
        >
          Фильтр
        </Button>
      </li>
      <li>
        <Button padding="small" variant="transparent" icon={<StarIcon />}>
          Хакатоны для меня
        </Button>
      </li>
      <li>
        <Button padding="small" variant="transparent" icon={<DoneIcon />}>
          Я учавствую
        </Button>
      </li>
      <li>
        <Button padding="small" variant="transparent" icon={<HeartIcon />}>
          Избранное
        </Button>
      </li>
      <li className={styles.view}>
        <HackatonsViewButton />
      </li>
    </ul>
  );
};
