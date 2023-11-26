import { FC } from "react";
import { Link } from "react-router-dom";

import { Text } from "../../Text/Text";
import { Button } from "../../Button/Button";
import { Paths } from "../../../constants/paths";
import { Flex } from "../../_layout/Flex/Flex";

interface AuthFormActionProps {
  children: string;
  actionText: string;
  to: Paths;
}

export const AuthFormAction: FC<AuthFormActionProps> = ({ children, actionText, to }) => {
  return (
    <Flex gap={5} row align="center">
      <Text tag="p">{children}</Text>
      <Link to={to}>
        <Button textSize="small" padding="no" variant="link">
          {actionText}
        </Button>
      </Link>
    </Flex>
  );
};
