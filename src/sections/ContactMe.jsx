import terminalVector40 from "../assets/vector/terminalVector40.svg";
import personalVector from "../assets/vector/personalVector.svg";
import hobbiesVector40 from "../assets/vector/hobbiesVector40.svg";
import ContactMeCodeSnippet from "../components/ContactMeCodeSnippet.jsx";

const ContaceMe = () => {
    return (
        <section
            id="contact-me"
            className="bg-customizedBg py-16 md:py-24 lg:px-4"
        >
            <div className="max-container text-center font-firaCode text-slate-100">
                <div className="px-4 md:px-8">
                    <h1 className="text-3xl font-medium md:text-5xl md:font-medium">
                        #contact-me
                    </h1>
                    {/* horizontal rule under section title */}
                    <hr className="mx-auto mt-2 h-[2px] w-16 border-0 bg-customizedBtnBg sm:mt-4 sm:h-[3px] sm:w-[152px]" />
                </div>

                {/* contact me for mobile & tablet view */}
                <div className="mt-12 lg:hidden">
                    <form className="flex items-center justify-center border-r border-borderColor text-slate-500">
                        <div className="min-w-80 text-start">
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
                </div>

                {/* contact me for laptop view */}
                <div className="w-max-container mt-16 hidden rounded-lg border border-borderColor text-slate-500 lg:block">
                    {/* Second Table Row */}
                    <div className="flex">
                        {/* First Column */}
                        <div className="min-w-16 border-r border-borderColor">
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
                        {/* Second Column - form */}
                        <form className="flex h-[567px] w-[546px] items-center justify-center border-r border-borderColor px-8">
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
                            <ContactMeCodeSnippet />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContaceMe;
