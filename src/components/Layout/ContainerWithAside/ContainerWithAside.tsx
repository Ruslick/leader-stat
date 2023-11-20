import { FC, ReactNode } from "react";
import styles from "./ContainerWithAside.module.scss";

interface ContainerWithAsideProps {
  aside: ReactNode;
  main: ReactNode;
}

export const ContainerWithAside: FC<ContainerWithAsideProps> = ({
  aside,
  main,
}) => {
  return (
    <div className={styles.container}>
      {aside}
      {main}
    </div>
  );
};
