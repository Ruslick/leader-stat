import {FC, memo} from "react";
import classNames from "classnames";

import styles from "./Flex.module.scss";

interface FlexProps {
    row?: boolean;
    gap?: number;
    justify?: "start" | "end" | "center" | "space-between" | "space-around";
    align?: "start" | "end" | "center";
    wrap?: boolean;
    grow?: boolean;
    h?: number | string;
    w?: number | string;
    m?: number | string; // margin
    p?: number | string; // padding

    children: React.ReactNode;
}

export const Flex: FC<FlexProps> = memo(
    ({row, gap = 3, justify, align, children, wrap, grow, h = "auto", w = "auto", m = 0, p = 0}) => {
        const className = classNames(styles.flex, {
            [styles.row]: row,
            [styles.wrap]: wrap,
            [styles.grow]: grow,
        });

        const style = {
            gap: `var(--s${gap})`,
            justifyContent: justify,
            alignItems: align,
            height: typeof h === "number" ? `var(--s${h})` : h,
            width: typeof w === "number" ? `var(--s${w})` : w,
            margin: typeof m === "number" ? `var(--s${m})` : m,
            padding: typeof p === "number" ? `var(--s${p})` : p,
        };
        return (
            <div className={className} style={style}>
                {children}
            </div>
        );
    },
);
