import Link from "next/link";

export default function NavbarItems() {
    // https://stackoverflow.com/questions/53262263/target-active-link-when-the-route-is-active-in-next-js
    // https://nextjs.org/docs/app/api-reference/functions/use-router#migrating-from-nextrouter

    return (
        <>
            <li>
                <Link href={"/about/dreamchasers"}>Chúng tôi là ai?</Link>
            </li>
            <li>
                <details open={false}>
                    <summary>Nhân sự</summary>
                    <ul>
                        <li>
                            <Link href={"/about/crew"}>&#34;Dreamchasers&#34;</Link>
                        </li>
                        <li>
                            <Link href={"/about/partners"}>Đối tác</Link>
                        </li>
                    </ul>
                </details>
            </li>
            <li>
                <Link href={"/timeline"}>Kế hoạch</Link>
            </li>
        </>
    );
}
