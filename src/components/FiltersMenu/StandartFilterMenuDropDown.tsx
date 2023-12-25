import { FC, memo } from "react";
import { DropDownMenu } from "../../shared/ui/DropDownMenu/DropDownMenu";
import { useAppDispatch } from "../../shared/hooks/store.hooks";
import { FiltersState, toggleFilter } from "../../store/filters/filtersSlice";
import { Button } from "../../shared/ui/Button/Button";
import { useSearchParams } from "react-router-dom";

interface StandartFilterMenuDropDownProps {
  text: string;
  filters: [string, boolean][];
  filterSection: keyof FiltersState;
  searchParamKey: string;
}

export const StandartFilterMenuDropDown: FC<StandartFilterMenuDropDownProps> = memo(
  ({ text, filters, searchParamKey }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
      <DropDownMenu text={text}>
        {filters.map(([filter, isSelected], i) => (
          <Button
            variant="filter"
            padding="small"
            textSize="small"
            radius="small"
            key={filter}
            active={isSelected}
            onClick={() => {
              setSearchParams({
                [searchParamKey]: String(Boolean(i)),
              });
            }}
          >
            {filter}
          </Button>
        ))}
      </DropDownMenu>
    );
  },
);
