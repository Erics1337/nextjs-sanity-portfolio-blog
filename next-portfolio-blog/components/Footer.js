import Link from 'next/link';
// import LetsConnect from './LetsConnect';

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
          {/* <LetsConnect /> */}
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
