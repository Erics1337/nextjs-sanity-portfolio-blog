import ServiceBlock from "./ServiceBlock";

function Services() {
  return (
    <section id="services">
      <div className="container py-16 md:py-20 mx-auto">
        <h2 className="font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center">
          Here's what I'm good at
        </h2>
        <h3 className="font-header font-medium text-black text-xl sm:text-2xl lg:text-3xl pt-6 text-center">
          These are the services I offer
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pt-10 md:pt-12">
          <ServiceBlock image='icon-development' title='WEB DEVELOPMENT' body='Professional website and web application production' />
          <ServiceBlock image='icon-content' title='TECHNICAL WRITING' body='Super awesome documentation' />
          <ServiceBlock image='icon-mobile' title='Mobile Development' body='Android and iOS applications using React Native' />
          <ServiceBlock image='icon-email' title='Email Marketing' body='Solid marketing tools to help you build your campaign' />
          <ServiceBlock image='icon-design' title='Graphic Design' body='Custom illustration and icon design' />
          <ServiceBlock image='icon-graphics' title='Web Design' body='Customized site design to match you and your companies aesthetic and mission' />

        </div>
      </div>
    </section>
  )
}

export default Services
