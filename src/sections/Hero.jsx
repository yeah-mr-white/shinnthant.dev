import heroSnippet10 from "../assets/codeSnippet/heroSnippet10.svg";
import heroSnippet40 from "../assets/codeSnippet/heroSnippet40.svg";
import heroSnippet100 from "../assets/codeSnippet/heroSnippet100.svg";

const Header = () => {
    return (
        <header className="relative border-b border-borderColor bg-customizedBg font-firaCode">
            <div className="sm:max-container flex min-h-screen items-center justify-between">
                {/* left hero */}
                <div className="w-full px-10 font-medium text-slate-100 sm:w-1/2 sm:p-0">
                    {/* background blur animation for mobile */}
                    <div className="relative sm:hidden">
                        <div className="left animation-delay-4000 absolute -left-10 -top-10 h-64 w-64 animate-blob rounded-full bg-greenGradient opacity-25 blur-3xl filter"></div>
                        <div className="left animation-delay-2000 absolute left-20 top-32 h-48 w-48 animate-blob rounded-full bg-blueGradient opacity-25 blur-3xl filter"></div>
                        <div className="left animation-delay-2000 absolute left-48 h-48 w-48 animate-blob rounded-full bg-blueGradient opacity-25 blur-3xl filter"></div>
                    </div>

                    <div className="text-lg">
                        <p>hello friend! i am</p>
                        <h1 className="py-2 text-6xl font-medium">
                            shinn-thant
                        </h1>
                        <p className="text-3xl font-semibold">
                            <span className="bg-gradient-to-r from-blueGradient via-greenGradient to-orangeGradient bg-clip-text text-transparent">
                                &gt;_full-stack developer
                            </span>
                        </p>
                    </div>
                    <br />
                    <br />
                    <div className="mt-6 text-slate-500">
                        <p className="hidden sm:block">
                            // complete the game to continue
                        </p>
                        <div className="text-sm sm:text-lg">
                            <p className="sm:my-1">
                                // you can also see it on my GitHub page
                            </p>
                            <p className="mt-2 sm:mt-0">
                                <span className="text-blueGradient">const</span>
                                <span className="text-slate-300">
                                    {" "}
                                    gitHubLink ={" "}
                                </span>
                                <a href="https://github.com/yeah-mr-white">
                                    <span className="text-orangeGradient">
                                        “https://github.com/yeah-mr-white”
                                    </span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* right hero */}

                <div className="hidden sm:block">
                    <div className="relative flex w-full justify-end">
                        {/* background blur animation for laptop size */}
                        <div className="left animation-delay-4000 absolute -left-12 top-20 h-96 w-96 animate-blob rounded-full bg-greenGradient opacity-25 blur-3xl filter"></div>
                        <div className="left animation-delay-2000 absolute bottom-20 left-20 h-80 w-80 animate-blob rounded-full bg-blueGradient opacity-25 blur-3xl filter"></div>
                        <div className="left animation-delay-2000 absolute -right-16 bottom-60 h-64 w-64 animate-blob rounded-full bg-blueGradient opacity-25 blur-3xl filter"></div>

                        {/* Code snippets */}
                        <div className="flex h-[835px] flex-col justify-center gap-4 overflow-hidden">
                            <img
                                src={heroSnippet10}
                                alt=""
                                className="relative"
                            />
                            <img
                                src={heroSnippet40}
                                alt=""
                                className="relative"
                            />
                            <img
                                src={heroSnippet100}
                                alt=""
                                className="relative"
                            />
                            <img
                                src={heroSnippet40}
                                alt=""
                                className="relative"
                            />
                            <img
                                src={heroSnippet10}
                                alt=""
                                className="relative"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
