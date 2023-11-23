import { FC, memo } from "react";
import { DropDownMenu } from "../shared/DropDownMenu/DropDownMenu";
import { useAppDispatch } from "../../hooks/store.hooks";
import { FiltersState, toggleFilter } from "../../store/filters/filtersSlice";
import { Button } from "../shared/Button/Button";

interface StandartFilterMenuDropDownProps {
  text: string;
  filters: [string, boolean][];
  filterSection: keyof FiltersState;
}

export const StandartFilterMenuDropDown: FC<StandartFilterMenuDropDownProps> = memo(
  ({ text, filters, filterSection }) => {
    const dispatch = useAppDispatch();
    return (
      <DropDownMenu text={text}>
        {filters.map(([filter, isSelected]) => (
          <Button
            variant="filter"
            padding="small"
            textSize="small"
            radius="small"
            key={filter}
            active={isSelected}
            onClick={() => {
              dispatch(toggleFilter({ filterSection, filter }));
            }}
          >
            {filter}
          </Button>
        ))}
      </DropDownMenu>
    );
  },
);
