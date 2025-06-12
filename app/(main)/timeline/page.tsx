import TimelineItem from "@/components/TimelineItem";
import Link from "next/link";

export default function EventTimeLine() {
    return (
        <>
            <div className={"hero w-full"}>
                <div className={"hero-content text-center"}>
                    <div>
                        <h1
                            className={
                                "mt-5 text-5xl font-bold underline underline-offset-8"
                            }
                        >
                            Timeline
                        </h1>
                        <p className={"mt-5"}>
                            Để tiện lợi trong quá trình cập nhật thông tin
                            offline, các bạn vui lòng chú ý timeline bên dưới.
                            <br />
                            Và đừng quên theo dõi fanpage{" "}
                            <Link
                                className={"font-bold underline"}
                                href={"https://www.facebook.com/terrastationvn"}
                            >
                                Trạm dừng chân chốn Terra
                            </Link>{" "}
                            nhé!
                            <br />
                            Hẹn gặp các bạn tại Offline #2: Dreamchasers.
                        </p>
                    </div>
                </div>
            </div>
            <div className={"py-10"}>
                <ul
                    className={
                        "timeline timeline-vertical lg:timeline-horizontal flex-1"
                    }
                >
                    <TimelineItem
                        date={"2024-01-14"}
                        data={"Offline #1: The show must go on!"}
                        href={
                            "https://www.facebook.com/groups/arknights.vietnam.station/posts/2035816776811242/"
                        }
                        finished={true}
                        middle={false}
                        head={true}
                        tail={false}
                    />

                    <TimelineItem
                        date={"2024-12-31"}
                        data={"Thông báo ra mắt Offline #2: Dreamchasers."}
                        href={
                            "https://www.facebook.com/groups/arknights.vietnam.station/posts/2299747417084842/"
                        }
                        finished={true}
                        middle={true}
                        head={false}
                        tail={false}
                    />

                    <TimelineItem
                        date={"2025-01-12"}
                        data={"Khảo sát 'Dreamchasers' lần 1."}
                        href={
                            "https://www.facebook.com/groups/arknights.vietnam.station/posts/2308946422831608/"
                        }
                        finished={true}
                        middle={true}
                        head={false}
                        tail={false}
                    />

                    <TimelineItem
                        date={"2025-05-04"}
                        data={"Khảo sát 'Dreamchasers' lần 2."}
                        href={
                            "https://www.facebook.com/groups/arknights.vietnam.station/posts/2409448572781392/"
                        }
                        finished={true}
                        middle={true}
                        head={false}
                        tail={false}
                    />

                    <TimelineItem
                        date={"2025-??-??"}
                        data={"Re:Memories of the Show - ep. 01"}
                        href={
                            "https://www.facebook.com/groups/arknights.vietnam.station/posts/2439802763079306"
                        }
                        finished={false}
                        middle={false}
                        head={false}
                        tail={false}
                    />

                    <TimelineItem
                        date={"2025-??-??"}
                        data={"Re:Memories of the Show - ep. 02"}
                        href={
                            "https://www.facebook.com/groups/arknights.vietnam.station/posts/2439802763079306"
                        }
                        finished={false}
                        middle={false}
                        head={false}
                        tail={false}
                    />

                    <TimelineItem
                        date={"2025-??-??"}
                        data={"Re:Memories of the Show - ep. 03"}
                        href={
                            "https://www.facebook.com/groups/arknights.vietnam.station/posts/2439802763079306"
                        }
                        finished={false}
                        middle={false}
                        head={false}
                        tail={false}
                    />

                    <TimelineItem
                        date={"2025-??-??"}
                        data={"??????"}
                        href={""}
                        finished={false}
                        middle={false}
                        head={false}
                        tail={false}
                    />

                    <TimelineItem
                        date={"2025-08-10"}
                        data={"Offline #2: Dreamchasers"}
                        href={""}
                        finished={false}
                        middle={false}
                        tail={true}
                        head={false}
                    />
                </ul>
            </div>
        </>
    );
}
