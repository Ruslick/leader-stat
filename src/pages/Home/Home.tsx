import { FC } from "react";
import { Link } from "react-router-dom";

import { Text } from "../../components/shared/Text/Text";
import { Paths } from "../../constants/paths";
import { Button } from "../../components/shared/Button/Button";

export const HomePage: FC = () => {
  return (
    <div>
      <Text tag="h1">Home page</Text>
      <Link to={Paths.Kit}>
        <Button > To Ui-kit.</Button>
      </Link>
    </div>
  );
};
