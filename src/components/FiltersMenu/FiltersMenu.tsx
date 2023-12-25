import { FC } from "react";


import { selectAllFilters } from "../../store/filters/filtersSelectors";
import { DropDownMenu } from "../../shared/ui/DropDownMenu/DropDownMenu";
import { Flex } from "../../shared/ui/_layout/Flex/Flex";
import { ShowHiddenField } from "./ShowHiddenField";
import { StandartFilterMenuDropDown } from "./StandartFilterMenuDropDown";
import { Container } from "../../shared/ui/_layout/Container/Container";
import { useAppSelector } from "../../shared/hooks/store.hooks";

export const FiltersMenu: FC = () => {
  const { cities, formats, roles } = useAppSelector(selectAllFilters);

  return (
    <Container pr={10} w={"245px"}>
      <Flex gap={8}>
        <Flex>
          <StandartFilterMenuDropDown filterSection="cities" text="Города" filters={cities} searchParamKey="" />
          <StandartFilterMenuDropDown
            filterSection="formats"
            text="Формат"
            filters={formats}
            searchParamKey="is_online"
          />

          {/* TODO */}
          <DropDownMenu text="Дата">
            <input type="date" />
            <input type="date" />
            <input type="date" />
            <input type="date" />
          </DropDownMenu>

          {/* TODO */}
          <DropDownMenu text="Длительность">
            <input type="range" />
          </DropDownMenu>

          <StandartFilterMenuDropDown filterSection="roles" text="Роли" filters={roles} />
        </Flex>
        <ShowHiddenField />
      </Flex>
    </Container>
  );
};
