const AboutMeCodeSnippet2 = () => {
    return (
        <div className="overflow-x-auto whitespace-nowrap rounded-2xl border border-borderColor bg-cardBg px-6 py-4 text-start text-base text-slate-500 lg:max-w-xl">
            <pre>
                <code className="font-cascadia">
                    {/* line 1 of code */}
                    <div>
                        <span className="text-codePink italic">async</span>
                        <span className="text-codePink">&nbsp;function</span>
                        <span className="italic text-blueGradient">
                            &nbsp;foo
                        </span>
                        <span className="text-yellow-300">{`(`}</span>
                        <span className="text-slate-300">tp</span>
                        <span className="text-yellow-300">{`)`}</span>
                        <span className="text-yellow-300">&nbsp;{`{`}</span>
                    </div>

                    {/* line 2 of code */}
                    <div className="mt-1">
                        <span className="text-greenGradient">
                            &nbsp;&nbsp;&nbsp;&nbsp;console
                        </span>
                        <span className="text-codePink">.</span>
                        <span className="italic text-blueGradient">log</span>
                        <span className="text-codePink">{`(`}</span>
                        <span className="text-slate-300">"</span>
                        <span className="text-orangeGradient">foo</span>
                        <span className="text-slate-300">"</span>
                        <span className="text-codePink">{`)`}</span>
                        <span className="text-slate-300">;</span>
                    </div>

                    {/* line 3 of code */}
                    <div className="mt-1">
                        <span className="text-codePink italic">
                            &nbsp;&nbsp;&nbsp;&nbsp;return
                        </span>
                        <span className="text-slate-300">&nbsp;"</span>
                        <span className="text-orangeGradient">foo</span>
                        <span className="text-slate-300">"</span>
                        <span className="text-codePink">&nbsp;+</span>
                        <span className="italic text-greenGradient">
                            &nbsp;tp
                        </span>
                        <span className="text-codePink">.</span>
                        <span className="italic text-yellow-300">user</span>
                        <span className="text-codePink">.</span>
                        <span className="italic text-blueGradient">bar</span>
                        <span className="text-codePink">{`(`}</span>
                        <span className="text-slate-300">tp</span>
                        <span className="text-codePink">{`)`}</span>
                        <span className="text-slate-300">;</span>
                    </div>

                    {/* line 4 of code */}
                    <div className="mt-1">
                        <span className="text-yellow-300">{`}`}</span>
                    </div>
                    <br />
                    {/* line 5 of code */}
                    <div className="mt-1">
                        <span className="text-lime-300">module</span>
                        <span className="text-codePink">.</span>
                        <span className="text-lime-300">exports</span>
                        <span className="text-codePink">&nbsp;=</span>
                        <span className="text-slate-300">&nbsp;foo</span>
                        <span className="text-slate-300">;</span>
                    </div>
                </code>
            </pre>
        </div>
    );
};

export default AboutMeCodeSnippet2;
