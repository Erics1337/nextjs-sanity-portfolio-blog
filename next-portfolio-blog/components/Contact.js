function Contact() {
    return (
        <div>
            <div className="container py-16 md:py-20"
     id="contact">
    <h2
        className="font-header font-semibold text-primary text-4xl sm:text-5xl lg:text-6xl uppercase text-center">
        Here's a contact form</h2>
    <h4
        className="font-header font-medium text-black text-xl sm:text-2xl lg:text-3xl pt-6 text-center">
        Have Any Questions?</h4>
    <div className="w-full sm:w-2/3 mx-auto pt-5 lg:pt-6 text-center">
        <p className="font-body text-grey-10">Lorem ipsum dolor sit amet consectetur
            adipiscing elit hendrerit condimentum turpis nisl sem, viverra
            habitasse urna ante lobortis fermentum accumsan. Viverra
            habitasse urna ante lobortis fermentum accumsan.</p>
    </div>
    <form className="w-full sm:w-3/4 mx-auto pt-10">
        <div className="flex flex-col md:flex-row">
            <input className="w-full md:w-1/2 mr-3 lg:mr-5 font-body text-black px-4 py-3 border-grey-50 rounded"
                   placeholder="Name"
                   type="text"
                   id="name">
            <input className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-3 lg:ml-5 font-body text-black px-4 py-3 border-grey-50 rounded"
                   placeholder="Email"
                   type="text"
                   id="email">
        </div>
        <textarea className="w-full font-body text-black px-4 py-3 border-grey-50 rounded mt-6 md:mt-8"
                  placeholder="Message"
                  id="message"
                  cols="30"
                  rows="10"></textarea>
        <button
                className="bg-primary hover:bg-grey-20 font-header font-bold text-lg text-white px-8 py-3 flex justify-center mt-6 rounded items-center uppercase">
            Send
            <i className='bx bx-chevron-right text-3xl relative -right-2'></i>
        </button>
    </form>
    <div className="flex flex-col lg:flex-row pt-16">
        <div
             className="w-full lg:w-1/3 border-l-2 border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8">
            <div className="flex items-center">
                <i className='bx bx-phone text-grey-40 text-2xl'></i>
                <p
                   className="font-body font-bold text-grey-40 lg:text-lg uppercase pl-2">
                    My Phone</p>
            </div>
            <p
               className="font-body font-bold text-primary lg:text-lg pt-2 text-left">
                (+881) 111 222 333</p>
        </div>
        <div
             className="w-full lg:w-1/3 border-l-2 lg:border-l-0 border-t-0 lg:border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8">
            <div className="flex items-center">
                <i className='bx bx-envelope text-grey-40 text-2xl'></i>
                <p
                   className="font-body font-bold text-grey-40 lg:text-lg uppercase pl-2">
                    My Email</p>
            </div>
            <p
               className="font-body font-bold text-primary lg:text-lg pt-2 text-left">
                name@mydomain.com</p>
        </div>
        <div
             className="w-full lg:w-1/3 border-l-2 lg:border-l-0 border-t-0 lg:border-t-2 border-r-2 border-b-2 border-grey-60 px-6 py-6 sm:py-8">
            <div className="flex items-center">
                <i className='bx bx-map text-grey-40 text-2xl'></i>
                <p
                   className="font-body font-bold text-grey-40 lg:text-lg uppercase pl-2">
                    My Address</p>
            </div>
            <p
               className="font-body font-bold text-primary lg:text-lg pt-2 text-left">
                123 New York D Block 1100, 2011 USA</p>
        </div>
    </div>
</div>
        </div>
    )
}

export default Contact
