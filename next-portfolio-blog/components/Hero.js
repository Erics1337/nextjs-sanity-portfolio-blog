import React from "react"
import Image from 'next/image';
import Link from "next/link";

function Hero() {

  return (
    <div className="bg-center bg-cover bg-no-repeat relative py-8"
    style={{backgroundImage: "url(/img/bg-hero.jpg);"}}>
      <div className="container z-30 relative pt-20 sm:pt-56 lg:pt-64 pb-12 sm:pb-48 lg:pb-48 mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="rounded-full border-8 border-primary shadow-xl">
            <Image
              src="/profilePic.jpg"
              className="h-48 sm:h-56 rounded-full"
              alt="author"
              height={200} width={200}
            />
          </div>
          <div className="lg:pl-8 pt-8 sm:pt-10 lg:pt-0">
            <h1 className="font-header text-black text-4xl sm:text-5xl md:text-6xl text-center sm:text-left">
              Hello I'm Eric Swanson!
            </h1>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start pt-3 sm:pt-5">
              <div className="flex justify-center sm:justify-start items-center pl-0 md:pl-1">
                <p className="font-body text-black text-lg uppercase pr-3">
                  Let's connect
                </p>
              </div>
              {/* Icons */}
              <div className="flex items-center justify-center sm:justify-start pt-5 sm:pt-0 pl-2">
              <div className="hidden sm:block px-2">
                  <Link href='https://github.com/Erics1337'><Image className="cursor-pointer" src="/img/gitHub.png" alt="GitHub" height={30} width={30} /></Link>
                </div>
                <div className="hidden sm:block px-2">
                  <Link href='https://www.linkedin.com/in/ericswansondesign/'><Image className="cursor-pointer" src="/img/linkedin.png" alt="GitHub" height={30} width={30} /></Link>
                </div>
                <div className="hidden sm:block px-2">
                  <Link href='https://twitter.com/don_swan'><Image className="cursor-pointer" src="/img/twitter.png" alt="GitHub" height={40} width={40} /></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
