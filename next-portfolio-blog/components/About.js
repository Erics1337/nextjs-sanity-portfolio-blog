import LetsConnect from "./LetsConnect";
import ThreeSkills from "./three/ThreeSkills";

function About() {
    return (
        <section id="about">
        <div className="bg-grey-50" id="about">
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
        <div className="w-full sm:w-3/4 lg:w-2/5 lg:pl-12">
            <h2 className="text-center font-bold text-3xl py-4">Skill Stack</h2>
            <div className="relative overflow-hidden">
                <ThreeSkills className='canvas'/>
                <div className="absolute top-0 left-0 px-6 py-4 h-full flex flex-col justify-center">
                    <h4 className="mb-3 text-xl font-semibold"><span className='text-purple'>JAM</span>stack</h4>
                    <h4 className="mb-3 text-xl font-semibold"><span className='text-green'>MERN</span>stack</h4>
                    <h4 className="mb-3 text-xl font-semibold"><span className='text-blue'>LAMP</span>stack</h4>
                </div>
            </div>
        </div>
    </div>
</div>
        </section>
    )
}

export default About
