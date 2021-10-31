function Timeline({ image, dates, title, description }) {
    return (
        <div className="flex flex-col md:flex-row text-center md:text-left mt-8">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="flex-shrink-0">
                  <img
                    src= { image }
                    className="w-32 h-auto"
                    alt="company logo"
                  />
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
                  <i className="bx bxs-right-arrow text-primary hidden md:block"></i>
                  <div className="md:pl-8 md:-mt-1">
                    <span className="font-body font-bold text-grey-40 block">
                      { dates }
                    </span>
                    <span className="font-header font-bold text-xl text-primary uppercase block pt-2">
                      { title }
                    </span>
                    <div className="pt-2">
                      <span className="font-body text-black block">
                        { description }
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default Timeline
