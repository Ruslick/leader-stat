import { FC, memo } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../shared/ui/Button/Button";
import { IconButton } from "../../shared/ui/Button/IconButton";
import { Role } from "../../shared/ui/Role/Role";
import { Text } from "../../shared/ui/Text/Text";
import { Container } from "../../shared/ui/_layout/Container/Container";
import { Flex } from "../../shared/ui/_layout/Flex/Flex";
import { Paper } from "../../shared/ui/_layout/Paper/Paper";
import { EyeIcon } from "../../shared/ui/icons/actions/EyeIcon";
import { HeartIcon } from "../../shared/ui/icons/actions/HeartIcon";
import { CupIcon } from "../../shared/ui/icons/roles/CupIcon";
import { CursorIcon } from "../../shared/ui/icons/roles/CursorIcon";
import { FinishIcon } from "../../shared/ui/icons/roles/FinishIcon";
import { Hackaton } from "../../shared/types/hackaton";
import { useHover } from "../../shared/hooks/useHover";
import { getDateTextRole, getDayMonthFromDate } from "../../shared/utils/date-converters";
import { Paths } from "../../shared/constants/paths";

export const HackatonCard: FC<Hackaton> = memo(
  ({ id, title, description, descriptionShort, end_registration, start, end, grand_prize, is_online }) => {
    const { isHovered, hoverProps } = useHover();
    const navigate = useNavigate();

    return (
      <Container {...hoverProps} h={"fit-content"}>
        <Paper active={isHovered} variant="card">
          <Flex w={"100%"}>
            <Text tag="h1" active={isHovered}>
              {title}
            </Text>
            <Text tag="h2">{descriptionShort}</Text>
            <Text tag="p">{description}</Text>
            <Flex row wrap>
              <Role icon={<CupIcon />}>{grand_prize}</Role>
              <Role icon={<FinishIcon />}>{getDateTextRole(start, end)}</Role>
              <Role icon={<CursorIcon />}>{is_online ? "Онлайн" : "Оффлайн"}</Role>
            </Flex>
            <Flex row justify="space-between">
              <Button
                padding="small"
                textSize="small"
                radius="small"
                variant="inverted"
                active={isHovered}
                onClick={() => navigate(`${Paths.Hackatons}/${id}`)}
              >
                Регистрация до {getDayMonthFromDate(end_registration)}
              </Button>
              <Flex row>
                <IconButton onClick={() => {}}>
                  <EyeIcon />
                </IconButton>
                <IconButton onClick={() => {}}>
                  <HeartIcon />
                </IconButton>
              </Flex>
            </Flex>
          </Flex>
        </Paper>
      </Container>
    );
  },
);
