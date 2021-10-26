function Clients() {
    return (
        <div>
            <div className="bg-grey-50"
     id="clients">
    <div className="container py-16 md:py-20">
        <div className="w-full sm:w-3/4 lg:w-full mx-auto">
            <h2
                className="font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center">
                My latest clients</h2>
            <div
                 className="flex flex-wrap items-center justify-center pt-4 sm:pt-4">
                 <span className="block m-8">
                    <img src="/img/logo-coca-cola.svg"
                         alt="client logo"
                         className="mx-auto block h-12 w-auto" />
                 </span>
                 <span className="block m-8">
                    <img src="/img/logo-apple.svg"
                         alt="client logo"
                         className="mx-auto block h-12 w-auto" />
                 </span>

                 <span className="block m-8">
                    <img src="/img/logo-netflix.svg"
                         alt="client logo"
                         className="mx-auto block h-12 w-auto" />
                 </span>

                 <span className="block m-8">
                    <img src="/img/logo-amazon.svg"
                         alt="client logo"
                         className="mx-auto block h-12 w-auto" />
                 </span>

                 <span className="block m-8">
                    <img src="/img/logo-stripe.svg"
                         alt="client logo"
                         className="mx-auto block h-12 w-auto" />
                 </span>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}

export default Clients