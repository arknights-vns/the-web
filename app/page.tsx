"use client";

import OrganizerImage from "@/components/OrganizerImage";
import DRCH_Banner from "@/public/DRCH_Banner_Group.png";
import BG_1 from "@/public/landing-bg/BG_1.png";
import BG_2 from "@/public/landing-bg/BG_2.jpg";
import BG_3 from "@/public/landing-bg/BG_3.jpg";
import BG_4 from "@/public/landing-bg/BG_4.jpg";
import BG_5 from "@/public/landing-bg/BG_5.jpg";
import BG_6 from "@/public/landing-bg/BG_6.jpg";
import Jiangles_Banner from "@/public/organizers/jiangles_banner.png";
import ModSquad_Banner from "@/public/organizers/mod_squad_banner.png";
import VNS_Banner from "@/public/organizers/vns_banner.png";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export default function Home() {
    const images = [BG_1, BG_2, BG_3, BG_4, BG_5, BG_6];
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

    return (
        <div className={"hero h-visible"}>
            {/* Embla Carousel Autoplay Section */}
            <div className={"embla absolute inset-0 z-0 h-full w-full"} ref={emblaRef}>
                <div className={"embla__container h-full w-full"}>
                    {images.map((img, idx) => (
                        <div className={"embla__slide relative h-full w-full"} key={idx}>
                            <Image
                                src={img}
                                alt={`Banner ${idx + 1}`}
                                fill
                                style={{ objectFit: "cover" }}
                                priority={idx === 0}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className={"hero-overlay z-0"}></div>
            <div className={"hero-content flex flex-col place-content-center-safe"}>
                <Image src={DRCH_Banner} alt={"DRCH"} height={185} />

                <div className={"absolute bottom-5 mx-4 flex flex-col gap-y-2 text-center"}>
                    <span className={"text-lg font-thin text-white"}>Được mang đến bởi</span>
                    <div className={"flex items-center gap-x-4 gap-y-4 text-white lg:gap-x-8"}>
                        <OrganizerImage src={VNS_Banner} alt={"VNS"} />
                        <div className={"hidden text-xl text-white lg:block"}>•</div>
                        <OrganizerImage src={ModSquad_Banner} alt={"Mod_Squad"} />
                        <div className={"hidden text-xl text-white lg:block"}>•</div>
                        <OrganizerImage src={Jiangles_Banner} alt={"Jiangles"} />
                    </div>
                </div>
            </div>
        </div>
    );
}
