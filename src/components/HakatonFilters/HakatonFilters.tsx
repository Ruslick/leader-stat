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
          variant="secondary"
          icon={<BurgerFilterIcon />}
          textSize="small"
        >
          Фильтр
        </Button>
      </li>
      <li>
        <Button variant="secondary" icon={<StarIcon />} textSize="small">
          Хакатоны для меня
        </Button>
      </li>
      <li>
        <Button variant="secondary" icon={<DoneIcon />} textSize="small">
          Я учавствую
        </Button>
      </li>
      <li>
        <Button variant="secondary" icon={<HeartIcon />} textSize="small">
          Избранное
        </Button>
      </li>
      <li className={styles.view}>
        <HackatonsViewButton />
      </li>
    </ul>
  );
};
