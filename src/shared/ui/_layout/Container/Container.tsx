import { FC, HTMLAttributes } from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
  w?: string | number;
  h?: string | number;
  m?: number;
  p?: number;
  mx?: number;
  my?: number;
  px?: number;
  py?: number;
  mt?: number;
  mb?: number;
  pt?: number;
  pb?: number;
  ml?: number;
  mr?: number;
  pl?: number;
  pr?: number;
}

export const Container: FC<HTMLAttributes<HTMLDivElement> & ContainerProps> = ({
  children,
  w = "auto",
  h = "auto",
  ...props
}) => {
  let margin;
  if (props.m) {
    margin = `var(--s${props.m})`;
  } else if (props.mx) {
    margin = `var(--s${props.mx}) 0)`;
  } else if (props.my) {
    margin = `0 var(--s${props.my})`;
  }

  let padding;

  if (props.p) {
    padding = `var(--s${props.p})`;
  } else if (props.px) {
    padding = `var(--s${props.px}) 0`;
  } else if (props.py) {
    padding = `0 var(--s${props.py})`;
  }

  const style = {
    width: typeof w === "number" ? `var(--s${w})` : w,
    height: typeof h === "number" ? `var(--s${h})` : h,
    margin,
    padding,
    marginTop: props.mt && `var(--s${props.mt})`,
    marginBottom: props.mb && `var(--s${props.mb})`,
    paddingTop: props.pt && `var(--s${props.pt})`,
    paddingBottom: props.pb && `var(--s${props.pb})`,
    marginLeft: props.ml && `var(--s${props.ml})`,
    marginRight: props.mr && `var(--s${props.mr})`,
    paddingLeft: props.pb && `var(--s${props.pl})`,
    paddingRight: props.pr && `var(--s${props.pr})`,
  };
  return (
    <div className={styles.container} {...props} style={style}>
      {children}
    </div>
  );
};
