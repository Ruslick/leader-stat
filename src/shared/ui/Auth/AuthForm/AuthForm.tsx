import { FC, FormEventHandler, ReactNode } from "react";

import { Flex } from "../../_layout/Flex/Flex";
import { Paper } from "../../_layout/Paper/Paper";

interface AuthFormProps {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export const AuthForm: FC<AuthFormProps> = ({ children, onSubmit }) => {
  return (
    <Paper variant="primary" w={"450px"} p={10} r={16}>
      <form onSubmit={onSubmit}>
        <Flex gap={14}>{children}</Flex>
      </form>
    </Paper>
  );
};
