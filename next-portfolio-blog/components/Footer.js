function Footer() {
    return (
        <section>
                        <div className="bg-primary">
    <div className="container py-6 flex flex-col sm:flex-row justify-between">
        <p className="font-body text-white text-center md:text-left">© Copyright
            2021. All right reserved, ATOM.</p>
        <div
             className="flex items-center justify-center sm:justify-start pt-5 sm:pt-0">
            <a href="/">
                <i
                   className='bx bxl-facebook-square text-white hover:text-yellow text-2xl'></i>
            </a>
            <a href="/"
               className="pl-4">
                <i
                   className='bx bxl-twitter text-white hover:text-yellow text-2xl'></i>
            </a>
            <a href="/"
               className="pl-4">
                <i
                   className='bx bxl-dribbble text-white hover:text-yellow text-2xl'></i>
            </a>
            <a href="/"
               className="pl-4">
                <i
                   className='bx bxl-linkedin text-white hover:text-yellow text-2xl'></i>
            </a>
            <a href="/"
               className="pl-4">
                <i
                   className='bx bxl-instagram text-white hover:text-yellow text-2xl'></i>
            </a>
        </div>
    </div>
</div>
        </section>
    )
}

export default Footer
