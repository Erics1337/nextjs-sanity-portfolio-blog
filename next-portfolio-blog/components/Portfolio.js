function Portfolio() {
    return (
        <div>
            <div className="container py-16 md:py-20"
     id="portfolio">
    <h2
        className="font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center">
        Check out my Portfolio</h2>
    <h3
        className="font-header font-medium text-black text-xl sm:text-2xl lg:text-3xl pt-6 text-center">
        Here's what I have done with the past</h3>

    <div
         className="w-full sm:w-3/4 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 pt-12">
        <a href="/"
           className="mx-auto md:mx-0 transition-all transform hover:scale-105">
            <img src="/img/portfolio-apple.jpeg"
                 className="shadow w-full"
                 alt="portfolio image"/>
        </a>
        <a href="/"
           className="mx-auto md:mx-0 transition-all transform hover:scale-105">
            <img src="/img/portfolio-stripe.jpeg"
                 className="shadow w-full"
                 alt="portfolio image"/>
        </a>
        <a href="/"
           className="mx-auto md:mx-0 transition-all transform hover:scale-105">
            <img src="/img/portfolio-fedex.jpeg"
                 className="shadow w-full"
                 alt="portfolio image"/>
        </a>
        <a href="/"
           className="mx-auto md:mx-0 transition-all transform hover:scale-105">
            <img src="/img/portfolio-microsoft.jpeg"
                 className="shadow w-full"
                 alt="portfolio image"/>
        </a>
    </div>
</div>
        </div>
    )
}

export default Portfolio
