import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="pb-16">
      <div className="container">
        <h2 className="text-[2.5rem] mb-3 text-headingColor font-[700] ">Get In Touch</h2>
        <div className="md:flex justify-between items-center">
          <div className="w-full md:w-1/2 h-full sm:h-[450px]">
            <iframe
              title="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254133.52713497623!2d-0.3445492201005688!3d5.591185712691912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra!5e0!3m2!1sen!2sgh!4v1680821718561!5m2!1sen!2sgh"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full mt-8 md:mt-0  md:w-1/2 h-full lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8 sm:h-[450px]">
            <form className="w-full">
              <div className="mb-5">
                <input type="text" placeholder="Enter your name" className="w-full p-3 focus:outline-none rounded-[5px]"/>
              </div>
              <div className="mb-5">
                <input type="text" placeholder="Enter your email" className="w-full p-3 focus:outline-none rounded-[5px]"/>
              </div>
              <div className="mb-5">
                <input type="text" placeholder="Subject" className="w-full p-3 focus:outline-none rounded-[5px]"/>

              </div>
              <div className="mb-5">
                <textarea type="text" rows={3} placeholder="Write your message" className="w-full p-3 focus:outline-none rounded-[5px]"/>
              </div>
              <button className="w-full p-3 focus:outline-none rounded-[5px] text-[18px] bg-smallTextColor font-[500] hover:bg-headingColor text-white text-center ">Send Message</button>
            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
