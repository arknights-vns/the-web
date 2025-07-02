"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

import Text from "../Text/Text";
import styles from "./NavBar.module.scss";

export default function NavBarItems({ isMobile = false }: { isMobile?: boolean }) {
    const links = [
        { name: "Tổ chức", href: "/crew" },
        { name: "Kỷ niệm", href: "/retro" },
    ];

    const pathname = usePathname();

    if (isMobile) {
        return (
            <>
                <li>
                    <details>
                        <summary>Sự kiện</summary>
                        <ul>
                            <li>
                                <Link href={"/event/timeline"}>Timeline</Link>
                            </li>
                            <li>
                                <Link href={"/event/schedule"}>Lịch trình</Link>
                            </li>
                            <li>
                                <Link href={"/event/location"}>Địa điểm</Link>
                            </li>
                        </ul>
                    </details>
                </li>
                {links.map((link) => (
                    <li key={link.name}>
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                ))}
                <li>
                    <details>
                        <summary>Tournament</summary>
                        <ul>
                            <li>
                                <Link href={"/tournament/overview"}>Giới thiệu</Link>
                            </li>
                            <li>
                                <Link href={"/tournament/rules"}>Luật chơi</Link>
                            </li>
                            <li>
                                <Link href={"/tournament/prizes"}>Giải thưởng</Link>
                            </li>
                        </ul>
                    </details>
                </li>
            </>
        );
    }

    return (
        <div className={styles.nav_item_wrapper}>
            <div className={"dropdown dropdown-hover"}>
                <Text
                    type={"title-4"}
                    className={classNames(styles.link_item, {
                        [styles.active]: pathname.includes("/event"),
                    })}
                >
                    Sự kiện
                </Text>
                <ul
                    tabIndex={0}
                    className={
                        "dropdown-content menu rounded-box z-1000 w-52 bg-white p-2 shadow-sm"
                    }
                >
                    <li>
                        <Link href={"/event/timeline"}>Timeline</Link>
                    </li>
                    <li>
                        <Link href={"/event/schedule"}>Lịch trình</Link>
                    </li>
                    <li>
                        <Link href={"/event/location"}>Địa điểm</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.divider} />
            {links.map((link, index) => (
                <Fragment key={link.name}>
                    {index !== 0 && <div className={styles.divider} />}
                    <Link
                        href={link.href}
                        className={classNames(styles.link_item, {
                            [styles.active]: pathname === link.href,
                        })}
                    >
                        <Text type={"title-4"}>{link.name}</Text>
                    </Link>
                </Fragment>
            ))}
            <div className={styles.divider} />
            <div className={"dropdown dropdown-hover"}>
                <Text
                    type={"title-4"}
                    className={classNames(styles.link_item, {
                        [styles.active]: pathname.includes("/tournament"),
                    })}
                >
                    Tournament
                </Text>
                <ul
                    tabIndex={0}
                    className={
                        "dropdown-content menu rounded-box z-1000 w-52 bg-white p-2 shadow-sm"
                    }
                >
                    <li>
                        <Link href={"/tournament/overview"}>Giới thiệu</Link>
                    </li>
                    <li>
                        <Link href={"/tournament/rules"}>Luật chơi </Link>
                    </li>
                    <li>
                        <Link href={"/tournament/prize"}>Giải thưởng</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
