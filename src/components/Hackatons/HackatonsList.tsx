import classNames from "classnames";
import { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../shared/hooks/store.hooks";

import { Button } from "../../shared/ui/Button/Button";
import { Container } from "../../shared/ui/_layout/Container/Container";
import { Flex } from "../../shared/ui/_layout/Flex/Flex";
import { getHackatonsThunk } from "../../store/hackatons/getHackatonsThunk";
import { selectHackatonsView, selectHakatons } from "../../store/hackatons/hackatonSelectors";
import { selectIsOpenedFilterMenu } from "../../store/settings/settingsSelectors";
import { HackatonCard } from "./HackatonCard";
import styles from "./Hackaton.module.scss";

export const HackatonsList: FC = () => {
  const { loading, error, success, hakatons } = useAppSelector(selectHakatons);
  const view = useAppSelector(selectHackatonsView);
  const isOpenedFilterMenu = useAppSelector(selectIsOpenedFilterMenu);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!success) dispatch(getHackatonsThunk({}));
  }, [success]);

  if (loading) {
    return null;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!hakatons.length) {
    return <div>No hackatons found</div>;
  }

  const className = classNames(styles.container, {
    [styles[view]]: true,
    [styles.twoColumns]: isOpenedFilterMenu,
  });

  return (
    <Container w="100%" h="100%">
      <div className={className}>
        {hakatons.map((hakaton) => (
          <HackatonCard key={hakaton.id} {...hakaton} />
        ))}
      </div>
      <div className={styles.overlay}>
        <Flex justify="center" align="center" h={"100%"}>
          <Button variant="secondary" padding="big">
            Показать больше хакатонов
          </Button>
        </Flex>
      </div>
    </Container>
  );
};
