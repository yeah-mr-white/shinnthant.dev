const Navbar = () => {
    return (
        <header className="absolute left-0 top-0 z-10 mx-auto w-full">
            <nav className="max-container mt-8 flex justify-between font-firaCode text-slate-100">
                <div className="inline-block py-1 align-middle">
                    <a href="#" className="text-2xl font-bold">
                        shinnthant.dev
                    </a>
                </div>
                <div className="inline-block py-1.5 align-middle">
                    <div className="flex gap-12">
                        <div>#home</div>
                        <div>#projects</div>
                        <div>#about-me</div>
                        <div>#skills</div>
                        <div>#contact-me</div>
                    </div>
                </div>
                <div>
                    <button className="rounded-lg bg-customizedBtnBg px-3.5 py-2.5 text-sm text-slate-950">
                        download-cv
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
