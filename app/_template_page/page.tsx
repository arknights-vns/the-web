import InProgress from "@/components/InProgress";
import PageTitle from "@/components/PageTitle/PageTitle";

export default function ExamplePage() {
    return (
        <div className={"h-visible vns-background"}>
            <div className={"hero"}>
                <div className={"hero-content text-center"}>
                    <div>
                        <PageTitle title={"Example page"} favorText={"Example page."} dark />
                    </div>
                </div>
            </div>
            <div className={""} data-theme={"dark"}>
                <InProgress />
            </div>
        </div>
    );
}
