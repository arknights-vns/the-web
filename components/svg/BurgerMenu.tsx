export default function BurgerMenu() {
    return (
        <div tabIndex={0} role={"button"} className={"lg:hidden"}>
            <svg
                xmlns={"http://www.w3.org/2000/svg"}
                className={"w-5"}
                fill={"none"}
                viewBox={"0 0 20 20"}
                stroke={"currentColor"}
            >
                <path
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                    strokeWidth={2}
                    d={"M4 6h16M4 12h8m-8 6h16"}
                />
            </svg>
        </div>
    );
}
