import classNames from "classnames";
import { CSSProperties, FC, ReactNode } from "react";
import { JSX } from "react";

import styles from "./Text.module.scss";

export type TypographyType =
    | "headline-1"
    | "headline-2"
    | "headline-3"
    | "headline-4"
    | "headline-5"
    | "headline-6"
    | "title-1"
    | "title-2"
    | "title-3"
    | "title-4"
    | "title-5"
    | "body-1"
    | "body-2"
    | "body-3"
    | "body-4"
    | "label-1"
    | "label-2"
    | "label-3"
    | "label-4"
    | "label-5";

export interface TypographyProps {
    id?: string;
    type?: TypographyType;
    weight?: 400 | 500 | 600 | 700 | 800 | 900;
    children?: ReactNode;
    color?: string;
    className?: string;
    onClick?: () => void;
    htmlTag?: string;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    };
    style?: CSSProperties;
    htmlFor?: string;
    suppressHydrationWarning?: boolean;
}

const Typography: FC<TypographyProps> = ({
    type = "body-2",
    children,
    color,
    className,
    onClick,
    htmlTag,
    weight,
    style,
    id,
    suppressHydrationWarning = false,
    ...rest
}) => {
    const typeList: string[] = type?.split("-") || [];

    const renderTag = (): string => {
        if (htmlTag) return htmlTag;

        switch (typeList[0]) {
            case "headline":
                return `h${typeList[1]}`;
            case "display":
            case "title":
                return "div";
            default:
                return "p";
        }
    };

    const CustomTag = renderTag() as keyof JSX.IntrinsicElements;

    return (
        <CustomTag
            suppressHydrationWarning={suppressHydrationWarning}
            id={id}
            className={classNames(
                styles.typography,
                styles[`${type.replaceAll("-", "_")}`],
                styles[`${typeList[0]}`],
                styles[`${typeList[0]}_${typeList[1]}`],
                className,
                {
                    "cursor-pointer": !!onClick,
                },
            )}
            style={{ color, fontWeight: !weight ? undefined : weight, ...style }}
            onClick={onClick}
            {...rest}
        >
            {children}
        </CustomTag>
    );
};

export default Typography;
