import { FC, useEffect } from "react";
import classNames from "classnames";

import { useAppDispatch, useAppSelector } from "../../hooks/store.hooks";

import {
  selectHackatonsView,
  selectHakatons,
} from "../../store/hackatons/hackatonSelectors";
import { getHackatonsThunk } from "../../store/hackatons/getHackatonsThunk";
import { HackatonCard } from "./Hackaton";
import styles from "./Hackaton.module.scss";
import { Button } from "../shared/Button/Button";
import { selectIsOpenedFilterMenu } from "../../store/settings/settingsSelectors";

export const HackatonsList: FC = () => {
  const { loading, error, success, hakatons } = useAppSelector(selectHakatons);
  const view = useAppSelector(selectHackatonsView);

  const isOpenedFilterMenu = useAppSelector(selectIsOpenedFilterMenu);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!success) dispatch(getHackatonsThunk());
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
    <div className={className}>
      {hakatons.map((hakaton) => (
        <HackatonCard key={hakaton.title} meta={hakaton} />
      ))}
      <div className={styles.overlay}></div>
      <div className={styles.moreButtonWrapper}>
        <Button variant="secondary" padding="big">
          Показать больше хакатонов
        </Button>
      </div>
    </div>
  );
};
