import classNames from "classnames";
import { ReactNode } from "react";

interface ContainerProps {
    className?: string;
    children?: ReactNode;
}

export default function Container(props: ContainerProps) {
    return (
        <div className={classNames("m-auto w-full max-w-[1200px] p-3", props.className)}>
            {props.children}
        </div>
    );
}
