import Image from "next/image";

function ClassIcon({
    operatorClass,
    active,
    onClick,
}: {
    operatorClass: string;
    active: boolean;
    onClick?: () => void;
}) {
    return (
        <div
            className={`flex h-9 w-9 items-center justify-center ${active ? "border-2 bg-[#22BBFF]" : "bg-black"} `}
            onClick={onClick}
        >
            <Image
                src={`/operator_classes/${operatorClass}.png`}
                alt={operatorClass}
                width={28}
                height={28}
                className={`object-contain ${active ? "grayscale invert" : ""} `}
            />
        </div>
    );
}

export default ClassIcon;
