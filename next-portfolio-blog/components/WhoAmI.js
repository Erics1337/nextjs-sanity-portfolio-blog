function WhoAmI() {
    return (
        <div>
            <div className="bg-grey-50"
     id="about">
    <div
         className="container py-16 md:py-20 flex flex-col lg:flex-row items-center">
        <div className="w-full sm:w-3/4 lg:w-3/5 text-center lg:text-left">
            <h2
                className="font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase">
                Who am I?</h2>
            <h4
                className="font-header font-medium text-black text-xl sm:text-2xl lg:text-3xl pt-6">
                I'm Christy Smith, a Web Designer &
                Photographer</h4>
            <p className="font-body text-grey-20 pt-6 leading-relaxed">Lorem ipsum
                dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div
                 className="flex flex-col sm:flex-row justify-center lg:justify-start pt-6">
                <div className="flex justify-center sm:justify-start items-center">
                    <p
                       className="font-body font-semibold text-grey-20 text-lg uppercase">
                        Connect with me</p>
                    <div className="hidden sm:block">
                        <i
                           className='bx bx-chevron-right text-primary text-2xl'></i>
                    </div>
                </div>
                <div
                     className="flex items-center justify-center sm:justify-start pt-5 sm:pt-0 pl-2">
                    <a href="/">
                        <i
                           className='bx bxl-facebook-square text-primary hover:text-yellow text-2xl'></i>
                    </a>
                    <a href="/"
                       className="pl-4">
                        <i
                           className='bx bxl-twitter text-primary hover:text-yellow text-2xl'></i>
                    </a>
                    <a href="/"
                       className="pl-4">
                        <i
                           className='bx bxl-dribbble text-primary hover:text-yellow text-2xl'></i>
                    </a>
                    <a href="/"
                       className="pl-4">
                        <i
                           className='bx bxl-linkedin text-primary hover:text-yellow text-2xl'></i>
                    </a>
                    <a href="/"
                       className="pl-4">
                        <i
                           className='bx bxl-instagram text-primary hover:text-yellow text-2xl'></i>
                    </a>
                </div>
            </div>

        </div>
        <div className="w-full sm:w-3/4 lg:w-2/5 pl-0 lg:pl-12 pt-10 lg:pt-0">
            <div>
                <div className="flex justify-between items-end">
                    <h4 className="font-body font-semibold text-black uppercase">
                        HTML & CSS</h4>
                    <h3 className="font-body font-bold text-primary text-3xl">85%
                    </h3>
                </div>
                <div className="h-3 w-full rounded-full bg-lila mt-2">
                    <div className="h-3 rounded-full bg-primary"
                         style={{width: 85}}></div>
                </div>
            </div>
            <div className="pt-6">
                <div className="flex justify-between items-end">
                    <h4 className="font-body font-semibold text-black uppercase">Python
                    </h4>
                    <h3 className="font-body font-bold text-primary text-3xl">70%
                    </h3>
                </div>
                <div className="h-3 w-full rounded-full bg-lila mt-2">
                    <div className="h-3 rounded-full bg-primary"
                         style={{width: 70}}></div>
                </div>
            </div>
            <div className="pt-6">
                <div className="flex justify-between items-end">
                    <h4 className="font-body font-semibold text-black uppercase">Javascript</h4>
                    <h3 className="font-body font-bold text-primary text-3xl">98%
                    </h3>
                </div>
                <div className="h-3 w-full rounded-full bg-lila mt-2">
                    <div className="h-3 rounded-full bg-primary"
                         style={{width: 98}}></div>
                </div>
            </div>
            <div className="pt-6">
                <div className="flex justify-between items-end">
                    <h4 className="font-body font-semibold text-black uppercase">
                        Figma</h4>
                    <h3 className="font-body font-bold text-primary text-3xl">91%
                    </h3>
                </div>
                <div className="h-3 w-full rounded-full bg-lila mt-2">
                    <div className="h-3 rounded-full bg-primary"
                         style={{width: 91}}></div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}

export default WhoAmI
