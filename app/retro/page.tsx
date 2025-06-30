import PageTitle from "@/components/PageTitle/PageTitle";
import RetroItem from "@/components/RetroItem";
import Dreamchasers from "@/public/retro/dreamchasers/dreamchaser.png";
import TheShowMustGoOn from "@/public/retro/the-show-must-go-on/the-show-must-go-on.jpg";

export default function RetroPage() {
    return (
        <div className={"h-visible vns-background"}>
            <div className={"hero"}>
                <div className={"hero-content text-center"}>
                    <div>
                        <PageTitle
                            title={"Kỷ niệm"}
                            favorText={"Nơi lưu giữ album của những buổi Offline."}
                            dark
                        />
                    </div>
                </div>
            </div>
            <div
                className={"flex flex-col items-center justify-center gap-y-4 self-center md:mx-32"}
                data-theme={"dark"}
            >
                <RetroItem
                    title={"VNS Offline 2024: The Show Must Go On!"}
                    description={
                        "Offline đầu tiên của VNS, cũng như là tiền đề cho Dreamchasers và VNS Network."
                    }
                    href={"/retro/the-show-must-go-on"}
                    imageSrc={TheShowMustGoOn}
                />

                <RetroItem
                    title={"VNS Offline 2025: Dreamchasers"}
                    description={"COMING SOON!"}
                    href={"/retro/dreamchasers"}
                    imageSrc={Dreamchasers}
                />
            </div>
        </div>
    );
}
