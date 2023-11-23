import { FC, FormEventHandler, ReactNode } from "react";

import styles from "./AuthForm.module.scss";
import { Text } from "../../Text/Text";

interface AuthFormProps {
  children: ReactNode;
  onSubmit: FormEventHandler<HTMLFormElement>;
  title: string;
  actions: ReactNode;
  alternativeOptions?: ReactNode;
  error?: string;
}

export const AuthForm: FC<AuthFormProps> = ({
  children,
  onSubmit,
  title,
  actions,
  alternativeOptions,
  error,
}) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <section className={styles.header}>
        <Text tag="h1">{title}</Text>
        <div className={styles.actions}>{actions}</div>
      </section>
      <section className={styles.content}>{children}</section>

      {/* TODO: add error */}
      {error && <section className={styles.error}>Ошибка авторизации</section>}

      {alternativeOptions && (
        <section className={styles.alternativeOptionsWrapper}>
          <div className={styles.dividerBlock}>
            <div className={styles.divider} />
            <Text tag="h2">Или</Text>
            <div className={styles.divider} />
          </div>
          <div className={styles.alternativeOptionsContent}>{alternativeOptions}</div>
        </section>
      )}
    </form>
  );
};
