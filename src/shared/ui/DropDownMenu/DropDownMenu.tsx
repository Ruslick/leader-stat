import { FC, ReactNode, useId, useState } from "react";
import { ArrowIcon } from "../icons/ArrowIcon";
import styles from "./DropDownMenu.module.scss";
import { DropDownMenuList } from "./DropDownMenuList";
import { Text } from "../Text/Text";
import { Container } from "../_layout/Container/Container";
import { Flex } from "../_layout/Flex/Flex";

interface DropDownMenuProps {
  text: string;
  children: ReactNode;
}

export const DropDownMenu: FC<DropDownMenuProps> = ({ text, children }) => {
  const id = useId();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.menu}>
      <input type="checkbox" checked={isOpen} id={id} className={styles.input} onChange={() => setIsOpen(!isOpen)} />
      <label className={styles.face} htmlFor={id}>
        <Flex row w={"100%"}>
          <Container mr={5}>
            <Text weight="bold" colorInherit>
              {text}
            </Text>
          </Container>
          <Container absolute t={0} r={0} h={"fit-content"}>
            <ArrowIcon />
          </Container>
        </Flex>
      </label>
      {isOpen && <DropDownMenuList>{children}</DropDownMenuList>}
    </div>
  );
};
