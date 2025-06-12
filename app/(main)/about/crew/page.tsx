"use client";

import MemberBox from "@/components/MemberBox";
import { VNS_Member } from "@/lib/types/vns_member";
import crewList from "@/public/crew.json";
import { useEffect, useState } from "react";

type HRListProps = {
    members: VNS_Member[];
};

function HumanResourceList(props: HRListProps) {
    return (
        <>
            <div
                className={
                    "grid place-content-center-safe sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5"
                }
            >
                {props.members.map((member) => {
                    return (
                        <MemberBox
                            key={member.name}
                            name={member.name}
                            role={member.role}
                            quote={member.quote}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default function CrewPage() {
    const [crewTab, setCrewTab] = useState<string>(() => {
        // https://stackoverflow.com/a/76071002
        if (typeof window === "undefined") {
            return "dreamchasers";
        }

        const stored = window.localStorage.getItem("crew-tab");
        return stored && stored !== "" ? stored : "dreamchasers";
    });

    useEffect(() => {
        localStorage.setItem("crew-tab", crewTab);
    }, [crewTab]);

    const members: VNS_Member[] = crewList.members;
    const partners: VNS_Member[] = crewList.partners;

    return (
        <>
            <div className={"hero"}>
                <div className={"hero-content text-center"}>
                    <div>
                        <h1
                            className={
                                "mt-5 text-5xl font-bold underline underline-offset-8"
                            }
                        >
                            Staff
                        </h1>
                        <p className={"mt-5"}>
                            Những người đã góp hết sức mình để mang đến cho các
                            bạn những cái event cực cháy.
                        </p>
                    </div>
                </div>
            </div>
            <div className={"tabs tabs-border mt-4 place-content-center-safe"}>
                <input
                    type={"radio"}
                    name={"my_tabs_6"}
                    className={"tab w-1/2 sm:text-sm lg:text-lg"}
                    aria-label={"Dreamchasers"}
                    checked={crewTab === "dreamchasers"}
                    onChange={() => setCrewTab("dreamchasers")}
                />
                <div className={"tab-content border-base-300 p-6"}>
                    <HumanResourceList members={members} />
                </div>

                <input
                    type={"radio"}
                    name={"my_tabs_6"}
                    className={"tab w-1/2 sm:text-sm lg:text-lg"}
                    aria-label={"Hợp tác phát triển"}
                    checked={crewTab === "partners"}
                    onChange={() => setCrewTab("partners")}
                />
                <div className={"tab-content border-base-300 p-6"}>
                    <HumanResourceList members={partners} />
                </div>
            </div>
        </>
    );
}
