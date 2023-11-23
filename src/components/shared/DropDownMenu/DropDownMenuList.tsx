import { animated, easings, useTransition } from "@react-spring/web";
import { FC, ReactNode, memo } from "react";
import styles from "./DropDownMenu.module.scss";

interface DropDownMenuListProps {
  isOpen: boolean;
  children: ReactNode;
}

export const DropDownMenuList: FC<DropDownMenuListProps> = memo(({ children, isOpen }) => {
  const transition = useTransition(isOpen, {
    config: { duration: 200, easing: easings.easeInCirc },
    from: { opacity: 0, x: -30 },
    enter: { opacity: 1, x: 0 },
    leave: { opacity: 0, x: -30 },
  });
  return transition(
    (animatedStyles, item) =>
      item && (
        <animated.ul className={styles.items} style={animatedStyles}>
          {children}
        </animated.ul>
      ),
  );
});
