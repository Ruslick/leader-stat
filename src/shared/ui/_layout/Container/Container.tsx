import { FC, HTMLAttributes, memo, useEffect, useState } from "react";
import classNames from "classnames";

import styles from "./Container.module.scss";

interface ContainerProps {
  absolute?: boolean;
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
  t?: number | string;
  b?: number | string;
  r?: number | string;
  l?: number | string;
}

export const Container: FC<HTMLAttributes<HTMLDivElement> & ContainerProps> = memo(
  ({ children, w = "auto", h = "auto", absolute, t, b, r, l, ...props }) => {
    const [margin, setMargin] = useState<{
      marginTop?: string;
      marginRight?: string;
      marginBottom?: string;
      marginLeft?: string;
      margin?: string;
    }>();
    const [padding, setPadding] = useState<{
      paddingTop?: string;
      paddingRight?: string;
      paddingBottom?: string;
      paddingLeft?: string;
      padding?: string;
    }>();

    useEffect(() => {
      if (props.m) {
        setMargin({
          margin: `var(--s${props.m})`,
        });
      }

      if (props.mx) {
        setMargin({
          marginLeft: `var(--s${props.mx})`,
          marginRight: `var(--s${props.mx})`,
        });
      }
      if (props.my) {
        setMargin({
          marginTop: `var(--s${props.my})`,
          marginBottom: `var(--s${props.my})`,
        });
      }
      if (props.mt) {
        setMargin({
          marginTop: `var(--s${props.mt})`,
        });
      }
      if (props.mb) {
        setMargin({
          marginBottom: `var(--s${props.mb})`,
        });
      }
      if (props.ml) {
        setMargin({
          marginLeft: `var(--s${props.ml})`,
        });
      }
      if (props.mr) {
        setMargin({
          marginRight: `var(--s${props.mr})`,
        });
      }
    }, [props.m, props.mx, props.my, props.mt, props.mb, props.ml, props.mr]);

    useEffect(() => {
      if (props.p) {
        setPadding({
          padding: `var(--s${props.p})`,
        });
      }
      if (props.px) {
        setPadding({
          paddingRight: `var(--s${props.px})`,
          paddingLeft: `var(--s${props.px})`,
        });
      }
      if (props.py) {
        setPadding({
          paddingTop: `var(--s${props.py})`,
          paddingBottom: `var(--s${props.py})`,
        });
      }
      if (props.pt) {
        setPadding({
          paddingTop: `var(--s${props.pt})`,
        });
      }
      if (props.pb) {
        setPadding({
          paddingBottom: `var(--s${props.pb})`,
        });
      }
      if (props.pl) {
        setPadding({
          paddingLeft: `var(--s${props.pl})`,
        });
      }
      if (props.pr) {
        setPadding({
          paddingRight: `var(--s${props.pr})`,
        });
      }
    }, [props.p, props.px, props.py, props.pt, props.pb, props.pl, props.pr]);

    return (
      <div
        className={classNames(styles.container, {
          [styles.absolute]: absolute,
        })}
        {...props}
        style={{
          width: typeof w === "number" ? `var(--s${w})` : w,
          height: typeof h === "number" ? `var(--s${h})` : h,
          top: typeof t === "number" ? `var(--s${t})` : t,
          bottom: typeof b === "number" ? `var(--s${b})` : b,
          right: typeof r === "number" ? `var(--s${r})` : r,
          left: typeof l === "number" ? `var(--s${l})` : l,
          ...margin,
          ...padding,
        }}
      >
        {children}
      </div>
    );
  },
);
