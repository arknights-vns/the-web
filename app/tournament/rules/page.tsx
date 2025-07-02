"use client";

import Container from "@/components/Container/Container";
import PageTitle from "@/components/PageTitle/PageTitle";
import Text from "@/components/Text/Text";
import ArrowIcon from "@/components/svg/ArrowIcon";
import BanIcon from "@/components/svg/BanIcon";
import ClockIcon from "@/components/svg/ClockIcon";
import ProgressBarIcon from "@/components/svg/ProgressBarIcon";
import TargetIcon from "@/components/svg/TargetIcon";
import styles from "@/styles/TournamentPage.module.scss";
import classNames from "classnames";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function RulePage() {
    const [carouseRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setCurrentSlide(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect();
        emblaApi.on("select", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <div className={classNames("vns-background overflow-y-hidden", styles.tournament_page)}>
            <div className={"hero max-w-screen"}>
                <div className={"hero-content max-w-screen text-center"}>
                    <Container>
                        <PageTitle title={"Tournament"} favorText={"Luật chơi"} dark />
                        <div className={styles.tournament_info}>
                            <div className={styles.bullet_wrapper}>
                                {Array.from({ length: 8 }).map((_, index) => {
                                    return (
                                        <div
                                            key={index}
                                            onClick={() => emblaApi?.scrollTo(index)}
                                            className={classNames(styles.bullet_item_dot, {
                                                [styles.bullet_item_dot_active]:
                                                    index === currentSlide,
                                            })}
                                        />
                                    );
                                })}
                            </div>
                            <div
                                ref={carouseRef}
                                className={classNames(styles.slide_container, "embla")}
                            >
                                <div
                                    className={classNames(
                                        "embla__container",
                                        styles.slide_container,
                                    )}
                                >
                                    <div className={classNames(styles.slide_item, "embla__slide")}>
                                        <Image
                                            src={"/tournament/tournament-rule-1.png"}
                                            alt={"Rule 1"}
                                            width={1600}
                                            height={1000}
                                            className={styles.slide_image}
                                        />
                                        <Text type={"headline-5"} weight={700} color={"white"}>
                                            1. Map
                                        </Text>
                                        <Text type={"body-1"} color={"white"}>
                                            Màn chơi sẽ được chọn là{" "}
                                            <span style={{ color: "#FFEF3C" }}>H14-4</span>
                                        </Text>
                                    </div>
                                    <div className={classNames(styles.slide_item, "embla__slide")}>
                                        <div className={styles.image_container_2}>
                                            <Image
                                                src={"/tournament/amiya-char.png"}
                                                alt={"Amiya Medic"}
                                                width={320}
                                                height={640}
                                                className={styles.image_2}
                                            />
                                            <Image
                                                src={"/tournament/tournament-rule-7.png"}
                                                alt={"Operator Slot"}
                                                width={320}
                                                height={640}
                                                className={styles.image_2}
                                            />
                                            <Image
                                                src={"/tournament/tournament-rule-7.png"}
                                                alt={"Operator Slot"}
                                                width={320}
                                                height={640}
                                                className={styles.image_2}
                                            />
                                            <Image
                                                src={"/tournament/tournament-rule-7.png"}
                                                alt={"Operator Slot"}
                                                width={320}
                                                height={640}
                                                className={styles.image_2}
                                            />
                                            <div className={classNames("relative", styles.image_2)}>
                                                <Image
                                                    src={"/tournament/tournament-rule-7.png"}
                                                    alt={"Operator Slot"}
                                                    width={320}
                                                    height={640}
                                                    className={"h-full w-full object-contain"}
                                                />
                                                <div className={styles.ban_icon_container}>
                                                    <BanIcon className={"h-18 w-20"} />
                                                </div>
                                            </div>
                                            <div className={classNames("relative", styles.image_2)}>
                                                <Image
                                                    src={"/tournament/tournament-rule-7.png"}
                                                    alt={"Operator Slot"}
                                                    width={320}
                                                    height={640}
                                                    className={"h-full w-full object-contain"}
                                                />
                                                <div className={styles.ban_icon_container}>
                                                    <BanIcon className={"h-18 w-20"} />
                                                </div>
                                            </div>
                                            <Image
                                                src={"/tournament/tournament-rule-7.png"}
                                                alt={"Operator Slot"}
                                                width={320}
                                                height={640}
                                                className={styles.image_2}
                                            />
                                            <Image
                                                src={"/tournament/tournament-rule-7.png"}
                                                alt={"Operator Slot"}
                                                width={320}
                                                height={640}
                                                className={styles.image_2}
                                            />
                                            <Image
                                                src={"/tournament/tournament-rule-7.png"}
                                                alt={"Rule 2"}
                                                width={320}
                                                height={640}
                                                className={styles.image_2}
                                            />
                                            <Image
                                                src={"/tournament/tournament-rule-7.png"}
                                                alt={"Operator Slot"}
                                                width={320}
                                                height={640}
                                                className={styles.image_2}
                                            />
                                            <div className={classNames("relative", styles.image_2)}>
                                                <Image
                                                    src={"/tournament/tournament-rule-7.png"}
                                                    alt={"Operator Slot"}
                                                    width={320}
                                                    height={640}
                                                    className={"h-full w-full object-contain"}
                                                />
                                                <div className={styles.ban_icon_container}>
                                                    <BanIcon className={"h-18 w-20"} />
                                                </div>
                                            </div>
                                            <div className={classNames("relative", styles.image_2)}>
                                                <Image
                                                    src={"/tournament/tournament-rule-7.png"}
                                                    alt={"Operator Slot"}
                                                    width={320}
                                                    height={640}
                                                    className={"h-full w-full object-contain"}
                                                />
                                                <div className={styles.ban_icon_container}>
                                                    <BanIcon className={"h-18 w-20"} />
                                                </div>
                                            </div>
                                        </div>
                                        <Text type={"headline-5"} weight={700} color={"white"}>
                                            2. Team build
                                        </Text>
                                        <Text type={"body-1"} color={"white"}>
                                            Squad của bạn tổng cộng chỉ có{" "}
                                            <span style={{ color: "#FFEF3C" }}>8 Operators</span>,
                                            <br />
                                            bao gồm 7 Operators tự chọn. Bắt buộc phải có{" "}
                                            <span style={{ fontWeight: "bold" }}>Amiya Medic</span>
                                        </Text>
                                    </div>
                                    <div className={classNames(styles.slide_item, "embla__slide")}>
                                        <div
                                            className={
                                                "flex flex-col items-center gap-6 sm:flex-row sm:justify-between"
                                            }
                                        >
                                            <div
                                                className={
                                                    "flex h-full w-full max-w-[120px] flex-col justify-between gap-2 sm:w-1/3"
                                                }
                                            >
                                                <Image
                                                    src={"/tournament/tournament-rule-3-1.png"}
                                                    alt={"Leak địch"}
                                                    width={320}
                                                    height={640}
                                                    className={"my-auto w-full object-contain"}
                                                />
                                                <Text type={"body-1"} color={"white"} weight={700}>
                                                    Leak địch
                                                </Text>
                                            </div>
                                            <div
                                                className={
                                                    "flex h-full w-full max-w-[120px] flex-col justify-between gap-2 sm:w-1/3"
                                                }
                                            >
                                                <Image
                                                    src={"/tournament/tournament-rule-3-2.png"}
                                                    alt={"Pause / Pause trick"}
                                                    width={320}
                                                    height={640}
                                                    className={"my-auto w-full object-contain"}
                                                />
                                                <Text type={"body-1"} color={"white"} weight={700}>
                                                    Pause / Pause trick
                                                </Text>
                                            </div>
                                            <div
                                                className={
                                                    "flex h-full w-full max-w-[120px] flex-col justify-between gap-2 sm:w-1/3"
                                                }
                                            >
                                                <Image
                                                    src={"/tournament/tournament-rule-3-3.png"}
                                                    alt={"Điều chỉnh tốc độ"}
                                                    width={320}
                                                    height={640}
                                                    className={"my-auto w-full object-contain"}
                                                />
                                                <Text type={"body-1"} color={"white"} weight={700}>
                                                    Điều chỉnh tốc độ
                                                </Text>
                                            </div>
                                        </div>
                                        <Text type={"headline-5"} weight={700} color={"white"}>
                                            3. Gameplay - Rules
                                        </Text>
                                        <Text type={"body-1"} color={"white"}>
                                            Bạn có thể{" "}
                                            <span style={{ color: "#FFEF3C", fontWeight: "bold" }}>
                                                Leak địch
                                            </span>
                                            ,{" "}
                                            <span style={{ color: "#FFEF3C", fontWeight: "bold" }}>
                                                tạm dừng game
                                            </span>{" "}
                                            và{" "}
                                            <span style={{ color: "#FFEF3C", fontWeight: "bold" }}>
                                                điều chỉnh tốc độ
                                            </span>
                                        </Text>
                                    </div>
                                    <div className={classNames(styles.slide_item, "embla__slide")}>
                                        <div className={"flex items-center gap-3"}>
                                            <ClockIcon />
                                            <div>
                                                <Text
                                                    type={"headline-5"}
                                                    color={"white"}
                                                    weight={500}
                                                >
                                                    <span style={{ color: "#6CFF5E" }}>6 phút</span>{" "}
                                                    Gameplay
                                                </Text>
                                                <Text
                                                    type={"headline-5"}
                                                    color={"white"}
                                                    weight={500}
                                                    className={"mt-2"}
                                                >
                                                    [
                                                    <span style={{ color: "#53FFFF" }}>2 phút</span>{" "}
                                                    Drafting]
                                                </Text>
                                            </div>
                                        </div>
                                        <Text type={"headline-5"} weight={700} color={"white"}>
                                            4. Time Limit
                                        </Text>
                                        <Text type={"body-1"} color={"white"}>
                                            Bạn sẽ có tối đa{" "}
                                            <span style={{ color: "#6CFF5E", fontWeight: "bold" }}>
                                                6 phút
                                            </span>{" "}
                                            để chơi (trong đó{" "}
                                            <span style={{ color: "#53FFFF", fontWeight: "bold" }}>
                                                2 phút
                                            </span>{" "}
                                            chọn operator). Thời gian được tính từ lúc bạn{" "}
                                            <span style={{ fontWeight: "bold" }}>vào drafting</span>
                                            .
                                        </Text>
                                    </div>
                                    <div className={classNames(styles.slide_item, "embla__slide")}>
                                        <div className={"flex flex-col gap-2"}>
                                            <div
                                                className={
                                                    "flex flex-col items-center justify-center gap-6 sm:flex-row"
                                                }
                                            >
                                                <div className={"flex items-center"}>
                                                    <Image
                                                        src={"/tournament/tournament-rule-5-1.png"}
                                                        alt={"Roadblock"}
                                                        width={122}
                                                        height={122}
                                                        className={"h-full w-full object-contain"}
                                                    />
                                                    <Text
                                                        type={"headline-3"}
                                                        color={"white"}
                                                        weight={700}
                                                    >
                                                        x4
                                                    </Text>
                                                </div>
                                                <div className={"relative"}>
                                                    <Image
                                                        src={"/tournament/tournament-rule-5-2.png"}
                                                        alt={"Specialist"}
                                                        width={122}
                                                        height={122}
                                                        className={"h-full w-full object-contain"}
                                                    />
                                                    <div
                                                        className={
                                                            "absolute right-0 bottom-0 left-0 m-auto"
                                                        }
                                                    >
                                                        <BanIcon className={"m-auto h-12 w-14"} />
                                                    </div>
                                                </div>
                                            </div>
                                            <Text type={"headline-5"} weight={700} color={"white"}>
                                                5. Mechanical Ban
                                            </Text>
                                            <Text type={"body-1"} color={"white"}>
                                                Bạn chỉ được dùng tối đa 4 Roadblock và không được
                                                dùng Specialist.
                                            </Text>
                                        </div>
                                    </div>

                                    <div className={classNames(styles.slide_item, "embla__slide")}>
                                        <div
                                            className={
                                                "flex flex-wrap items-center justify-center gap-2"
                                            }
                                        >
                                            <div className={"relative"}>
                                                <Image
                                                    src={"/tournament/tournament-char-1.png"}
                                                    alt={"Hard Ban"}
                                                    width={122}
                                                    height={122}
                                                    className={"h-full w-full object-contain"}
                                                />
                                                <div
                                                    className={
                                                        "absolute right-0 -bottom-4 left-0 m-auto"
                                                    }
                                                >
                                                    <BanIcon className={"m-auto h-12 w-14"} />
                                                </div>
                                            </div>
                                            <div className={"relative"}>
                                                <Image
                                                    src={"/tournament/tournament-char-2.png"}
                                                    alt={"Hard Ban"}
                                                    width={122}
                                                    height={122}
                                                    className={"h-full w-full object-contain"}
                                                />
                                                <div
                                                    className={
                                                        "absolute right-0 -bottom-4 left-0 m-auto"
                                                    }
                                                >
                                                    <BanIcon className={"m-auto h-12 w-14"} />
                                                </div>
                                            </div>
                                            <div className={"relative"}>
                                                <Image
                                                    src={"/tournament/tournament-char-3.png"}
                                                    alt={"Hard Ban"}
                                                    width={122}
                                                    height={122}
                                                    className={"h-full w-full object-contain"}
                                                />
                                                <div
                                                    className={
                                                        "absolute right-0 -bottom-4 left-0 m-auto"
                                                    }
                                                >
                                                    <BanIcon className={"m-auto h-12 w-14"} />
                                                </div>
                                            </div>
                                            <div className={"relative"}>
                                                <Image
                                                    src={"/tournament/tournament-char-4.png"}
                                                    alt={"Hard Ban"}
                                                    width={122}
                                                    height={122}
                                                    className={"h-full w-full object-contain"}
                                                />
                                                <div
                                                    className={
                                                        "absolute right-0 -bottom-4 left-0 m-auto"
                                                    }
                                                >
                                                    <BanIcon className={"m-auto h-12 w-14"} />
                                                </div>
                                            </div>
                                            <div className={"relative"}>
                                                <Image
                                                    src={"/tournament/tournament-char-5.png"}
                                                    alt={"Hard Ban"}
                                                    width={122}
                                                    height={122}
                                                    className={"h-full w-full object-contain"}
                                                />
                                                <div
                                                    className={
                                                        "absolute right-0 -bottom-4 left-0 m-auto"
                                                    }
                                                >
                                                    <BanIcon className={"m-auto h-12 w-14"} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={"flex flex-col gap-1"}>
                                            <Text type={"headline-5"} weight={700} color={"white"}>
                                                6. Hard Bans & Community Bans
                                            </Text>
                                            <Text
                                                type={"body-1"}
                                                style={{ fontStyle: "italic" }}
                                                color={"#FF5757"}
                                            >
                                                Những Operator phía trên sẽ bị cấm
                                            </Text>
                                            <Text type={"body-1"} color={"white"}>
                                                Quý khán giả sẽ được đưa 6 operator khác vào danh
                                                sách, nâng tổng số ban lên{" "}
                                                <span style={{ fontWeight: "bold" }}>
                                                    11 Operator
                                                </span>
                                                .
                                            </Text>
                                        </div>
                                    </div>

                                    <div className={classNames(styles.slide_item, "embla__slide")}>
                                        <div
                                            className={
                                                "flex w-full flex-wrap justify-center gap-12"
                                            }
                                        >
                                            <div
                                                className={
                                                    "flex h-auto flex-col items-center justify-end gap-2"
                                                }
                                            >
                                                <div className={"flex flex-1 items-center"}>
                                                    <ClockIcon className={"h-20 w-20"} />
                                                </div>
                                                <Text type={"title-3"} color={"white"}>
                                                    Thời gian{" "}
                                                    <span style={{ fontWeight: "bold" }}>
                                                        chọn Operator
                                                    </span>
                                                    <br />
                                                    Thời gian{" "}
                                                    <span style={{ fontWeight: "bold" }}>
                                                        in-stage
                                                    </span>
                                                </Text>
                                            </div>
                                            <div
                                                className={
                                                    "flex flex-col items-center justify-end gap-2"
                                                }
                                            >
                                                <TargetIcon className={"h-32 w-32"} />
                                                <Text type={"title-3"} color={"white"}>
                                                    Số địch đánh được
                                                    <br />
                                                    (số lượng có hạn)
                                                </Text>
                                            </div>
                                        </div>
                                        <Text
                                            style={{ fontStyle: "italic" }}
                                            type={"title-3"}
                                            color={"#FF6161"}
                                        >
                                            *Trong mọi trường hợp, BTC sẽ là người chấm điểm cuối
                                            cùng
                                        </Text>
                                        <div className={"flex max-w-[400px] flex-col gap-1"}>
                                            <Text type={"headline-5"} weight={700} color={"white"}>
                                                7. Tính điểm
                                            </Text>
                                            <Text type={"body-1"} color={"white"}>
                                                BTC sẽ áp dụng cách tính Score Attack, theo các hạng
                                                mục sau đây
                                            </Text>
                                        </div>
                                    </div>

                                    <div className={classNames(styles.slide_item, "embla__slide")}>
                                        <div className={"flex flex-col gap-1"}>
                                            <div className={"flex flex-col gap-12 sm:flex-row"}>
                                                <div
                                                    className={
                                                        "flex w-full flex-col justify-end gap-2 sm:w-1/2"
                                                    }
                                                >
                                                    <div className={"flex max-w-[240px] gap-2"}>
                                                        <Image
                                                            src={
                                                                "/tournament/tournament-rule-7.png"
                                                            }
                                                            alt={"Tính điểm"}
                                                            width={122}
                                                            height={122}
                                                            className={"w-1/3 object-contain"}
                                                        />
                                                        <Image
                                                            src={
                                                                "/tournament/tournament-rule-7.png"
                                                            }
                                                            alt={"Tính điểm"}
                                                            width={122}
                                                            height={122}
                                                            className={"w-1/3 object-contain"}
                                                        />
                                                        <Image
                                                            src={
                                                                "/tournament/tournament-rule-7.png"
                                                            }
                                                            alt={"Tính điểm"}
                                                            width={122}
                                                            height={122}
                                                            className={"w-1/3 object-contain"}
                                                        />
                                                    </div>
                                                    <Text
                                                        type={"title-3"}
                                                        className={"text-center"}
                                                        color={"white"}
                                                    >
                                                        <span style={{ fontWeight: "bold" }}>
                                                            Line up squad
                                                        </span>
                                                        <br />
                                                        của bạn đến đâu
                                                    </Text>
                                                </div>
                                                <div
                                                    className={
                                                        "flex w-full flex-col justify-end gap-2 sm:w-1/2"
                                                    }
                                                >
                                                    <div className={"flex flex-1 items-center"}>
                                                        <ProgressBarIcon
                                                            className={"h-auto w-full"}
                                                        />
                                                    </div>
                                                    <Text
                                                        type={"title-3"}
                                                        className={"text-center"}
                                                        color={"white"}
                                                    >
                                                        Bạn đánh{" "}
                                                        <span style={{ fontWeight: "bold" }}>
                                                            Theresa
                                                        </span>
                                                        <br />
                                                        đến đâu
                                                    </Text>
                                                </div>
                                            </div>
                                        </div>

                                        <Text
                                            style={{ fontStyle: "italic" }}
                                            type={"title-3"}
                                            color={"#FF6161"}
                                        >
                                            *Trong mọi trường hợp, BTC sẽ là người chấm điểm cuối
                                            cùng
                                        </Text>
                                        <div className={"flex max-w-[400px] flex-col gap-1"}>
                                            <Text type={"headline-5"} weight={700} color={"white"}>
                                                8. Tính điểm
                                            </Text>
                                            <Text type={"body-1"} color={"white"}>
                                                BTC sẽ áp dụng cách tính Score Attack, theo các hạng
                                                mục như trên
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                onClick={() => emblaApi?.scrollNext()}
                                className={classNames(
                                    styles.button_container,
                                    styles.arrow_icon_right,
                                )}
                            >
                                <ArrowIcon className={styles.arrow_icon} />
                            </div>
                            <div
                                onClick={() => emblaApi?.scrollPrev()}
                                className={classNames(
                                    styles.button_container,
                                    styles.arrow_icon_left,
                                )}
                            >
                                <ArrowIcon className={styles.arrow_icon} />
                            </div>
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
}
