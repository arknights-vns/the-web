// import InProgress from "@/components/InProgress";
import PageTitle from "@/components/PageTitle";
import Hourglass from "@/public/Hourglass.png";
import Image from "next/image";
import React from "react";

const scheduleItems = [
    {
        id: 1,
        time: "09:15",
        content: "Mở bán vé\n&\nBắt đầu Offline",
    },
    {
        id: 2,
        time: "09:30",
        content: "Mini-games",
    },
    {
        id: 3,
        time: "12:20",
        content: "Gacha banner",
    },
    {
        id: 4,
        time: "13:25",
        content: "Tournament",
    },
    {
        id: 5,
        time: "15:00",
        content: "Special Program\n&\nKết thúc event",
    },
];

export default function SchedulePage() {
    return (
        <>
            <div className={"h-visible vns-background"}>
                <div className={"hero"}>
                    <div className={"hero-content text-center"}>
                        <div>
                            <PageTitle title={"LỊCH TRÌNH"} favorText={""} dark />
                        </div>
                    </div>
                </div>
                <div className={"h-full flex-1 px-40 pt-30"}>
                    <div className={"grid grid-cols-5"}>
                        {scheduleItems.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className={"h-full w-full flex-1 place-content-center-safe"}
                                >
                                    <div
                                        className={
                                            "flex h-full flex-col items-center justify-center text-center text-white"
                                        }
                                    >
                                        <h1 className={"text-lg font-semibold"}>{item.time}</h1>
                                        <h2 className={"text-base whitespace-pre-line"}>
                                            {item.content}
                                        </h2>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={"mt-6 flex text-white"}>
                        {scheduleItems.map((item, index) => (
                            <React.Fragment key={item.id}>
                                {/* Left line (skip for first) */}
                                {index !== 0 ? (
                                    <div className={"h-px flex-1 self-center bg-white"} />
                                ) : (
                                    <div className={"h-px flex-1 self-center"} />
                                )}

                                {/* Roman numeral */}
                                <div className={"mx-2 w-12 text-center font-serif text-4xl"}>
                                    {["I", "II", "III", "IV", "V"][index]}
                                </div>

                                {/* Right line (skip for last) */}
                                {index !== scheduleItems.length - 1 ? (
                                    <div className={"h-px flex-1 self-center bg-white"} />
                                ) : (
                                    <div className={"h-px flex-1 self-center"} />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                    <div className={"mt-20 flex w-full justify-center"}>
                        <Image src={Hourglass} width={32} height={32} alt={"time"} />
                    </div>
                </div>
            </div>
        </>
    );
}
