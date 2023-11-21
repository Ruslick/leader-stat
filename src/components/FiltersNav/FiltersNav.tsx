import { FC } from "react";
import { Button } from "../shared/Button/Button";
import { StarIcon } from "../shared/icons/StarIcon";
import { DoneIcon } from "../shared/icons/actions/DoneIcon";
import { HeartIcon } from "../shared/icons/actions/HeartIcon";
import styles from "./FiltersNav.module.scss";
import { ViewButton } from "./ViewButton";
import { FilterMenuButton } from "./FilterMenuButton";

export const FiltersNav: FC = () => {
  return (
    <ul role="navigation" className={styles.filters}>
      <li>
        <FilterMenuButton />
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
        <ViewButton />
      </li>
    </ul>
  );
};
