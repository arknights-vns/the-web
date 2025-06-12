import Link from "next/link";

export default function NavbarItems() {
    // https://stackoverflow.com/questions/53262263/target-active-link-when-the-route-is-active-in-next-js
    // https://nextjs.org/docs/app/api-reference/functions/use-router#migrating-from-nextrouter

    return (
        <>
            <li>
                <Link
                    className={"font-bold lg:w-40 lg:justify-center"}
                    href={"/about/dreamchasers"}
                >
                    Tụi mình là ai?
                </Link>
            </li>
            <li>
                <Link
                    className={"font-bold lg:w-25 lg:justify-center"}
                    href={"/about/crew"}
                >
                    Staff
                </Link>
            </li>
            <li>
                <Link
                    className={"font-bold lg:w-30 lg:justify-center"}
                    href={"/timeline"}
                >
                    Timeline
                </Link>
            </li>
            <li>
                <Link
                    className={"font-bold lg:w-30 lg:justify-center"}
                    href={"/retro"}
                >
                    Kỷ niệm
                </Link>
            </li>
            <li>
                <Link
                    className={
                        "block font-bold lg:hidden lg:w-30 lg:justify-center"
                    }
                    href={"/retro"}
                >
                    Tournament
                </Link>
            </li>
        </>
    );
}
