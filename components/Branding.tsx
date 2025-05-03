import Image from "next/image";
import Link from "next/link";

export default function Branding() {
    return (
        <>
            <Link href={"/"}>
                <Image src={"/VNS_Logo.png"} alt={"VNS-logo"} height={40} width={40} loading={"eager"} priority />
            </Link>
            <div className={"block content-center text-sm font-bold lg:px-5 lg:text-xl"}>
                <Link href={"/"}>Dreamchasers</Link>
            </div>
        </>
    );
}
