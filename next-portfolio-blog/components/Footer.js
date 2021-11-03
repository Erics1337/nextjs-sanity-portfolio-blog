import Link from 'next/link';

function Footer() {
  return (
    <section id="footer">
      <div className="bg-primary">
        <div className="container py-6 flex flex-col sm:flex-row justify-between">
            <Link href="/">
                <p className="cursor-pointer font-body text-white text-center md:text-left">
                    Eric Swanson
                </p>
            </Link>
          {/* Social Icons */}
          <div className="flex items-center justify-center sm:justify-start pt-5 sm:pt-0">
            <a href="/">
              <i className="bx bxl-facebook-square text-white hover:text-yellow text-2xl"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-twitter text-white hover:text-yellow text-2xl"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-dribbble text-white hover:text-yellow text-2xl"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-linkedin text-white hover:text-yellow text-2xl"></i>
            </a>
            <a href="/" className="pl-4">
              <i className="bx bxl-instagram text-white hover:text-yellow text-2xl"></i>
            </a>
          </div>
        {/* Sanity Studio Link */}
        <Link href="https://www.sanitystudio.cyberwildstudio.com">
            <p className=" cursor-pointer font-body text-white text-center md:text-left">Sanity Studio</p>
        </Link>
        </div>
      </div>
    </section>
  )
}

export default Footer
