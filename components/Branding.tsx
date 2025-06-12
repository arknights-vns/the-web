import Image from "next/image";
import Link from "next/link";

export default function Branding() {
    return (
        <>
            <Link href={"/"}>
                <Image
                    src={"/VNS_Logo.png"}
                    alt={"VNS-logo"}
                    height={50}
                    width={50}
                    loading={"eager"}
                    priority
                />
            </Link>
            <div
                className={
                    "block place-content-center-safe p-1 text-sm font-bold lg:text-xl"
                }
            >
                <Link href={"/"}>Dreamchasers</Link>
            </div>
        </>
    );
}
