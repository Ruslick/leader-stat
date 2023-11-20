import { FC } from "react";
import { HakatonFilters } from "../../components/HakatonFilters/HakatonFilters";
import { HackatonsList } from "../../components/Hackatons/HackatonsList";
import { ContainerWithAside } from "../../components/Layout/ContainerWithAside/ContainerWithAside";
import { FiltersMenu } from "../../components/FiltersMenu/FiltersMenu";

export const HomePage: FC = () => {
  return (
    <>
      <HakatonFilters />
      <ContainerWithAside main={<HackatonsList />} aside={<FiltersMenu />} />
    </>
  );
};
