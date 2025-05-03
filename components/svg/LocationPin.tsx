type LocationPinProps = {
    size: number;
};

export default function LocationPin(props: LocationPinProps) {
    return (
        <svg
            xmlns={"http://www.w3.org/2000/svg"}
            width={props.size}
            height={props.size}
            fill={"none"}
            viewBox={"0 0 24 24"}
            stroke={"currentColor"}
            strokeWidth={2}
        >
            <path strokeLinecap={"round"} strokeLinejoin={"round"} d={"M12 11.5a3 3 0 100-6 3 3 0 000 6z"} />
            <path
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                d={"M12 21s7-6.26 7-11.5a7 7 0 10-14 0C5 14.74 12 21 12 21z"}
            />
        </svg>
    );
}
