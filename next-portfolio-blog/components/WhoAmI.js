import Image from "next/image"
import LetsConnect from "./LetsConnect";

function WhoAmI() {
    return (
        <section>
            <div className="bg-grey-50"
     id="about">
    <div className="container py-16 md:py-20 flex flex-col lg:flex-row items-center mx-auto">
        <div className="w-full sm:w-3/4 lg:w-3/5 text-center lg:text-left">
            <h2
                className="font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase">
                Who am I?</h2>
            <h4
                className="font-header font-medium text-black text-xl sm:text-2xl lg:text-3xl pt-6">
                I'm Eric Swanson, a Full-Stack Web Developer, Designer, and Content Creator</h4>
            <p className="text-grey-20 pt-6 leading-relaxed">
                I love to create.  I am passionate about what I do, and the projects I work on.  
                My greatest joy is helping others acheive their goals using my skills and experience.  
                Check out my work, and if you like what I do, let's connect and make something amazing together.
            </p>
            <LetsConnect />
        </div>

        {/* Skills */}
        <div className="w-full sm:w-3/4 lg:w-2/5 pl-0 lg:pl-12 pt-10 lg:pt-0">
            <h1 className="text-center font-bold text-3xl pb-5">Skills</h1>
            <div className="grid grid-cols-2">
                    <h4 className="font-semibold text-black uppercase my-auto">
                        HTML & CSS
                    </h4>
                <div className="flex py-2 mx-auto">
                        <Image src="/leftCurlyBracket.svg" height={20} width={20} />
                        <div className="text-center px-2">
                            <h3 className="font-bold">
                                Boootstrap
                            </h3>
                            <h3 className="font-bold">
                                Tailwind
                            </h3>
                        </div>
                        <Image src="/rightCurlyBracket.svg" height={20} width={20} />
                </div>
                {/* <div className="h-3 w-full rounded-full bg-lila mt-2">
                    <div className="h-3 rounded-full bg-primary"
                         style={{width: 85}}></div>
                </div> */}

                    <h4 className="font-semibold text-black uppercase my-auto">
                        Python
                    </h4>
                    <div className="flex py-2 mx-auto">
                        <Image src="/leftCurlyBracket.svg" height={20} width={20} />
                        <div className="text-center px-2">
                            <h3 className="font-bold">
                                Flask
                            </h3>
                            <h3 className="font-bold">
                                Pandas
                            </h3>
                        </div>
                        <Image src="/rightCurlyBracket.svg" height={20} width={20} />
                    </div>


                    <h4 className="font-semibold text-black uppercase my-auto">
                        Javascript
                    </h4>
                    <div className="flex py-2 mx-auto">
                        <Image src="/leftCurlyBracket.svg" height={20} width={20} />
                        <div className="text-center px-2">
                            <h3 className="font-bold">
                                React
                            </h3>
                            <h3 className="font-bold">
                                Next.js
                            </h3>
                        </div>
                        <Image src="/rightCurlyBracket.svg" height={20} width={20} />
                    </div>

                    <h4 className="font-semibold text-black uppercase my-auto">
                        PHP
                    </h4>
                    <div className="flex py-2 mx-auto">
                        <Image src="/leftCurlyBracket.svg" height={20} width={20} />
                        <div className="text-center px-2">
                            <h3 className="font-bold">
                                Drupal
                            </h3>
                            <h3 className="font-bold">
                                Moodle
                            </h3>
                        </div>
                        <Image src="/rightCurlyBracket.svg" height={20} width={20} />
                    </div>

                    <h4 className="font-semibold text-black uppercase my-auto">
                        Content Creation
                    </h4>
                    <div className="flex py-2 mx-auto">
                        <Image src="/leftCurlyBracket.svg" height={20} width={20} />
                        <div className="text-center px-2">
                            <h3 className="font-bold">
                                Photoshop
                            </h3>
                            <h3 className="font-bold">
                                Illustrator
                            </h3>
                        </div>
                        <Image src="/rightCurlyBracket.svg" height={20} width={20} />
                    </div>
                </div>

        </div>
    </div>
</div>
        </section>
    )
}

export default WhoAmI
