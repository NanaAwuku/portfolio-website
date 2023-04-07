import React from "react";
import Heroimg from "../../assets/images/nanalogo.jpg";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="pt-0 " id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row ">
          <div className="w-full md:basis-1/2 ">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className="text-headingColor font-[600] text-[16px] "
            >
              Hello Welcome{" "}
            </h5>

            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-headingColor font-[800] text-[1.8rem] sm:tex-[40px] leading-[35px] sm:leading[40px] mt-5 "
            >
              I'm Nana Awuku <br /> Software Engineer{" "}
            </h1>

            <div
              data-aos="fade-up"
              data-aos-duration="1800"
              className=" flex items-center gap-6 mt-7 "
            >
              <a href="#contact">
                <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] ">
                  <i className="ri-mail-line">Hire Me</i>
                </button>
              </a>
              <a
                href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor "
              >
                See Portfolio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-duration="1800"
              className="flex items-center gap-6 text-headingColor font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10 mt-14 "
            >
              <span>
                <i className="ri-apps-2-line"></i>
              </span>
              I am an experienced software developer with an MBA MIS certificate and passionate about programming. I use the latest technologies to create high-quality, user-friendly software. I have a successful track record in developing web applications, mobile apps, and software platforms.
            </p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600] ">
                Follow Me:
              </span>
              <span>
                <a href="https://github.com/NanaAwuku" target="_blank">
                  <i className="ri-github-fill font-[600]"></i>
                </a>
              </span>
              <span>
                <a href="https://web.facebook.com/atricmzkal.adjei" target="_blank">
                  <i className="ri-facebook-line font-[600]"></i>
                </a>
              </span>
              <span>
                <a href="https://twitter.com/Nana_Awuku24" target="_blank">
                  <i className="ri-twitter-line font-[600]"></i>
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/nanaawuku24/" target="_blank">
                  <i className="ri-linkedin-line font-[600]"></i>
                </a>
              </span>
            </div>
          </div>

          <div className="basis-1/3 mt-10 sm:mt-0 ">
            <figure className="flex items-center justify-center">
              <img
                src={Heroimg}
                className="rounded-[50px] w-[300px] "
                alt="theNana"
              />
            </figure>
          </div>
          {/* hero content right */}

          <div className="flex md:basis-1/5 justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end ">
            <div className="mb-8">
              <h2 className="text-primaryColor font-[700] text-[32px] ">
                <CountUp start={0} end={3} duration={2} suffix="+" />{" "}
              </h2>
              <h4 className="text-headingColor font-[700] text-[18px]">
                Years of Experience
              </h4>
            </div>
            <div className="mb-8">
              <h2 className="text-primaryColor font-[700] text-[32px] ">
                <CountUp start={0} end={100} duration={2} suffix="%" />{" "}
              </h2>
              <h4 className="text-headingColor font-[700] text-[18px]">
                Success Rate
              </h4>
            </div>
            <div className="mb-8">
              <h2 className="text-primaryColor font-[700] text-[32px] ">
                <CountUp start={0} end={20} duration={2} suffix="+" />{" "}
              </h2>
              <h4 className="text-headingColor font-[700] text-[18px]">
                Happy Clients
              </h4>
            </div>
            <div className="mb-8">
              <h2 className="text-primaryColor font-[700] text-[32px] ">
                <CountUp start={0} end={10} duration={2} suffix="+" />{" "}
              </h2>
              <h4 className="text-headingColor font-[700] text-[18px]">
                Completed Project
              </h4>
            </div>
          </div>

          {/* hero content end */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
