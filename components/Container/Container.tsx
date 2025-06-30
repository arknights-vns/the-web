import classNames from "classnames";
import { FC, ReactNode } from "react";

interface ContainerProps {
    className?: string;
    children?: ReactNode;
}

const Container: FC<ContainerProps> = ({ className, children }) => {
    return (
        <div className={classNames(className, "m-auto w-full max-w-[1200px] p-3")}>{children}</div>
    );
};

export default Container;
