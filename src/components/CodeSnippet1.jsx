const CodeSnippet = () => {
    return (
        <div className="overflow-x-auto rounded-2xl border border-borderColor bg-cardBg px-6 py-4 text-start text-sm text-slate-500">
            <pre className="whitespace-nowrap">
                <code>
                    {/* line 1 of code */}
                    <div>
                        <span className="text-codeRed font-semibold">
                            function
                        </span>
                        <span> initializeModelChunk</span>
                        <span className="text-blueGradient">
                            {`<`}
                            <span className="text-greenGradient">T</span>
                            {`>`}
                        </span>
                        <span>{`(chunk: ResolvedModelChunk): T {`}</span>
                    </div>

                    {/* line 2 of code */}
                    <div className="mt-1">
                        <span>
                            &nbsp;&nbsp;const value:{" "}
                            <span className="text-orangeGradient">T</span> =
                            <span className="text-codePink font-semibold">
                                &nbsp;parseModel
                            </span>
                            (chunk.
                            <span className="font-semibold text-blueGradient">
                                _response
                            </span>
                            , chunk.
                            <span className="font-semibold text-blueGradient">
                                _value
                            </span>
                            );
                        </span>
                    </div>

                    {/* line 3 of code */}
                    <div className="mt-1">
                        <span>
                            &nbsp;&nbsp;
                            <span className="text-codeRed font-semibold">
                                const
                            </span>{" "}
                            initializedChunk:{" "}
                            <span className="font-semibold text-orangeGradient">
                                InitializedChunk
                                <span className="text-blueGradient">{`<`}</span>
                                T
                                <span className="text-blueGradient">{`>`}</span>{" "}
                            </span>
                            = (chunk: any);
                        </span>
                    </div>

                    {/* line 4 of code */}
                    <div className="mt-1">
                        <span>
                            &nbsp;&nbsp;initializedChunk.
                            <span className="font-semibold text-blueGradient">
                                _status
                            </span>{" "}
                            ={" "}
                            <span className="font-semibold text-blueGradient">
                                INITIALIZED
                            </span>
                            ;
                        </span>
                    </div>

                    {/* line 5 of code */}
                    <div className="mt-1">
                        <span>
                            &nbsp;&nbsp;initializedChunk.
                            <span className="font-semibold text-blueGradient">
                                _value
                            </span>{" "}
                            ={" "}
                            <span className="font-semibold text-blueGradient">
                                value
                            </span>
                            ;
                        </span>
                    </div>

                    {/* line 6 of code */}
                    <div className="mt-1">
                        <span>{`}`}</span>
                    </div>
                </code>
            </pre>
        </div>
    );
};

export default CodeSnippet;
