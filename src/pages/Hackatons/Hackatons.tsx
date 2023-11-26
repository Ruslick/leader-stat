import { FC } from "react";
import { HackatonsList } from "../../components/Hackatons/HackatonsList";
import { FiltersNav } from "../../components/FiltersNav/FiltersNav";
import { useAppSelector } from "../../shared/hooks/store.hooks";
import { selectIsOpenedFilterMenu } from "../../store/settings/settingsSelectors";
import { FiltersMenu } from "../../components/FiltersMenu/FiltersMenu";
import { Flex } from "../../shared/ui/_layout/Flex/Flex";
import { Container } from "../../shared/ui/_layout/Container/Container";

export const HackatonsPage: FC = () => {
  const isOpenedFilterMenu = useAppSelector(selectIsOpenedFilterMenu);
  return (
    <>
      <FiltersNav />
      <Container mt={5}>
        <Flex row gap={0}>
          {isOpenedFilterMenu && <FiltersMenu />}
          <HackatonsList />
        </Flex>
      </Container>
    </>
  );
};
