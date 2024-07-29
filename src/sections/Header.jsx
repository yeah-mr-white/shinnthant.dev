import Snake from "../components/Snake.jsx";

const Header = () => {
    return (
        <section className="relative w-full border-b border-borderColor bg-customizedBg">
            <div className="max-container flex min-h-screen w-full items-center justify-between">
                {/* Left Hero Section */}
                <div className="text-lg font-medium text-slate-100">
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

                {/* Right Hero Section */}
                <div className="">
                    <Snake></Snake>
                </div>
            </div>
        </section>
    );
};

export default Header;
