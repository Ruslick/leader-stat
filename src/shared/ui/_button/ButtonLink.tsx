import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

import { Button } from "../Button/Button";
import { Paths } from "../../constants/paths";

interface ButtonLinkProps {
  children: ReactNode;
  to: Paths;
}

export const ButtonLink: FC<ButtonLinkProps> = ({ children, to }) => {
  return (
    <Link to={to}>
      <Button variant="link" padding="no" textSize="small">
        {children}
      </Button>
    </Link>
  );
};
