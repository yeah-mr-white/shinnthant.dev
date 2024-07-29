const Navbar = () => {
    return (
        <nav className="shadow-borderColor-100/25 fixed left-0 top-0 z-10 w-full border-b border-borderColor/10 bg-customizedBg/50 py-4 shadow-lg backdrop-blur-xl">
            <div className="max-container mx-auto flex justify-between font-firaCode text-slate-100">
                {/* start - logo */}
                <div className="inline-block py-1 align-middle">
                    <a href="#" className="text-2xl font-bold">
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
                <div>
                    <button className="hidden rounded-lg bg-customizedBtnBg px-3.5 py-2.5 text-sm text-slate-950">
                        download-cv
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
