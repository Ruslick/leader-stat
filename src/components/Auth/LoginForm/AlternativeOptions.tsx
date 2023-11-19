import { FC } from "react";
import { IconButton } from "../../shared/Button/IconButton";
import { MailIcon } from "../../shared/icons/medias/MailIcon";


export const AlternativeOptions: FC = () => {
  return (
    <>
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
    </>
  );
};
