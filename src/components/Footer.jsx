import envelop from "../assets/envelop.svg";
import mobile from "../assets/mobile.svg";
import linkedIn from "../assets/linkedIn.svg";
import gitHub from "../assets/gitHub.svg";
import twitter from "../assets/twitter.svg";

const Footer = () => {
    return (
        <footer className="text-center font-firaCode text-slate-500">
            <div className="border-y border-slate-900 bg-cardBg">
                <p className="mt-16 text-lg">
                    // what’s next? feel free to reach out to me if you're
                    looking
                    <br /> for a developer, have a query, or simply want to
                    connect.
                </p>
                <div className="mt-8">
                    <div className="flex justify-center gap-4">
                        <img src={envelop} alt="envelop" className="" />
                        <a
                            href="mailto:saishinnthant888836@gmail.com"
                            className="text-3xl font-medium text-slate-100"
                        >
                            saishinnthant888836@gmail.com
                        </a>
                    </div>
                    <div className="mt-5 flex justify-center gap-4">
                        <img src={mobile} alt="mobile" className="" />
                        <a
                            href="mailto:saishinnthant888836@gmail.com"
                            className="text-3xl font-medium text-slate-100"
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
                        <img src={linkedIn} alt="LinkedIn" />
                        <img src={gitHub} alt="GitHub" />
                        <img src={twitter} alt="twitter" />
                    </div>
                </div>
            </div>
            <div className="bg-customizedBg py-3 text-sm">
                &#9400; 2024 | Designed and coded with &#10084; by shinnthant
            </div>
        </footer>
    );
};

export default Footer;
