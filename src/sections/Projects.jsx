import project1 from "../assets/img/project1.jpg";
import project2 from "../assets/img/project2.jpg";
import project3 from "../assets/img/project3.jpg";
import project4 from "../assets/img/project4.jpg";
import project5 from "../assets/img/project5.jpg";
import project6 from "../assets/img/project6.jpg";

const Projects = () => {
    return (
        <section className="border-b border-borderColor bg-customizedBg py-16 md:py-24">
            <div className="max-container text-center font-firaCode text-slate-100">
                <div className="px-4 md:px-8">
                    <h1 className="text-3xl font-medium md:text-5xl md:font-medium">
                        #projects
                    </h1>

                    {/* horizontal rule under section title */}
                    <hr className="mx-auto mt-2 h-[2px] w-16 border-0 bg-customizedBtnBg sm:mt-4 sm:h-[3px] sm:w-[152px]" />
                </div>
                <div className="flex w-full flex-wrap justify-between px-4 text-base text-slate-500 sm:text-base md:px-8">
                    {/* Project1 */}
                    <div className="mt-12 w-full md:w-1/2 lg:mt-16 lg:w-1/3">
                        <div className="text-start md:px-4">
                            <p>
                                <span className="font-semibold text-greenGradient">
                                    #project-1
                                </span>
                                &nbsp;
                                <span className="font-medium text-slate-500">
                                    // random-dice-game
                                </span>
                            </p>
                            <div className="mt-3 rounded-2xl border border-borderColor bg-cardBg">
                                <img
                                    src={project1}
                                    alt="project1"
                                    className="h-[145px] w-full rounded-t-2xl border-b border-borderColor object-cover"
                                />
                                <div className="p-4 md:p-6">
                                    <p className="sm:text-base">
                                        Try your luck and see if you can roll a
                                        perfect six!
                                    </p>
                                    <button className="mr-1.5 mt-5 rounded-md bg-customizedBtnBg px-2 py-1.5 text-sm text-slate-950 sm:mr-2 sm:px-3.5 sm:py-2.5">
                                        <a href="https://github.com/yeah-mr-white/fs-pj01-random-dice-game">
                                            source-code
                                        </a>
                                    </button>
                                    <button className="mt-5 rounded-md bg-customizedBtnBgGray px-2 py-1.5 text-sm text-slate-100 sm:px-3.5 sm:py-2.5">
                                        <a href="https://yeah-mr-white.github.io/fs-pj01-random-dice-game/">
                                            view-project
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="mt-12 w-full md:w-1/2 lg:mt-16 lg:w-1/3">
                        <div className="text-start md:px-4">
                            <p>
                                <span className="font-semibold text-greenGradient">
                                    #project-2
                                </span>
                                &nbsp;
                                <span className="font-medium text-slate-500">
                                    // drum-kit
                                </span>
                            </p>
                            <div className="mt-3 rounded-2xl border border-borderColor bg-cardBg">
                                <img
                                    src={project2}
                                    alt="project2"
                                    className="h-[145px] w-full rounded-t-2xl border-b border-borderColor object-cover"
                                />
                                <div className="p-4 md:p-6">
                                    <p className="sm:text-base">
                                        Get ready to create your own beats and
                                        rhythms!
                                    </p>
                                    <button className="mr-1.5 mt-5 rounded-md bg-customizedBtnBg px-2 py-1.5 text-sm text-slate-950 sm:mr-2 sm:px-3.5 sm:py-2.5">
                                        <a href="https://github.com/yeah-mr-white/fs-pj02-drum-kit">
                                            source-code
                                        </a>
                                    </button>
                                    <button className="mt-5 rounded-md bg-customizedBtnBgGray px-2 py-1.5 text-sm text-slate-100 sm:px-3.5 sm:py-2.5">
                                        <a href="https://yeah-mr-white.github.io/fs-pj02-drum-kit/">
                                            view-project
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project3 */}
                    <div className="mt-12 w-full md:w-1/2 lg:mt-16 lg:w-1/3">
                        <div className="text-start md:px-4">
                            <p>
                                <span className="font-semibold text-greenGradient">
                                    #project-3
                                </span>
                                &nbsp;
                                <span className="font-medium text-slate-500">
                                    // first-calculator
                                </span>
                            </p>
                            <div className="mt-3 rounded-2xl border border-borderColor bg-cardBg">
                                <img
                                    src={project3}
                                    alt="project3"
                                    className="h-[145px] w-full rounded-t-2xl border-b border-borderColor object-cover"
                                />
                                <div className="p-4 md:p-6">
                                    <p className="sm:text-base">
                                        Start solving your math problems with
                                        ease!
                                    </p>
                                    <button className="mr-1.5 mt-5 rounded-md bg-customizedBtnBg px-2 py-1.5 text-sm text-slate-950 sm:mr-2 sm:px-3.5 sm:py-2.5">
                                        <a href="https://github.com/yeah-mr-white/first-calculator">
                                            source-code
                                        </a>
                                    </button>
                                    <button className="mt-5 rounded-md bg-customizedBtnBgGray px-2 py-1.5 text-sm text-slate-100 sm:px-3.5 sm:py-2.5">
                                        <a href="https://yeah-mr-white.github.io/first-calculator/">
                                            view-project
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project4 */}
                    <div className="mt-12 w-full md:w-1/2 lg:mt-16 lg:w-1/3">
                        <div className="text-start md:px-4">
                            <p>
                                <span className="font-semibold text-greenGradient">
                                    #project-4
                                </span>
                                &nbsp;
                                <span className="font-medium text-slate-500">
                                    // practice-portfolio
                                </span>
                            </p>
                            <div className="mt-3 rounded-2xl border border-borderColor bg-cardBg">
                                <img
                                    src={project4}
                                    alt="project4"
                                    className="h-[145px] w-full rounded-t-2xl border-b border-borderColor object-cover"
                                />
                                <div className="p-4 md:p-6">
                                    <p className="sm:text-base">
                                        Showcase projects and skills for a
                                        portfolio.
                                    </p>
                                    <button className="mr-1.5 mt-5 rounded-md bg-customizedBtnBg px-2 py-1.5 text-sm text-slate-950 sm:mr-2 sm:px-3.5 sm:py-2.5">
                                        <a href="https://github.com/yeah-mr-white/practice-portfolio">
                                            source-code
                                        </a>
                                    </button>
                                    <button className="mt-5 rounded-md bg-customizedBtnBgGray px-2 py-1.5 text-sm text-slate-100 sm:px-3.5 sm:py-2.5">
                                        <a href="https://yeah-mr-white.github.io/practice-portfolio/">
                                            view-project
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 5 */}
                    <div className="mt-12 w-full md:w-1/2 lg:mt-16 lg:w-1/3">
                        <div className="text-start md:px-4">
                            <p>
                                <span className="font-semibold text-greenGradient">
                                    #project-5
                                </span>
                                &nbsp;
                                <span className="font-medium text-slate-500">
                                    // football-leagues
                                </span>
                            </p>
                            <div className="mt-3 rounded-2xl border border-borderColor bg-cardBg">
                                <img
                                    src={project5}
                                    alt="project5"
                                    className="h-[145px] w-full rounded-t-2xl border-b border-borderColor object-cover"
                                />
                                <div className="p-4 md:p-6">
                                    <p className="sm:text-base">
                                        Explore and track your football leagues
                                        and teams.
                                    </p>
                                    <button className="mr-1.5 mt-5 rounded-md bg-customizedBtnBg px-2 py-1.5 text-sm text-slate-950 sm:mr-2 sm:px-3.5 sm:py-2.5">
                                        <a href="https://github.com/yeah-mr-white/football-leagues">
                                            source-code
                                        </a>
                                    </button>
                                    <button className="mt-5 rounded-md bg-customizedBtnBgGray px-2 py-1.5 text-sm text-slate-100 sm:px-3.5 sm:py-2.5">
                                        <a href="https://yeah-mr-white.github.io/football-leagues/">
                                            view-project
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project6 */}
                    <div className="mt-12 w-full md:w-1/2 lg:mt-16 lg:w-1/3">
                        <div className="text-start md:px-4">
                            <p>
                                <span className="font-semibold text-greenGradient">
                                    #project-6
                                </span>
                                &nbsp;
                                <span className="font-medium text-slate-500">
                                    // preview-card
                                </span>
                            </p>
                            <div className="mt-3 rounded-2xl border border-borderColor bg-cardBg">
                                <img
                                    src={project6}
                                    alt="project1"
                                    className="h-[145px] w-full rounded-t-2xl border-b border-borderColor object-cover"
                                />
                                <div className="p-4 md:p-6">
                                    <p className="sm:text-base">
                                        Discover and explore the features of our
                                        product.
                                    </p>
                                    <button className="mr-1.5 mt-5 rounded-md bg-customizedBtnBg px-2 py-1.5 text-sm text-slate-950 sm:mr-2 sm:px-3.5 sm:py-2.5">
                                        <a href="https://github.com/yeah-mr-white/product-preview-card-component">
                                            source-code
                                        </a>
                                    </button>
                                    <button className="mt-5 rounded-md bg-customizedBtnBgGray px-2 py-1.5 text-sm text-slate-100 sm:px-3.5 sm:py-2.5">
                                        <a href="https://yeah-mr-white.github.io/product-preview-card-component/">
                                            view-project
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
