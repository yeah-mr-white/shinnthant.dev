// magic code 0
import React, { useState } from "react";
import logo from "../assets/vector/logo.svg";
import hamburger from "../assets/vector/hamburger.svg";
import cross from "../assets/vector/cross.svg";

const Navbar = () => {
    // magic code 1
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="shadow-borderColor-100/25 fixed left-0 top-0 z-10 w-full border-b border-borderColor/10 bg-customizedBg/50 p-4 shadow-lg backdrop-blur-xl lg:px-4">
            <div className="max-container mx-auto flex justify-between font-firaCode text-slate-100">
                {/* start - logo */}
                <div className="flex py-1 align-middle">
                    <img src={logo} alt="logo" className="mr-2 h-8 w-8" />
                    <a
                        href="#"
                        className="hidden text-lg font-bold text-greenGradient sm:block sm:text-2xl"
                    >
                        shinnthant.dev
                    </a>
                </div>

                {/* middle - nav links */}
                <div className="hidden py-1.5 align-middle lg:inline-block">
                    <div className="flex gap-12">
                        <a href="#home">
                            <div>#home</div>
                        </a>
                        <a href="#projects">
                            <div>#projects</div>
                        </a>
                        <a href="#about-me">
                            <div>#about-me</div>
                        </a>
                        <a href="#contact-me">
                            <div>#contact-me</div>
                        </a>
                    </div>
                </div>

                {/* end -> button */}
                <div className="flex items-center justify-center lg:hidden">
                    <button onClick={toggleDropdown} className="w-6">
                        {/* magic code 2 */}
                        <img
                            src={isDropdownOpen ? cross : hamburger}
                            alt="Hamburger & cross icons"
                            className="w-6"
                        />
                    </button>
                </div>
                <button className="hidden h-10 rounded-lg bg-customizedBtnBg px-3.5 py-2.5 text-sm text-slate-950 lg:block">
                    download-cv
                </button>
                {/* dropdown menu for mobile */}
                {/* magic code 3 */}
                {isDropdownOpen && (
                    <div className="absolute left-0 top-full w-full lg:hidden">
                        <div className="flex flex-wrap">
                            <a
                                href="#home"
                                className="w-full border-b border-borderColor bg-customizedBg py-4 pl-4"
                            >
                                #home
                            </a>
                            <a
                                href="#projects"
                                className="w-full border-b border-borderColor bg-customizedBg py-4 pl-4"
                            >
                                #projects
                            </a>
                            <a
                                href="#about-me"
                                className="w-full border-b border-borderColor bg-customizedBg py-4 pl-4"
                            >
                                #about-me
                            </a>
                            <a
                                href="#contact-me"
                                className="w-full border-b border-borderColor bg-customizedBg py-4 pl-4"
                            >
                                #contact-me
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
