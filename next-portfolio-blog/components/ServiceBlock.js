function ServiceBlock({ image, hoverImage, title, body, link }) {
    return (
        <div className="shadow px-8 py-12 hover:bg-primary group rounded">
        <div className="text-center w-24 xl:w-28 h-24 xl:h-28 mx-auto">
          <div className="hidden group-hover:block">
            <img
              src={image}
              alt="development icon"
            />
          </div>
          <div className="block group-hover:hidden">
            <img
              src={hoverImage}
              alt="development icon"
            />
          </div>
        </div>
        <div className="text-center">
          <h3 className="font-semibold  text-lg lg:text-xl text-primary uppercase pt-8 group-hover:text-yellow">
            {title}
          </h3>
          <p className="text-sm md:text-base text-grey pt-4 group-hover:text-white">
            {body}
          </p>
        </div>
      </div>
    )
}

export default ServiceBlock
