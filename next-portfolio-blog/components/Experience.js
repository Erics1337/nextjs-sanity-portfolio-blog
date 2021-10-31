function Experience() {
    return (
        <section>
            <div className="container py-16 md:py-20"
     id="work">
    <h2
        className="font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center">
        My work experience</h2>
    <h3
        className="font-header font-medium text-black text-xl sm:text-2xl lg:text-3xl pt-6 text-center">
        Here's what I did before freelancing</h3>

    <div className="w-full lg:w-2/3 mx-auto flex flex-col mt-12 relative">
        <span className="absolute inset-y-0 left-2/5 ml-10 w-0.5 bg-grey-40 hidden md:block"></span>

        <div className="flex flex-col md:flex-row text-center md:text-left mt-8">
            <div className="md:w-2/5">
                <div className="flex justify-center md:justify-start">
                    <span className="flex-shrink-0">
                        <img src="/img/logo-spotify.svg"
                            className="w-32 h-auto"
                            alt="company logo" />
                    </span>
                    <div className="relative w-full ml-3 hidden md:block">
                        <span className="h-0.5 bg-grey-70 absolute inset-x-0 top-1/2 transform -translate-y-1/2"></span>
                    </div>
                </div>
            </div>
            <div className="md:w-3/5">
                <div className="flex md:pl-18 relative">
                    <span className="border-2 border-grey-40 rounded-full w-4 h-4 absolute left-8 top-1 bg-white hidden md:block"></span>

                    <div className="mt-1 flex">
                        <i className='bx bxs-right-arrow text-primary hidden md:block'></i>
                        <div className="md:pl-8 md:-mt-1">
                            <span className="font-body font-bold text-grey-40 block">Apr
                                2015 - Mar 2018</span>
                            <span
                                  className="font-header font-bold text-xl text-primary uppercase block pt-2">Frontend Developer</span>
                            <div className="pt-2">
                                <span className="font-body text-black block">Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit.
                                    Vestibulum mattis felis vitae risus pulvinar
                                    tincidunt. Nam ac venenatis enim.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row text-center md:text-left mt-8">
            <div className="md:w-2/5">
                <div className="flex justify-center md:justify-start">
                    <span className="flex-shrink-0">
                        <img src="/img/logo-microsoft.svg"
                            className="w-32 h-auto"
                            alt="company logo" />
                    </span>
                    <div className="relative w-full ml-3 hidden md:block">
                        <span className="h-0.5 bg-grey-70 absolute inset-x-0 top-1/2 transform -translate-y-1/2"></span>
                    </div>
                </div>
            </div>
            <div className="md:w-3/5">
                <div className="flex md:pl-18 relative">
                    <span className="border-2 border-grey-40 rounded-full w-4 h-4 absolute left-8 top-1 bg-white hidden md:block"></span>

                    <div className="mt-1 flex">
                        <i className='bx bxs-right-arrow text-primary hidden md:block'></i>
                        <div className="md:pl-8 md:-mt-1">
                            <span className="font-body font-bold text-grey-40 block">Mar 2018 - September 2019</span>
                            <span
                                  className="font-header font-bold text-xl text-primary uppercase block pt-2">Software Engineer</span>
                            <div className="pt-2">
                                <span className="font-body text-black block">Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit.
                                    Vestibulum mattis felis vitae risus pulvinar
                                    tincidunt. Nam ac venenatis enim.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row text-center md:text-left mt-8">
            <div className="md:w-2/5">
                <div className="flex justify-center md:justify-start">
                    <span className="flex-shrink-0">
                        <img src="/img/logo-fedex.svg"
                            className="w-32 h-auto"
                            alt="company logo" />
                    </span>
                    <div className="relative w-full ml-3 hidden md:block">
                        <span className="h-0.5 bg-grey-70 absolute inset-x-0 top-1/2 transform -translate-y-1/2"></span>
                    </div>
                </div>
            </div>
            <div className="md:w-3/5">
                <div className="flex md:pl-18 relative">
                    <span className="border-2 border-grey-40 rounded-full w-4 h-4 absolute left-8 top-1 bg-white hidden md:block"></span>

                    <div className="mt-1 flex">
                        <i className='bx bxs-right-arrow text-primary hidden md:block'></i>
                        <div className="md:pl-8 md:-mt-1">
                            <span className="font-body font-bold text-grey-40 block">October 2019 - Feb 2021</span>
                            <span
                                  className="font-header font-bold text-xl text-primary uppercase block pt-2">DevOps Engineer</span>
                            <div className="pt-2">
                                <span className="font-body text-black block">Lorem ipsum
                                    dolor sit amet, consectetur adipiscing elit.
                                    Vestibulum mattis felis vitae risus pulvinar
                                    tincidunt. Nam ac venenatis enim.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </section>
    )
}

export default Experience
