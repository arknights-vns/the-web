"use client";

import MemberBox from "@/components/MemberBox";
import PageTitle from "@/components/PageTitle/PageTitle";
import { VNS_Member } from "@/lib/vns_types";
import crewList from "@/public/crew.json";
import { useEffect, useState } from "react";

type HRListProps = {
    members: VNS_Member[];
};

function CrewList(props: HRListProps) {
    const eliteMembers = props.members.slice(0, 4);
    const remainingMembers = props.members.slice(4);

    return (
        <>
            {/* The reason for the horrible code is that the CEO want to have 4-5-5 layout. */}
            {/* But it looks utterly dogshit on mobile, so falling back to the default one on that. */}
            <div className={"hidden place-content-center-safe lg:block"}>
                <div
                    className={
                        "mb-4 flex flex-col place-content-center-safe items-center md:flex-row"
                    }
                >
                    {eliteMembers.map((member) => {
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
                <div
                    className={
                        "grid place-content-center-safe sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5"
                    }
                >
                    {remainingMembers.map((member) => {
                        return (
                            <div key={member.name} className={"w-full md:w-auto"}>
                                <MemberBox
                                    name={member.name}
                                    role={member.role}
                                    quote={member.quote}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div
                className={
                    "grid place-content-center-safe sm:grid-cols-1 md:grid-cols-3 lg:hidden lg:grid-cols-5"
                }
            >
                {props.members.map((member) => {
                    return (
                        <div key={member.name} className={"w-full md:w-auto"}>
                            <MemberBox name={member.name} role={member.role} quote={member.quote} />
                        </div>
                    );
                })}
            </div>
        </>
    );
}

function PartnerList(props: HRListProps) {
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

    const members = crewList.members;
    const partners = crewList.partners;

    return (
        <div className={"h-visible vns-background"}>
            <div className={"hero"}>
                <div className={"hero-content text-center"}>
                    <div>
                        <PageTitle
                            title={"Tổ chức"}
                            favorText={
                                "Những người đã góp hết sức mình để mang đến cho các bạn những cái event cực cháy."
                            }
                            dark
                        />
                    </div>
                </div>
            </div>
            <div
                className={
                    "tabs tabs-border sticky top-[70px] z-0 h-[calc(100vh-70px)] place-content-center-safe overflow-hidden rounded-none"
                }
                data-theme={"dark"}
            >
                <input
                    type={"radio"}
                    name={"my_tabs_6"}
                    className={"tab sm:text-md text-base-content w-1/2 md:text-lg lg:text-2xl"}
                    aria-label={"Dreamchasers"}
                    checked={crewTab === "dreamchasers"}
                    onChange={() => setCrewTab("dreamchasers")}
                />
                <div className={"tab-content overflow-y-auto border-t-gray-400 py-10"}>
                    <CrewList members={members} />
                </div>
                <input
                    type={"radio"}
                    name={"my_tabs_6"}
                    className={"tab sm:text-md text-base-content w-1/2 md:text-lg lg:text-2xl"}
                    aria-label={"Hợp tác phát triển"}
                    checked={crewTab === "partners"}
                    onChange={() => setCrewTab("partners")}
                />
                <div className={"tab-content overflow-y-auto border-t-gray-400 py-10"}>
                    <PartnerList members={partners} />
                </div>
            </div>
        </div>
    );
}
