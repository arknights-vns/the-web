import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type OrganizerImageProps = {
    src: StaticImport;
    alt: string;
};

export default function OrganizerImage(props: OrganizerImageProps) {
    return (
        <Image
            src={props.src}
            alt={props.alt}
            className={"h-14 w-auto object-contain"}
        />
    );
}
