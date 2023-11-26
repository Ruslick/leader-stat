import { FC } from "react";
import { Button } from "../../shared/ui/Button/Button";
import { StarIcon } from "../../shared/ui/icons/StarIcon";
import { DoneIcon } from "../../shared/ui/icons/actions/DoneIcon";
import { HeartIcon } from "../../shared/ui/icons/actions/HeartIcon";
import { ViewButton } from "./ViewButton";
import { FilterMenuButton } from "./FilterMenuButton";
import { Flex } from "../../shared/ui/_layout/Flex/Flex";

export const FiltersNav: FC = () => {
  return (
    <Flex row justify="space-between">
      <Flex row>
        <FilterMenuButton />
        <Button variant="secondary" icon={<StarIcon />} textSize="small">
          Хакатоны для меня
        </Button>
        <Button variant="secondary" icon={<DoneIcon />} textSize="small">
          Я учавствую
        </Button>
        <Button variant="secondary" icon={<HeartIcon />} textSize="small">
          Избранное
        </Button>
      </Flex>
      <ViewButton />
    </Flex>
  );
};
