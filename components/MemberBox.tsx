import { VNS_Member } from "@/lib/vns_types";
import Image from "next/image";

export default function MemberBox(props: VNS_Member) {
    return (
        <div className={"h-60 w-72"}>
            <Image
                className={"mx-auto mb-2 rounded-full ring-1 ring-white"}
                src={`/crew/${props.name}.png`}
                width={100}
                height={100}
                alt={"VNS_Crew"}
            />
            <div className={"text-base-content text-center text-xl font-bold"}>{props.name}</div>
            {props.quote !== "" && (
                <div className={"text-md text-base-content text-center font-extralight"}>
                    &#34;{props.quote}&#34;
                </div>
            )}
            <div className={"mt-2 flex justify-center gap-x-2"}>
                {Array.isArray(props.role) &&
                    props.role.map((role: string) => (
                        <span key={role} className={`crew-role-container ${role}`}>
                            {role.replaceAll("_", " ")}
                        </span>
                    ))}
            </div>
        </div>
    );
}
