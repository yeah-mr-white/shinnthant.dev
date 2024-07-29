import terminalVector40 from "../assets/vector/terminalVector40.svg";
import personalVector from "../assets/vector/personalVector.svg";
import hobbiesVector40 from "../assets/vector/hobbiesVector40.svg";
import contactMeCodeSnippet from "../assets/codeSnippet/contactMeCodeSnippet.svg";

const ContaceMe = () => {
    return (
        <section className="bg-customizedBg py-24">
            <div className="max-container text-center font-firaCode text-slate-100">
                <div>
                    <h1 className="text-5xl font-medium">#contact-me</h1>
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
                                    src={terminalVector40}
                                    alt="terminal"
                                    className="mt-7 h-6 w-6"
                                />
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src={personalVector}
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
                        <form className="flex h-[567px] w-[546px] items-center justify-center border-r border-borderColor">
                            <div className="w-[372px] text-start">
                                {/* Name */}
                                <div className="">
                                    <label
                                        forHTML="username"
                                        className="block leading-6"
                                    >
                                        _name:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            autocomplete="username"
                                            className="block w-full rounded-lg border border-borderColor bg-cardBg placeholder:text-slate-700"
                                            placeholder="john-doe"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="mt-6">
                                    <label
                                        forHTML="email"
                                        className="block leading-6"
                                    >
                                        _email:
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autocomplete="email"
                                            className="block w-full rounded-lg border border-borderColor bg-cardBg placeholder:text-slate-700"
                                            placeholder="john-doe@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="mt-6">
                                    <label
                                        forHTML="about"
                                        className="block leading-6"
                                    >
                                        _message:
                                    </label>
                                    <div className="mt-2">
                                        <div>
                                            <textarea
                                                name="about"
                                                id="about"
                                                rows={3}
                                                className="block w-full rounded-lg border border-borderColor bg-cardBg placeholder:text-slate-700"
                                                placeholder="Leave your message here"
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>

                                {/* Button */}
                                <div className="mt-6">
                                    <button className="rounded-lg bg-customizedBtnBgGray px-3.5 py-2.5 text-sm text-slate-100">
                                        <a href="#">submit-message</a>
                                    </button>
                                </div>
                            </div>
                        </form>

                        {/* Third Column */}
                        <div className="ml-7 flex items-center">
                            <img
                                src={contactMeCodeSnippet}
                                alt="JavaScript code snippet"
                                className="rounded-2xl border border-borderColor bg-cardBg p-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContaceMe;
