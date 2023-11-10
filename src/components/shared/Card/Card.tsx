import { FC, Fragment, ReactNode, memo, useState } from "react";
import classNames from "classnames";

import { Text } from "../Text/Text";
import { logger } from "../../../utils/logger";
import { Button } from "../Button/Button";

import styles from "./Card.module.scss";
import { EyeIcon } from "../icons/actions/EyeIcon";
import { HeartIcon } from "../icons/actions/HeartIcon";
import { IconButton } from "../Button/IconButton";

interface CardProps {
  meta: {
    id: string;
    title: string;
    subTitle: string;
    description: string;
    buttonText: string;
  };
  actions: {
    onFavorite: (hid: string) => void;
    onHide: (hid: string) => void;
    isFavorite: boolean;
    isHidden: boolean;
  };

  roles: ReactNode[];
}

export const Card: FC<CardProps> = memo(({ meta, roles, actions }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={classNames(styles.wrapper, { [styles.active]: isHovered })}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Text tag="h1" active={isHovered}>
        {meta.title}
      </Text>
      <Text tag="h2">{meta.subTitle}</Text>
      <Text tag="p">{meta.description}</Text>
      <div className={styles.roles}>
        {roles.map((role, i) => (
          <Fragment key={i}>{role}</Fragment>
        ))}
      </div>
      <div className={styles.bottomMenu}>
        <Button
          padding="extraSmall"
          variant="outline"
          onClick={logger}
          active={isHovered}
        >
          {meta.buttonText}
        </Button>
        <div className={styles.actions}>
          <IconButton
            onClick={() => {
              actions.onHide(meta.id);
            }}
          >
            <EyeIcon active={actions.isHidden} />
          </IconButton>
          <IconButton onClick={() => actions.onFavorite(meta.id)}>
            <HeartIcon active={actions.isFavorite} />
          </IconButton>
        </div>
      </div>
    </div>
  );
});
