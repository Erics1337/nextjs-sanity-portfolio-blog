function Statistics() {
    return (
        <div>
            <div className="bg-top bg-cover bg-no-repeat pb-16 md:py-16 lg:py-24"
     style={{backgroundImage:"url(img/experience-figure.png)"}}
     id="statistics">
    <div className="container">
        <div
             className="bg-white w-5/6 md:w-11/12 2xl:w-full mx-auto py-16 lg:py-20 xl:py-24 shadow">
            <div
                 className="grid grid-cols-2 xl:grid-cols-4 gap-5 md:gap-8 xl:gap-5">
                <div
                     className="flex md:flex-row flex-col justify-center items-center text-center md:text-left">
                    <div>
                        <img src="img/icon-project.svg"
                             className="mx-auto h-12 md:h-20 w-auto"
                             alt="icon project"/>
                    </div>
                    <div className="md:pl-5 md:pt-0 pt-5">
                        <h1
                            className="font-body font-bold md:text-4xl text-2xl text-primary">
                            12</h1>
                        <h4
                            className="font-header font-medium md:text-xl text-base text-grey-dark leading-loose">
                            Finished Projects</h4>
                    </div>
                </div>

                <div
                     className="flex md:flex-row flex-col justify-center items-center text-center md:text-left">
                    <div>
                        <img src="img/icon-award.svg"
                             className="mx-auto h-12 md:h-20 w-auto"
                             alt="icon award"/>
                    </div>
                    <div className="md:pl-5 md:pt-0 pt-5">
                        <h1
                            className="font-body font-bold md:text-4xl text-2xl text-primary">
                            3</h1>
                        <h4
                            className="font-header font-medium md:text-xl text-base text-grey-dark leading-loose">
                            Awards Won</h4>
                    </div>
                </div>

                <div
                     className="flex md:flex-row flex-col justify-center items-center text-center md:text-left lg:mt-0 md:mt-10 mt-6">
                    <div>
                        <img src="img/icon-happy.svg"
                             className="mx-auto h-12 md:h-20 w-auto"
                             alt="icon happy clients"/>
                    </div>
                    <div className="md:pl-5 md:pt-0 pt-5">
                        <h1
                            className="font-body font-bold md:text-4xl text-2xl text-primary">
                            8</h1>
                        <h4
                            className="font-header font-medium md:text-xl text-base text-grey-dark leading-loose">
                            Happy Clients</h4>
                    </div>
                </div>

                <div
                     className="flex md:flex-row flex-col justify-center items-center text-center md:text-left lg:mt-0 md:mt-10 mt-6">
                    <div>
                        <img src="img/icon-puzzle.svg"
                             className="mx-auto h-12 md:h-20 w-auto"
                             alt="icon puzzle"/>
                    </div>
                    <div className="md:pl-5 md:pt-0 pt-5">
                        <h1
                            className="font-body font-bold md:text-4xl text-2xl text-primary">
                            99</h1>
                        <h4
                            className="font-header font-medium md:text-xl text-base text-grey-dark leading-loose">
                            Bugs Fixed</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}

export default Statistics
