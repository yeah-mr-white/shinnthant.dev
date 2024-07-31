const ContactMeCodeSnippet = () => {
    return (
        <div className="max-w-xl overflow-x-auto whitespace-nowrap rounded-2xl border border-borderColor bg-cardBg px-6 py-4 text-start text-base text-slate-500">
            <pre>
                <code className="font-cascadia">
                    {/* line 1 of code */}
                    <div>
                        <span className="text-codePink">const</span>
                        <span className="italic text-blueGradient">
                            &nbsp;button
                        </span>
                        <span className="text-codePink">&nbsp;=</span>
                        <span className="italic text-greenGradient">
                            &nbsp;document
                        </span>
                        <span className="text-slate-300">.</span>
                        <span className="italic text-blueGradient">
                            querySelector
                        </span>
                        <span className="text-yellow-300">{`(`}</span>
                        <span className="text-slate-300">'</span>
                        <span className="text-orangeGradient">#sendBtn</span>
                        <span className="text-slate-300">'</span>
                        <span className="text-yellow-300">{`)`}</span>
                        <span className="text-slate-300">;</span>
                    </div>
                    <br />

                    {/* line 2 of code */}
                    <div className="mt-1">
                        <span className="text-codePink">const</span>
                        <span className="italic text-blueGradient">
                            &nbsp;message
                        </span>
                        <span className="text-codePink">&nbsp;=</span>
                        <span className="text-yellow-300">&nbsp;{`{`}</span>
                    </div>

                    {/* line 3 of code */}
                    <div className="mt-1">
                        <span className="text-codePink italic">
                            &nbsp;&nbsp;&nbsp;&nbsp;name:
                        </span>
                        <span className="text-slate-300">&nbsp;"</span>
                        <span className="text-orangeGradient">john-doe</span>
                        <span className="text-slate-300">"</span>
                        <span className="text-codePink">,</span>
                    </div>

                    {/* line 4 of code */}
                    <div className="mt-1">
                        <span className="text-codePink italic">
                            &nbsp;&nbsp;&nbsp;&nbsp;email:
                        </span>
                        <span className="text-slate-300">&nbsp;"</span>
                        <span className="text-orangeGradient">
                            john-doe@email.com
                        </span>
                        <span className="text-slate-300">"</span>
                        <span className="text-codePink">,</span>
                    </div>

                    {/* line 5 of code */}
                    <div className="mt-1">
                        <span className="text-codePink italic">
                            &nbsp;&nbsp;&nbsp;&nbsp;message:
                        </span>
                        <span className="text-slate-300">&nbsp;"</span>
                        <span className="text-orangeGradient">
                            Hey! Just checked your website and it looks awesome!
                            Also, I checked your articled on Medium. Lerned a
                            few nice tips. Thanks!
                        </span>
                        <span className="text-slate-300">"</span>
                        <span className="text-codePink">,</span>
                    </div>

                    {/* line 6 of code */}
                    <div className="mt-1">
                        <span className="text-codePink italic">
                            &nbsp;&nbsp;&nbsp;&nbsp;date:
                        </span>
                        <span className="text-slate-300">&nbsp;"</span>
                        <span className="text-orangeGradient">Thu 21 Apr</span>
                        <span className="text-slate-300">"</span>
                    </div>

                    {/* line 7 of code */}
                    <div className="mt-1">
                        <span className="text-yellow-300">{`}`}</span>
                    </div>
                    <br />

                    {/* line 8 of code */}
                    <div className="mt-1">
                        <span className="italic text-greenGradient">
                            button
                        </span>
                        <span className="text-slate-300">.</span>
                        <span className="italic text-blueGradient">
                            addEventListener
                        </span>
                        <span className="text-yellow-300">{`(`}</span>
                        <span className="text-slate-300">'</span>
                        <span className="text-orangeGradient">click</span>
                        <span className="text-slate-300">'</span>
                        <span className="text-slate-300">,</span>
                        <span className="text-codePink">&nbsp;{`(`}</span>
                        <span className="text-codePink">{`)`}</span>
                        <span className="text-codePink">&nbsp;{`=>`}</span>
                        <span className="text-codePink">&nbsp;{`{`}</span>
                    </div>

                    {/* line 9 of code */}
                    <div className="mt-1">
                        <span className="italic text-greenGradient">
                            &nbsp;&nbsp;&nbsp;&nbsp;form
                        </span>
                        <span className="text-slate-300">.</span>
                        <span className="italic text-blueGradient">send</span>
                        <span className="text-blueGradient">{`(`}</span>
                        <span className="text-slate-300">message</span>
                        <span className="text-blueGradient">{`)`}</span>
                        <span className="text-slate-300">;</span>
                    </div>

                    {/* line 10 of code */}
                    <div className="mt-1">
                        <span className="text-codePink">{`}`}</span>
                        <span className="text-yellow-300">{`)`}</span>
                    </div>

                    {/* line 11 of code */}
                    <div className="mt-1">
                        <span></span>
                    </div>
                </code>
            </pre>
        </div>
    );
};

//

// const message = {
// 	name: "john-doe",
// 	email: "john-doe@email.com",
// 	message: "",
// 	date: "Thu 21 Apr"
// }

// button.addEventListener('click', () => {
// 	form.send(message);
// })

export default ContactMeCodeSnippet;
