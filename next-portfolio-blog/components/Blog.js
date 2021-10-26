function Blog() {
    return (
        <div>
            <div className="bg-grey-50"
     id="blog">
    <div className="container py-16 md:py-20">
        <h2
            className="font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center">
            I also like to write</h2>
        <h4
            className="font-header font-medium text-black text-xl sm:text-2xl lg:text-3xl pt-6 text-center">
            Check out my latest posts!</h4>
        <div
             className="w-full sm:w-3/4 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-10 pt-12">
            <a href="/post"
               className="shadow">
                <div style={{backgroundImage: "url(/img/post-01.png);"}}
                     className="bg-center bg-cover bg-no-repeat h-72 sm:h-84 lg:h-64 xl:h-72 relative group">
                    <span
                          className="bg-cover bg-no-repeat bg-center absolute inset-0 opacity-10 transition-opacity group-hover:opacity-50 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to"></span>
                    <span
                          className="font-body font-bold text-sm md:text-base text-white border-2 border-white block px-6 py-2 uppercase rounded-full text-center absolute right-0 bottom-0 mr-4 mb-4">Read
                        More</span>
                </div>
                <div className="bg-white py-6 xl:py-8 px-5">
                    <span
                          className="font-body font-semibold text-lg text-black block">How
                        to become a frontend developer</span>
                    <span className="font-body text-grey-20 pt-2 block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </div>
            </a>
            <a href="/post"
               className="shadow">
                <div style={{backgroundImage: "url(/img/post-02.png);"}}
                     className="bg-center bg-cover bg-no-repeat h-72 sm:h-84 lg:h-64 xl:h-72 relative group">
                    <span
                          className="bg-cover bg-no-repeat bg-center absolute inset-0 opacity-10 transition-opacity group-hover:opacity-50 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to"></span>
                    <span
                          className="font-body font-bold text-sm md:text-base text-white border-2 border-white block px-6 py-2 uppercase rounded-full text-center absolute right-0 bottom-0 mr-4 mb-4">Read
                        More</span>
                </div>
                <div className="bg-white py-6 xl:py-8 px-5">
                    <span
                          className="font-body font-semibold text-lg text-black block">My
                        personal productivity system</span>
                    <span className="font-body text-grey-20 pt-2 block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </div>
            </a>
            <a href="/post"
               className="shadow">
                <div style={{backgroundImage: "url(/img/post-03.png);"}}
                     className="bg-center bg-cover bg-no-repeat h-72 sm:h-84 lg:h-64 xl:h-72 relative group">
                    <span
                          className="bg-cover bg-no-repeat bg-center absolute inset-0 opacity-10 transition-opacity group-hover:opacity-50 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to"></span>
                    <span
                          className="font-body font-bold text-sm md:text-base text-white border-2 border-white block px-6 py-2 uppercase rounded-full text-center absolute right-0 bottom-0 mr-4 mb-4">Read
                        More</span>
                </div>
                <div className="bg-white py-6 xl:py-8 px-5">
                    <span
                          className="font-body font-semibold text-lg text-black block">My
                        year in review 2020</span>
                    <span className="font-body text-grey-20 pt-2 block">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
                </div>
            </a>
        </div>
    </div>
</div>
        </div>
    )
}

export default Blog
