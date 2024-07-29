import logo from "../assets/vector/logo.svg";
import hamburger from "../assets/vector/hamburger.svg";

const Navbar = () => {
    return (
        <nav className="shadow-borderColor-100/25 fixed left-0 top-0 z-10 w-full border-b border-borderColor/10 bg-customizedBg/50 p-4 shadow-lg backdrop-blur-xl sm:px-0 sm:py-4">
            <div className="max-container mx-auto flex justify-between font-firaCode text-slate-100">
                {/* start - logo */}
                <div className="flex py-1 align-middle">
                    <img src={logo} alt="logo" className="mr-2 h-8 w-8" />
                    <a
                        href="#"
                        className="hidden text-lg font-bold text-greenGradient sm:text-2xl lg:block"
                    >
                        shinnthant.dev
                    </a>
                </div>

                {/* middle - nav links */}
                <div className="hidden py-1.5 align-middle sm:inline-block">
                    <div className="flex gap-12">
                        <div>#home</div>
                        <div>#projects</div>
                        <div>#about-me</div>
                        <div>#skills</div>
                        <div>#contact-me</div>
                    </div>
                </div>

                {/* end -> button */}
                <div className="flex items-center justify-center sm:hidden">
                    <img src={hamburger} alt="Hamburger" className="w-6" />
                </div>
                <button className="hidden h-10 rounded-lg bg-customizedBtnBg px-3.5 py-2.5 text-sm text-slate-950 lg:block">
                    download-cv
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
