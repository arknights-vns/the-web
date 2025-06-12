import OrganizerImage from "@/components/OrganizerImage";
import DRCH_Banner from "@/public/DRCH_Banner.png";
import VCL_Banner from "@/public/organizers/vcl_banner.png";
import VNS_Banner from "@/public/organizers/vns_banner.png";
import Quang from "@/public/quang.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div
            className={"hero layout-height layout-height-sm"}
            style={{
                backgroundImage: `url(${Quang.src})`,
                width: "100%",
                height: "auto",
            }}
        >
            <div className={"hero-overlay"}></div>
            <div
                className={
                    "hero-content flex flex-col place-content-center-safe gap-y-5"
                }
            >
                <Image
                    className={"invert"}
                    src={DRCH_Banner}
                    alt={"DRCH"}
                    height={185}
                />

                <div
                    className={
                        "easter-egg-for-members hidden font-light text-white italic"
                    }
                >
                    Every artist paints with a fiery soul <br />
                    Every poet weaves words into prayers <br />
                    Every dream has its own chasers. <br />
                    And we, &quot;The Dreamchasers&quot;, <br />
                    will be the ones to carve it from hope.
                </div>

                <div className={"text-xl text-white"}>
                    Sẽ ra mắt vào tháng 8{" "}
                    <span className={"italic"}>(chắc thế)</span>
                </div>

                <div
                    className={
                        "absolute bottom-5 mx-4 flex flex-col gap-y-2 text-center"
                    }
                >
                    <span className={"text-md text-white italic"}>
                        Được mang đến cho bạn bởi
                    </span>
                    <div
                        className={
                            "flex flex-col gap-x-10 gap-y-4 text-white lg:flex-row"
                        }
                    >
                        <OrganizerImage src={VNS_Banner} alt={"VNS_Banner"} />
                        <OrganizerImage src={VCL_Banner} alt={"VCL_Banner"} />
                    </div>
                    <Link
                        href={"/about/crew"}
                        className={"text-sm text-white italic underline"}
                    >
                        và hơn thế nữa
                    </Link>
                </div>
            </div>
        </div>
    );
}
