import { VNS_Member } from "@/lib/vns_types";
import Image from "next/image";

export default function MemberBox(props: VNS_Member) {
    return (
        <div className={"my-auto h-65 w-70 p-8 text-center"}>
            <Image
                className={"mx-auto rounded-full shadow-lg"}
                src={`/crew/${props.name}.png`}
                width={100}
                height={100}
                alt={"VNS_Crew"}
            />
            <div className={"py-1 text-xl font-extrabold"}>{props.name}</div>
            <div className={`crew-role-generic py-1 ${props.role}`}>
                {props.role.replaceAll("_", " ")}
            </div>
            {props.quote !== "" && (
                <div className={"py-1 text-xs text-gray-600 italic"}>
                    &#34;{props.quote}&#34;
                </div>
            )}
        </div>
    );
}
