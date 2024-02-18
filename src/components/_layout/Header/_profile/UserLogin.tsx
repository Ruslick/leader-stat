import { Button } from "@mantine/core";
import { FC } from "react";
import { Link } from "react-router-dom";

export const UserLogin: FC = () => {
  return <Button variant="default" size="lg" component={Link} to={"/login"}>Войти</Button>;
};
