import { notifications } from "@mantine/notifications";
import { colors } from "../../shared/constants/colors";

class Notifications {
  private errorConfig = {
    withCloseButton: false,
    title: "Ошибка",
    message: "Упс, что то пошло не так",
    color: "red",
    bg: colors.focused,
    radius: "lg",
    styles: {
      root: {
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      },
      title: {
        color: colors.text,
      },
      description: {
        color: colors.text,
      },
    },
  };

  private successConfig = {
    withCloseButton: false,
    title: "Успешно",
    message: "Действие успешно выполнено",
    color: "green",
    bg: colors.focused,
    radius: "lg",
    styles: {
      root: {
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      },
      title: {
        color: colors.text,
      },
      description: {
        color: colors.text,
      },
    },
  };

  // eslint-disable-next-line class-methods-use-this
  public working = () => {
    notifications.show({ ...this.errorConfig, title: "В работе", message: "Этот функционал находится в разработке" });
  };

  public error = ({ message, title }: { message: string; title: string }) => {
    notifications.show({
      ...this.errorConfig,
      title,
      message,
    });
  };

  public success = ({ message, title }: { message: string; title: string }) => {
    notifications.show({
      ...this.successConfig,
      title,
      message,
    });
  };
}

export const notify = new Notifications();
