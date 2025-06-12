// import DRCH from "@/public/DRCH_Banner.png";
import TheShowMustGoOn from "@/public/retro/the-show-must-go-on/the-show-must-go-on.jpg";
import Image from "next/image";
import Link from "next/link";

export default function RetroPage() {
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
                            Kỷ niệm
                        </h1>
                        <p className={"mt-5 italic"}>
                            Lâu lâu ôn lại quá khứ, tại sao không?
                        </p>
                    </div>
                </div>
            </div>
            <div
                className={
                    "mx-14 flex flex-col flex-wrap content-center justify-center gap-y-8"
                }
            >
                <Link
                    href={"/retro/the-show-must-go-on"}
                    className={
                        "card lg:card-side h-60 shadow-md hover:border-1 hover:border-gray-400"
                    }
                >
                    <figure>
                        <Image
                            src={TheShowMustGoOn}
                            alt={"The_Show_Must_Go_On"}
                        />
                    </figure>
                    <div className={"card-body"}>
                        <div className={"font-lg card-title hover:underline"}>
                            VNS Offline 2024: The Show Must Go On!
                        </div>
                        <p>
                            Offline đầu tiên của VNS, cũng như là tiền đề cho
                            Dreamchasers và VNS Network.
                        </p>
                    </div>
                </Link>
                {/*<Link*/}
                {/*    href={"/"}*/}
                {/*    className={"card lg:card-side h-60 w-auto shadow-md hover:border-1 hover:border-gray-400"}*/}
                {/*>*/}
                {/*    <figure>*/}
                {/*        <Image src={DRCH} alt={"Dreamchasers"} />*/}
                {/*    </figure>*/}
                {/*    <div className={"card-body"}>*/}
                {/*        <div className={"font-lg card-title hover:underline"}>VNS Offline 2025: Dreamchasers</div>*/}
                {/*        <p>Nó còn chưa ra mắt...</p>*/}
                {/*    </div>*/}
                {/*</Link>*/}
            </div>
        </>
    );
}
