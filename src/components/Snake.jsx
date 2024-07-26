const Snake = () => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="relative">
                {/* Canvas Background Blur */}
                <div className="left animation-delay-4000 absolute -left-28 -top-28 h-96 w-96 animate-blob rounded-full bg-greenGradient opacity-25 blur-3xl filter"></div>
                <div className="left animation-delay-2000 absolute -bottom-24 left-20 h-80 w-80 animate-blob rounded-full bg-blueGradient opacity-25 blur-3xl filter"></div>
                <div className="left animation-delay-2000 absolute -right-16 bottom-20 h-64 w-64 animate-blob rounded-full bg-blueGradient opacity-25 blur-3xl filter"></div>

                {/* Canvas */}
                <div className="relative flex h-[475px] w-[510px] items-center justify-between rounded-lg border border-borderColor bg-canvasBg shadow-customInset">
                    {/* Left Canvas*/}
                    <div className="shadow-snakeBoardBoxShadow ml-8 h-[405px] w-[238px] rounded-lg bg-snakeBoardBg">
                        <div className=""></div>
                    </div>
                    {/* Left Canvas*/}
                </div>
            </div>
        </div>

        // vectors
        /* Background Snake */

        // position: absolute;
        // width: 238.69px;
        // height: 405.32px;
        // left: 860.31px;
        // top: 310px;

        // background: rgba(1, 22, 39, 0.84);
        // box-shadow: inset 1px 5px 11px rgba(2, 18, 27, 0.71);
        // border-radius: 8px;
    );
};

export default Snake;
