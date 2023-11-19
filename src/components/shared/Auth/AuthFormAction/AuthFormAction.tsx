import { FC } from "react";
import { Link } from "react-router-dom";

import styles from "./AuthFormAction.module.scss";

import { Text } from "../../Text/Text";
import { Button } from "../../Button/Button";
import { Paths } from "../../../../constants/paths";

interface AuthFormActionProps {
  children: string;
  actionText: string;
  to: Paths;
}

export const AuthFormAction: FC<AuthFormActionProps> = ({
  children,
  actionText,
  to,
}) => {
  return (
    <div className={styles.wrapper}>
      <Text tag="p">{children}</Text>
      <Link to={to}>
        <Button textSize="small" padding="no" variant="link">
          {actionText}
        </Button>
      </Link>
    </div>
  );
};
