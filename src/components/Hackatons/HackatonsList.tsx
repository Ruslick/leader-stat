import classNames from "classnames";
import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../shared/hooks/store.hooks";

import { useReturnFetch } from "../../shared/hooks/useReturnFetch";
import { Container } from "../../shared/ui/_layout/Container/Container";
import { getHackatonsThunk } from "../../store/hackatons/getHackatonsThunk";
import { selectHackatons, selectHackatonsView } from "../../store/hackatons/hackatonSelectors";
import { selectIsOpenedFilterMenu } from "../../store/settings/settingsSelectors";
import styles from "./Hackaton.module.scss";
import { HackatonCard } from "./HackatonCard";

export const HackatonsList: FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error, success, hackatons } = useAppSelector(selectHackatons);
  const location = useLocation();

  useEffect(() => {
    if (!success) dispatch(getHackatonsThunk(location.search));
  }, [success]);

  const view = useAppSelector(selectHackatonsView);
  const isOpenedFilterMenu = useAppSelector(selectIsOpenedFilterMenu);
  const className = classNames(styles.container, {
    [styles[view]]: true,
    [styles.twoColumns]: isOpenedFilterMenu,
  });
  const component = (
    <Container w="100%" h="100%">
      <div className={className}>
        {hackatons.map((hackaton) => (
          <HackatonCard key={hackaton.id} {...hackaton} />
        ))}
      </div>
    </Container>
  );

  return useReturnFetch({ loading, error, component });
};
