import {
  Accordion,
  ActionIcon,
  Anchor,
  Button,
  createTheme,
  MantineProvider,
  Menu,
  Paper,
  PasswordInput,
  SegmentedControl,
  Text,
  TextInput,
} from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { FC, ReactNode } from "react";
import { colors } from "../../constants/colors";
import accordionClasses from "./Accordion.module.scss";
import actionIconsClasses from "./ActionIcons.module.scss";
import buttonClasses from "./Buttons.module.scss";
import inputClasses from "./Input.module.scss";
import menuClasses from "./Menu.module.scss";

const { bg, normal, focused, head, text, line } = colors;

const theme = createTheme({
  primaryColor: "violet",
  fontFamily: "Open Sans",
  headings: {
    fontFamily: "Open Sans",
    sizes: {
      h1: {
        fontSize: "56px",
        fontWeight: "700",
      },
      h2: {
        fontSize: "28px",
        fontWeight: "700",
      },
      h3: {
        fontSize: "19px",
        fontWeight: "600",
      },
    },
  },
  fontSizes: {
    md: "14px",
    lg: "19px",
    xl: "28px",
    xxl: "56px",
  },
  colors: {
    violet: [head, text, line, "#D1B5D9", "#C09ACF", "#B079C8", "#A468D0", focused, normal, bg],
  },
  white: text,

  components: {
    Menu: Menu.extend({
      defaultProps: {
        classNames: menuClasses,
      },
    }),
    Accordion: Accordion.extend({
      defaultProps: {
        classNames: accordionClasses,
      },
    }),
    PasswordInput: PasswordInput.extend({
      defaultProps: {
        classNames: inputClasses,
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        classNames: inputClasses,
      },
    }),
    Text: Text.extend({
      defaultProps: {
        c: colors.text,
      },
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        variant: "transparent",
        c: colors.text,
        radius: "xl",
        classNames: actionIconsClasses,
      },
    }),
    Paper: Paper.extend({
      defaultProps: {
        shadow: "md",
        radius: "lg",
        p: "lg",
        bg: colors.normal,
        c: colors.text,
      },
    }),
    Button: Button.extend({
      defaultProps: {
        radius: "xl",
        fw: "600",
        variant: "transparent",
        classNames: buttonClasses,
      },
    }),
    Anchor: Anchor.extend({
      defaultProps: {
        c: colors.text,
        p: "8px 16px",
      },
    }),
    SegmentedControl: SegmentedControl.extend({
      defaultProps: {
        color: colors.accent,
        styles: {
          label: {
            color: colors.text,
            padding: "8px 16px",
            fontWeight: "600",
          },
        },
        bg: "transparent",
        withItemsBorders: false,
        size: "md",
        radius: "xl",
      },
    }),
  },
});

export const Mantine: FC<{ children: ReactNode }> = ({ children }) => {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
