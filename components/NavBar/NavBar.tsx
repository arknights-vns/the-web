import Branding from "@/components/Branding";
import NavBarItems from "@/components/NavBar/NavBarItems";
import PurchaseTicketButton from "@/components/PurchaseTicketButton";
import BurgerMenu from "@/components/svg/BurgerMenu";
import Sparkle from "@/components/svg/Sparkle";

import Container from "../Container/Container";
import styles from "./NavBar.module.scss";

export default function NavBar() {
    return (
        <header className={"sticky top-0 z-999 h-[70px] bg-white"}>
            <Container className={"flex min-w-full items-center"}>
                <div className={"ml-4 flex items-center justify-center"}>
                    <div className={"dropdown"}>
                        <BurgerMenu />
                        <ul
                            tabIndex={0}
                            className={
                                "menu dropdown-content sm:menu-sm md:menu-md lg:menu-lg rounded-box z-1 mt-8 w-52 bg-white p-2 shadow-lg"
                            }
                        >
                            <NavBarItems isMobile />
                        </ul>
                    </div>
                    <Branding />
                </div>
                <div className={styles.menu_wrapper}>
                    <NavBarItems />
                    <PurchaseTicketButton />
                    <Sparkle />
                </div>
            </Container>
        </header>
    );
}
