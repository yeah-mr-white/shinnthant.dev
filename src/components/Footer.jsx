import envelop from "../assets/vector/envelop.svg";
import mobile from "../assets/vector/mobile.svg";
import linkedIn from "../assets/vector/linkedIn.svg";
import gitHub from "../assets/vector/gitHub.svg";
import twitter from "../assets/vector/twitter.svg";

const Footer = () => {
    return (
        <footer className="text-center font-firaCode text-slate-500">
            <div className="border-y border-slate-900 bg-cardBg px-4 md:px-8">
                <p className="mt-16 text-base md:text-lg">
                    // what’s next? feel free to reach out to me if you're
                    looking
                    <br /> for a developer, have a query, or simply want to
                    connect.
                </p>
                <div className="mt-8">
                    <div className="flex justify-center gap-2">
                        <img
                            src={envelop}
                            alt="envelop"
                            className="h-6 w-6 sm:h-8 sm:w-8"
                        />
                        <a
                            href="mailto:saishinnthant888836@gmail.com"
                            className="text-xl font-medium text-slate-100 sm:text-3xl"
                        >
                            saishinnthant888836@gmail.com
                        </a>
                    </div>
                    <div className="mt-5 flex justify-center gap-2">
                        <img
                            src={mobile}
                            alt="mobile"
                            className="h-6 w-6 sm:h-8 sm:w-8"
                        />
                        <a
                            href="mailto:saishinnthant888836@gmail.com"
                            className="text-xl font-medium text-slate-100 sm:text-3xl"
                        >
                            +959442662552
                        </a>
                    </div>
                </div>
                <div className="mt-10 pb-16">
                    <p className="text-base">
                        # you may also find me on these platforms!
                    </p>
                    <div className="mt-5 flex justify-center gap-4">
                        <a href="https://www.linkedin.com/in/sai-shinn-thant/">
                            <img src={linkedIn} alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/yeah-mr-white">
                            <img src={gitHub} alt="GitHub" />
                        </a>
                        <a href="https://x.com/not_shinnthant">
                            <img src={twitter} alt="twitter" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-customizedBg px-4 py-3 text-sm md:px-8">
                &#9400; 2024 | Designed and developed by shinnthant
            </div>
        </footer>
    );
};

export default Footer;
