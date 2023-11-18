import { FC } from "react";
import { HakatonFilters } from "../../components/HakatonFilters/HakatonFilters";
import { HackatonsList } from "../../components/Hackatons/HackatonsList";

export const HomePage: FC = () => {
  return (
    <>
      <HakatonFilters />
      <HackatonsList />
    </>
  );
};
