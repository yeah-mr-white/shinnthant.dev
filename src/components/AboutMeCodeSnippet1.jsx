const AboutMeCodeSnippet = () => {
    return (
        <div className="overflow-x-auto whitespace-nowrap rounded-2xl border border-borderColor bg-cardBg px-6 py-4 text-start text-base text-slate-500 lg:max-w-xl">
            <pre>
                <code className="font-cascadia">
                    {/* line 1 of code */}
                    <div>
                        <span className="text-codePink">function</span>
                        <span className="italic text-blueGradient">
                            &nbsp;initializeModelChunk
                        </span>
                        <span className="text-slate-300">{`<`}</span>
                        <span className="text-orangeGradient">T</span>
                        <span className="text-slate-300">{`>`}</span>
                        <span className="text-yellow-300">{`(`}</span>
                        <span className="text-slate-300">chunk</span>
                        <span className="text-greenGradient">:</span>
                        <span className="text-orangeGradient">
                            &nbsp;ResolvedModelChunk
                        </span>
                        <span className="text-yellow-300">{`)`}</span>
                        <span className="text-greenGradient">:</span>
                        <span className="text-orangeGradient">&nbsp;T</span>
                        <span className="text-yellow-300">&nbsp;{`{`}</span>
                    </div>

                    {/* line 2 of code */}
                    <div className="mt-1">
                        <span className="text-codePink">
                            &nbsp;&nbsp;&nbsp;&nbsp;const
                        </span>
                        <span className="italic text-blueGradient">
                            &nbsp;value
                        </span>
                        <span className="text-greenGradient">:</span>
                        <span className="text-orangeGradient">&nbsp;T</span>
                        <span className="text-codePink">&nbsp;=</span>
                        <span className="italic text-blueGradient">
                            &nbsp;parseModel
                        </span>
                        <span className="text-codePink">{`(`}</span>
                        <span className="text-greenGradient">chunk</span>
                        <span className="text-codePink">.</span>
                        <span className="text-green-300">_response</span>
                        <span className="text-slate-300">,</span>
                        <span className="text-greenGradient">&nbsp;chunk</span>
                        <span className="text-codePink">.</span>
                        <span className="text-green-300">_value</span>
                        <span className="text-codePink">{`)`}</span>
                        <span className="text-slate-300">;</span>
                    </div>

                    {/* line 3 of code */}
                    <div className="mt-1">
                        <span className="text-codePink">
                            &nbsp;&nbsp;&nbsp;&nbsp;const
                        </span>
                        <span className="italic text-blueGradient">
                            &nbsp;initializedChunk
                        </span>
                        <span className="text-greenGradient">:</span>
                        <span className="text-orangeGradient">
                            &nbsp;InitializedChunk
                        </span>
                        <span className="text-codePink">{`<`}</span>
                        <span className="text-orangeGradient">T</span>
                        <span className="text-codePink">{`>`}</span>
                        <span className="text-codePink">&nbsp;=</span>
                        <span className="text-codePink">&nbsp;{`(`}</span>
                        <span className="italic text-slate-300">chunk</span>
                        <span className="text-greenGradient">:</span>
                        <span className="italic text-orange-300">
                            &nbsp;any
                        </span>
                        <span className="text-codePink">{`)`}</span>
                        <span className="text-codePink">;</span>
                    </div>

                    {/* line 4 of code */}
                    <div className="mt-1">
                        <span className="text-codePink italic">
                            &nbsp;&nbsp;&nbsp;&nbsp;initializedChunk
                        </span>
                        <span className="text-codePink italic">.</span>
                        <span className="text-codePink italic">_status</span>
                        <span className="text-codePink">&nbsp;=</span>
                        <span className="text-codePink italic">
                            &nbsp;INITIALIZED
                        </span>
                        <span className="text-codePink">;</span>
                    </div>

                    {/* line 5 of code */}
                    <div className="mt-1">
                        <span className="text-codePink italic">
                            &nbsp;&nbsp;&nbsp;&nbsp;initializedChunk
                        </span>
                        <span className="text-codePink italic">.</span>
                        <span className="text-codePink italic">_value</span>
                        <span className="text-codePink">&nbsp;=</span>
                        <span className="text-codePink italic">
                            &nbsp;value
                        </span>
                        <span className="text-codePink">;</span>
                    </div>

                    {/* line 6 of code */}
                    <div className="mt-1">
                        <span className="text-codePink italic">
                            &nbsp;&nbsp;&nbsp;&nbsp;return
                        </span>
                        <span className="text-codePink italic">
                            &nbsp;value
                        </span>
                        <span className="text-codePink">;</span>
                    </div>

                    {/* line 7 of code */}
                    <div className="mt-1">
                        <span className="italic text-yellow-300">{`}`}</span>
                    </div>
                </code>
            </pre>
        </div>
    );
};

//     initializedChunk._status = ;
//     initializedChunk._value = value;
//     return value;
//   }

export default AboutMeCodeSnippet;
