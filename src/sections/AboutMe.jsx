import terminalVector from "../assets/vector/terminalVector.svg";
import personalVector40 from "../assets/vector/personalVector40.svg";
import hobbiesVector40 from "../assets/vector/hobbiesVector40.svg";
import profile1 from "../assets/vector/profile1.svg";
import profile2 from "../assets/vector/profile2.svg";
import CodeSnippet1 from "../components/CodeSnippet1.jsx";
import CodeSnippet2 from "../components/CodeSnippet2.jsx";

const AboutMe = () => {
    return (
        <section className="border-b border-borderColor bg-customizedBg py-16 md:py-24">
            <div className="max-container text-center font-firaCode text-slate-100">
                <div className="px-4 md:px-8">
                    <h1 className="text-3xl font-medium md:text-5xl md:font-medium">
                        #about-me
                    </h1>
                    {/* horizontal rule under section title */}
                    <hr className="mx-auto mt-2 h-[2px] w-16 border-0 bg-customizedBtnBg sm:mt-4 sm:h-[3px] sm:w-[152px]" />
                </div>

                {/* about-me table for mobile */}
                <div className="lg:hidden">
                    <div className="px-4 text-start">
                        {/* personal info */}
                        <div className="px-4">
                            <p className="mt-12 font-semibold">
                                // personal-info
                            </p>
                            <p className="mt-4 text-slate-500">
                                I am an experienced Developer with a strong
                                foundation in HTML, CSS, Tailwind CSS, and
                                Bootstrap, complemented by a keen eye for
                                design. My passion lies in crafting visually
                                appealing and user-friendly websites that
                                deliver outstanding user experiences. My journey
                                began as a web developer, and over the years, I
                                have honed my skills and expanded my expertise
                                to include modern frameworks such as React,
                                Vue.js, and tools like Figma and Elementor. With
                                a year of experience with WordPress, I've
                                successfully delivered numerous projects for a
                                diverse range of clients, showcasing my ability
                                to solve problems and work effectively in team
                                environments.
                            </p>
                        </div>

                        {/* code snippet showcase for mobile & tablet */}
                        <div className="px-4">
                            <p className="mt-12 font-semibold">
                                // code snippet showcase:
                            </p>

                            {/* code snippet 1 - mobile */}
                            <div class="mt-8">
                                <div className="flex">
                                    <img
                                        className="h-9 w-9 rounded-full p-1 ring-2 ring-slate-500"
                                        src={profile1}
                                        alt="Profile avatar"
                                    />

                                    <div>
                                        <span className="mx-3 font-semibold text-greenGradient">
                                            @d010resHaze
                                        </span>
                                        <span className="text-slate-500">
                                            created 10min ago
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <CodeSnippet1 />
                                </div>
                            </div>

                            {/* code snippet 2 - mobile */}
                            <div class="mt-8">
                                <div className="flex">
                                    <img
                                        className="h-9 w-9 rounded-full p-1 ring-2 ring-slate-500"
                                        src={profile1}
                                        alt="Profile avatar"
                                    />

                                    <div>
                                        <span className="mx-3 font-semibold text-greenGradient">
                                            @d010resHaze
                                        </span>
                                        <span className="text-slate-500">
                                            created 10min ago
                                        </span>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <CodeSnippet2 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* about me table & laptop */}
                <div className="hidden lg:block">
                    <div className="mt-16 flex w-full rounded-lg border border-borderColor text-slate-100">
                        <div className="flex">
                            {/* First Column */}
                            <div className="w-16 border-r border-borderColor">
                                <div className="flex justify-center">
                                    <img
                                        src={terminalVector}
                                        alt="terminal"
                                        className="mt-7 h-6 w-6"
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <img
                                        src={personalVector40}
                                        alt="personal"
                                        className="mt-7 h-6 w-6"
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <img
                                        src={hobbiesVector40}
                                        alt="hobbies"
                                        className="mt-7 h-6 w-6"
                                    />
                                </div>
                            </div>

                            {/* Second Column */}
                            <div className="w-[546px] border-r border-borderColor p-5 text-start text-slate-500">
                                <p className="font-semibold text-slate-100">
                                    // personal-info
                                </p>
                                <div className="mt-5">
                                    <code>
                                        # /* I am an experienced Developer with
                                        a strong
                                        <br /># foundation in HTML, CSS,
                                        Tailwind CSS, and
                                        <br /># Bootstrap, complemented by a
                                        keen eye for design.
                                        <br /># My passion lies in crafting
                                        visually appealing and
                                        <br /># user-friendly websites that
                                        deliver outstanding
                                        <br /># user experiences.
                                        <br />
                                        # My journey began as a web developer,
                                        and over the
                                        <br /># years, I have honed my skills
                                        and expanded my
                                        <br /># expertise to include modern
                                        frameworks such as
                                        <br /># React, Vue.js, and tools like
                                        Figma and Elementor.
                                        <br /># With a year of experience with
                                        WordPress, I've
                                        <br /># successfully delivered numerous
                                        projects for a<br /># diverse range of
                                        clients, showcasing my ability to
                                        <br /># solve problems and work
                                        effectively in team
                                        <br /># environments. */
                                    </code>
                                </div>
                            </div>

                            {/* Third Column */}
                            <div className="p-5">
                                {/* Code Snippet Title */}
                                <div className="flex justify-start font-semibold">
                                    <p>// code snippet showcase:</p>
                                </div>

                                {/* First Code Snippet Title */}
                                <div class="mt-5">
                                    <div className="flex">
                                        <img
                                            className="h-9 w-9 rounded-full p-1 ring-2 ring-slate-500"
                                            src={profile1}
                                            alt="Profile avatar"
                                        />

                                        <div className="my-auto">
                                            <span className="mx-3 font-semibold text-greenGradient">
                                                @d010resHaze
                                            </span>
                                            <span className="text-slate-500">
                                                created 10min ago
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <CodeSnippet1 />
                                    </div>
                                </div>

                                {/* Second Code Snippet Title */}
                                <div class="mt-10">
                                    <div className="flex">
                                        <img
                                            className="h-9 w-9 rounded-full p-1 ring-2 ring-slate-500"
                                            src={profile2}
                                            alt="Profile avatar"
                                        />

                                        <div className="my-auto">
                                            <span className="mx-3 font-semibold text-greenGradient">
                                                @ell10tEld3rs0n
                                            </span>
                                            <span className="text-slate-500">
                                                created 30min ago
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <CodeSnippet2 />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
