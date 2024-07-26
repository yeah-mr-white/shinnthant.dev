import terminalVector from "../../assets/terminalVector.svg";
import personalVector40 from "../../assets/personalVector40.svg";
import hobbiesVector40 from "../../assets/hobbiesVector40.svg";
import profile1 from "../../assets/profile1.svg";
import profile2 from "../../assets/profile2.svg";
import codeSnippet1 from "../../assets/codeSnippet1.svg";
import codeSnippet2 from "../../assets/codeSnippet2.svg";

const AboutMe = () => {
    return (
        <section className="border-b border-borderColor bg-customizedBg py-24">
            <div className="max-container text-center text-slate-100">
                <div>
                    <h1 className="text-5xl font-medium">#about-me</h1>
                    <hr className="mx-auto mt-4 h-[3px] w-[152px] border-0 bg-customizedBtnBg" />
                </div>
                <div className="w-max-container mt-16 rounded-lg border border-borderColor text-slate-500">
                    {/* First Table Row Empty Content */}
                    <div className="h-10 w-full border-b border-borderColor"></div>

                    {/* Second Table Row */}
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
                        <div className="w-[546px] border-r border-borderColor p-5 text-start">
                            <code>
                                # /* I am an experienced Developer with a strong
                                <br /># foundation in HTML, CSS, Tailwind CSS,
                                and
                                <br /># Bootstrap, complemented by a keen eye
                                for design.
                                <br /># My passion lies in crafting visually
                                appealing and
                                <br /># user-friendly websites that deliver
                                outstanding
                                <br /># user experiences.
                                <br />
                                # My journey began as a web developer, and over
                                the
                                <br /># years, I have honed my skills and
                                expanded my
                                <br /># expertise to include modern frameworks
                                such as
                                <br /># React, Vue.js, and tools like Figma and
                                Elementor.
                                <br /># With a year of experience with
                                WordPress, I've
                                <br /># successfully delivered numerous projects
                                for a<br /># diverse range of clients,
                                showcasing my ability to
                                <br /># solve problems and work effectively in
                                team
                                <br /># environments. */
                            </code>
                        </div>

                        {/* Third Column */}
                        <div className="p-5">
                            {/* Code Snippet Title */}
                            <div className="flex justify-start">
                                <p>// Code Snippet showcase:</p>
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
                                        <span>Created 10min ago</span>
                                    </div>
                                </div>

                                <div className="mt-3 flex h-[202px] w-[580px] justify-start rounded-2xl border border-borderColor bg-cardBg p-4">
                                    <img
                                        src={codeSnippet1}
                                        alt="code snippet"
                                    />
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
                                        <span>Created 30min ago</span>
                                    </div>
                                </div>

                                <div className="mt-3 flex h-[154px] w-[580px] justify-start rounded-2xl border border-borderColor bg-cardBg p-4">
                                    <img
                                        src={codeSnippet2}
                                        alt="code snippet"
                                    />
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
