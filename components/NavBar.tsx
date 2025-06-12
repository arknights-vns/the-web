import Branding from "@/components/Branding";
import NavbarItems from "@/components/NavBarItems";
import PurchaseTicketButton from "@/components/PurchaseTicketButton";
import BurgerMenu from "@/components/svg/BurgerMenu";

export default function NavBar() {
    return (
        // https://github.com/saadeghi/daisyui/discussions/2277#discussioncomment-7400878
        <div className={"navbar sticky z-1 h-18 bg-white shadow-md"}>
            <div className={"navbar-start space-x-2"}>
                <div className={"dropdown"}>
                    <BurgerMenu />
                    <ul
                        tabIndex={0}
                        className={
                            "menu dropdown-content sm:menu-sm md:menu-md lg:menu-lg rounded-box z-1 mt-8 w-52 bg-white p-2 shadow-lg"
                        }
                    >
                        <NavbarItems />
                    </ul>
                </div>
                <Branding />
            </div>
            <div className={"navbar-end"}>
                <ul
                    className={
                        "menu menu-horizontal hidden px-1 text-lg lg:flex"
                    }
                >
                    <NavbarItems />
                </ul>
                <PurchaseTicketButton />
            </div>
        </div>
    );
}
