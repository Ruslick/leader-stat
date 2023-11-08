import { FC } from "react";
import { Button } from "../../components/shared/Button/Button";
import { logger } from "../../utils/logger";
import { ThemeSelector } from "../../components/Theme/ThemeSelector";

export const HomePage: FC = () => {
  return (
    <div>
      <ThemeSelector />
      <h1>Home page</h1>
      <Button onClick={logger}>Click me</Button>
    </div>
  );
};
