import Branding from "@/components/Branding";
import NavbarItems from "@/components/NavBarItems";
import PurchaseTicketButton from "@/components/PurchaseTicketButton";
import BurgerMenu from "@/components/svg/BurgerMenu";

export default function NavBar() {
    return (
        // https://github.com/saadeghi/daisyui/discussions/2277#discussioncomment-7400878
        <div className={"navbar sticky top-0 bg-white font-[family-name:var(--font-jb-mono)] shadow-lg"}>
            <div className={"navbar-start"}>
                <div className={"dropdown"}>
                    <BurgerMenu />
                    <ul
                        tabIndex={0}
                        className={"menu dropdown-content menu-sm rounded-box z-1 mt-8 w-52 bg-white p-2 shadow-lg"}
                    >
                        <NavbarItems />
                    </ul>
                </div>
                <Branding />
            </div>
            <div className={"navbar-center hidden lg:flex"}>
                <ul className={"menu menu-horizontal px-1 lg:grid lg:grid-cols-3"}>
                    <NavbarItems />
                </ul>
            </div>
            <div className={"navbar-end"}>
                <PurchaseTicketButton />
            </div>
        </div>
    );
}
