import Container from "@/components/Container/Container";
import PageTitle from "@/components/PageTitle/PageTitle";
import Text from "@/components/Text/Text";
import styles from "@/styles/TournamentPage.module.scss";
import classNames from "classnames";
import Image from "next/image";

export default function OverviewPage() {
    return (
        <div className={classNames("vns-background", styles.tournament_page)}>
            <div className={"hero"}>
                <div className={"hero-content text-center"}>
                    <Container>
                        <PageTitle title={"Tournament"} dark />
                        <div className={styles.tournament_info}>
                            <div className={styles.tournament_info_content}>
                                <Text type={"headline-4"} weight={700} color={"white"}>
                                    Giới thiệu
                                </Text>
                                <Text type={"body-1"} color={"white"}>
                                    Đây là giải đấu được BTC Offline chọn nhằm để thử thách giới hạn
                                    của các Doctor trong buổi sự kiện này. Các Doctor hoàn toàn có
                                    thể sử dụng mọi chiến thuật sáng tạo và hiệu quả để vượt qua thử
                                    thách mà BTC đã chuẩn bị. Sẽ có những phần quà thú vị để thưởng
                                    cho các Doctor mang đến kết quả đáng kinh ngạc nhất vào cuối
                                    buổi chương trình!
                                </Text>
                            </div>

                            <Image
                                src={"/tournament/tournament-logo.png"}
                                alt={"Tournament Logo"}
                                width={128}
                                height={128}
                                className={styles.tournament_image}
                            />
                        </div>
                    </Container>
                </div>
            </div>{" "}
        </div>
    );
}
