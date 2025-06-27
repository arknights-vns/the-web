"use client";

import PageTitle from "@/components/PageTitle";
import Arrow from "@/public/Arrow.png";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import React from "react";

type Event = {
    id: number;
    date: string;
    title: string;
};

const events: Event[] = [
    {
        id: 1,
        date: "2024-01-14",
        title: "The show must go on!",
    },
    {
        id: 2,
        date: "2024-01-14",
        title: "The show must go on!",
    },
    {
        id: 3,
        date: "2024-01-14",
        title: "The show must go on!",
    },
    {
        id: 4,
        date: "2024-01-14",
        title: "The show must go on!",
    },
    {
        id: 5,
        date: "2024-01-14",
        title: "The show must go on!",
    },
    {
        id: 6,
        date: "2024-01-14",
        title: "The show must go on!",
    },
];
type TimelineProps = {
    events: Event[];
};
function Timeline({ events }: TimelineProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [scales, setScales] = useState<Record<number, number>>({});
    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;
            const containerRect = container.getBoundingClientRect();
            const newScales: Record<number, number> = {};
            Array.from(container.children).forEach((child, index) => {
                const rect = (child as HTMLElement).getBoundingClientRect(); // Get each item's position
                const centerY = rect.top + rect.height / 2; // Y-coordinate of item's center
                const containerCenterY = containerRect.top + containerRect.height / 2; // Center Y of container

                // How far the item is from the center (smaller = closer to center)
                const distance = Math.abs(containerCenterY - centerY);

                // Calculate scale based on distance (1 when centered, down to 0.8 when far)
                const scale = Math.max(0.2, 1 - distance / 300); // You can tweak 300

                newScales[index] = scale;
            });
            setScales(newScales);
        };
        const container = containerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll); // Attach scroll listener
            handleScroll(); // Run once on mount to initialize scales
        }

        return () => container?.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div
            ref={containerRef}
            className={
                "scrollbar-none relative flex h-[60vh] snap-y snap-mandatory flex-col items-center overflow-y-scroll py-[20vh]"
            }
        >
            {events.map((ev, index) => {
                return (
                    <div
                        key={index}
                        className={
                            "mx-1/5 my-5 snap-center border-2 border-white p-10 transition-all duration-500 ease-in-out"
                        }
                        style={{
                            transform: `scale(${scales[index] || 0.8})`,
                            opacity: scales[index] ? scales[index] : 0.8,
                        }}
                    >
                        <div
                            className={
                                "flex flex-col items-center justify-center text-center text-white"
                            }
                        >
                            <h2 className={"pb-2 text-4xl leading-10"}>{ev.date}</h2>
                            <p className={"text-4xl leading-10"}>{ev.title}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default function SchedulePage() {
    return (
        <>
            <div className={"h-visible vns-background"}>
                <div className={"hero"}>
                    <div className={"hero-content text-center"}>
                        <div>
                            <PageTitle title={"TIMELINE"} favorText={""} dark />
                        </div>
                    </div>
                </div>
                <div>
                    <Timeline events={events} />
                    <div className={"absolute top-[calc(25vh+46px)] left-1/5"}>
                        <Image src={Arrow} width={23} height={23} alt={"arrow"} />
                    </div>
                    <div className={"absolute top-[calc(25vh+46px)] right-1/5"}>
                        <Image src={Arrow} width={23} height={23} alt={"arrow"} />
                    </div>
                    <div className={"absolute bottom-1/4 left-1/5 rotate-180"}>
                        <Image src={Arrow} width={23} height={23} alt={"arrow"} />
                    </div>
                    <div className={"absolute right-1/5 bottom-1/4 rotate-180"}>
                        <Image src={Arrow} width={23} height={23} alt={"arrow"} />
                    </div>
                </div>
            </div>
        </>
    );
}
