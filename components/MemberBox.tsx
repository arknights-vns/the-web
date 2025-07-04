import { VNS_Member } from "@/lib/vns_types";
import Image from "next/image";

export default function MemberBox(props: VNS_Member) {
    return (
        <div className={"mb-4 flex max-h-64 min-w-64 flex-col gap-y-2"}>
            <Image
                className={"self-center rounded-full ring-1 ring-white"}
                src={`/crew/${props.name}.png`}
                width={100}
                height={100}
                alt={"VNS_Crew"}
            />
            <div className={"text-base-content text-center text-xl font-bold"}>{props.name}</div>
            {/*{props.quote !== "" && (*/}
            {/*    <div className={"text-md text-base-content text-center font-extralight italic"}>*/}
            {/*        &#34;{props.quote}&#34;*/}
            {/*    </div>*/}
            {/*)}*/}
            <div className={"space-x-2 self-center"}>
                {Array.isArray(props.role) &&
                    props.role.map((role: string) => (
                        <span key={role} className={`crew-role-container ${role} px-3 py-1`}>
                            {role.replaceAll("_", " ")}
                        </span>
                    ))}
            </div>
        </div>
    );
}
