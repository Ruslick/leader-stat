import { FC } from "react";
import { HackatonsList } from "../../components/Hackatons/HackatonsList";
import { ContainerWithAside } from "../../components/Layout/ContainerWithAside/ContainerWithAside";
import { FiltersMenu } from "../../components/FiltersMenu/FiltersMenu";
import { FiltersNav } from "../../components/FiltersNav/FiltersNav";

export const HomePage: FC = () => {
  return (
    <>
      <FiltersNav />
      <ContainerWithAside main={<HackatonsList />} aside={<FiltersMenu />} />
    </>
  );
};
