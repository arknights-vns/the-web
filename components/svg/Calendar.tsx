type CalendarProps = {
    size: number;
};

export default function Calendar(props: CalendarProps) {
    return (
        <svg
            xmlns={"http://www.w3.org/2000/svg"}
            width={props.size}
            height={props.size}
            fill={"none"}
            viewBox={"0 0 24 24"}
            stroke={"currentColor"}
            strokeWidth={"2"}
        >
            <rect
                x={"3"}
                y={"4"}
                width={"18"}
                height={"18"}
                rx={"2"}
                ry={"2"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
            />
            <line x1={"16"} y1={"2"} x2={"16"} y2={"6"} strokeLinecap={"round"} strokeLinejoin={"round"} />
            <line x1={"8"} y1={"2"} x2={"8"} y2={"6"} strokeLinecap={"round"} strokeLinejoin={"round"} />
            <line x1={"3"} y1={"10"} x2={"21"} y2={"10"} strokeLinecap={"round"} strokeLinejoin={"round"} />
        </svg>
    );
}
