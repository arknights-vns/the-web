import DRCH_Logo from "@/public/DRCH_Logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Branding() {
    return (
        <>
            <Link className={"ml-6"} href={"/"}>
                <Image
                    src={DRCH_Logo}
                    alt={"DRCH_logo"}
                    width={77}
                    height={53}
                    loading={"eager"}
                    priority
                />
            </Link>
            <div
                className={
                    "hidden place-content-center-safe p-1 font-bold lg:block lg:text-xl"
                }
            >
                <Link href={"/"}>Dreamchasers</Link>
            </div>
        </>
    );
}
