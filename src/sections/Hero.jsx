import heroSnippet10 from "../assets/codeSnippet/heroSnippet10.svg";
import heroSnippet40 from "../assets/codeSnippet/heroSnippet40.svg";
import heroSnippet100 from "../assets/codeSnippet/heroSnippet100.svg";

const Header = () => {
    return (
        <header className="relative w-full border-b border-borderColor bg-customizedBg font-firaCode">
            <div className="max-container flex min-h-screen items-center justify-between">
                {/* Left Hero */}
                <div className="flex w-full flex-col text-lg font-medium text-slate-100">
                    <div>
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
                        <p>// complete the game to continue</p>
                        <p className="my-1">
                            // you can also see it on my GitHub page
                        </p>
                        <p>
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

                {/* Right Hero */}
                <div className="flex w-full justify-end">
                    <div className="relative">
                        {/* Background blur animation */}
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
