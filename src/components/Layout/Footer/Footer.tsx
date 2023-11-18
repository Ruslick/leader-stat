import { FC } from "react";

import { Text } from "../../shared/Text/Text";
import { LogoMini } from "../../shared/icons/logos/LogoMini";
import styles from "./Footer.module.scss";
import { FooterLinks } from "./FooterLinks";
import { FooterSecurity } from "./FooterSecurity";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <LogoMini />
      <section className={styles.bottom}>
        <Text tag="p">
          LeaderStart – агрегатор хакатонов на котором можно найти команду для
          состязаний,
          <br /> влиться в комьюнити и узнать о последних новостях из мира
          хакатонов.
        </Text>
        <div className={styles.linksWrapper}>
          <div className={styles.links}>
            <FooterLinks />
          </div>
          <div className={styles.security}>
            <FooterSecurity />
          </div>
        </div>
      </section>
    </footer>
  );
};
