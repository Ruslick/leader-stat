import { RootState } from "..";

export const selectIsOpenedFilterMenu = (state: RootState) =>
  state.settings.isOpenedFilterMenu;

