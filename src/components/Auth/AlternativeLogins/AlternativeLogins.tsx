import { FC } from "react";
import { IconButton } from "../../../shared/ui/Button/IconButton";
import { MailIcon } from "../../../shared/ui/icons/medias/MailIcon";
import { Flex } from "../../../shared/ui/_layout/Flex/Flex";

export const AlternativeLogins: FC = () => {
  return (
    <Flex row justify="space-between">
      <IconButton variant="media" onClick={() => {}}>
        <MailIcon />
      </IconButton>
      <IconButton variant="media" onClick={() => {}}>
        <MailIcon />
      </IconButton>
      <IconButton variant="media" onClick={() => {}}>
        <MailIcon />
      </IconButton>
      <IconButton variant="media" onClick={() => {}}>
        <MailIcon />
      </IconButton>
      <IconButton variant="media" onClick={() => {}}>
        <MailIcon />
      </IconButton>
    </Flex>
  );
};
