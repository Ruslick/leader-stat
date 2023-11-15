import { FC } from "react";

import { LogoutButton } from "../../components/Auth/LogoutButton/LogoutButton";
import { Text } from "../../components/shared/Text/Text";

export const HomePage: FC = () => {
  return (
    <div>
      <Text tag="h1">Home page</Text>
      <br />
      <hr />
      <br />

      <LogoutButton />
    </div>
  );
};
