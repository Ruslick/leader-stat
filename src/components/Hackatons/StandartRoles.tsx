import { FC, memo } from "react";
import { Role } from "../../shared/ui/Role/Role";
import { CupIcon } from "../../shared/ui/icons/roles/CupIcon";
import { FinishIcon } from "../../shared/ui/icons/roles/FinishIcon";
import { CursorIcon } from "../../shared/ui/icons/roles/CursorIcon";
import { getDateTextRole } from "../../shared/utils/date-converters";

interface StandartRolesProps {
  grand_prize: string;
  start: Date;
  end: Date;
  is_online: boolean;
}

export const StandartRoles: FC<StandartRolesProps> = memo(({ grand_prize, start, end, is_online }) => {
  return (
    <>
      <Role icon={<CupIcon />}>{grand_prize}</Role>
      <Role icon={<FinishIcon />}>{getDateTextRole(start, end)}</Role>
      <Role icon={<CursorIcon />}>{is_online ? "Онлайн" : "Оффлайн"}</Role>
    </>
  );
});
