import { FC } from "react";
import { Button } from "../../components/shared/Button/Button";
import { logger } from "../../utils/logger";

export const HomePage: FC = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Button onClick={logger}>Click me</Button>
    </div>
  );
};
