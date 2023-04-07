import React from "react";

const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#12141e] pt-12">
      <div className="container">
        <div className="sm:flex items-center justify-between md:gap-8">
          <div className="w-full sm:w-1/2">
            <h2 className="text-[25px] leading-10 text-white font-[600] mb-5 md:text-[2rem] ">
              Do You Want To Make Beautiful Products?
            </h2>
            <a href="#contact">
              <button className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px] ">
                <i className="ri-mail-line">Hire Me</i>
              </button>
            </a>
          </div>
          <div className="w-full sm:w-1/2">
            <p className=" leading-7 text-gray-600 font-[600] mt-4 sm:mt-0 ">
              lorem13
            </p>
            <div className="flex items-center gap-4 flex-wrap md:gap-8 mt-10">
              <span className="text-gray-300  text-[15px] font-[600] ">
                Follow Me:
              </span>
              <span className=" text-gray-300 w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center ">
                <a
                 href="https://github.com/NanaAwuku" target="_blank"
                  className="text-gray-300  text-[18px] font-[500]"
                >
                  <i className="ri-github-fill font-[600]"></i>
                </a>
              </span>
              <span className=" text-gray-300 w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center ">
                <a
                   href="https://web.facebook.com/atricmzkal.adjei" target="_blank"
                  className="text-gray-300  text-[18px] font-[500]"
                >
                  <i className="ri-facebook-line font-[600]"></i>
                </a>
              </span>
              <span className=" text-gray-300 w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center ">
                <a
                 href="https://twitter.com/Nana_Awuku24" target="_blank"
                  className="text-gray-300  text-[18px] font-[500]"
                >
                  <i className="ri-twitter-line font-[600]"></i>
                </a>
              </span>
              <span className=" text-gray-300 w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center ">
                <a
                  href="https://www.linkedin.com/in/nanaawuku24/" target="_blank"
                  className="text-gray-300  text-[18px] font-[500]"
                >
                  <i className="ri-linkedin-line font-[600]"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="">
          <ul className="flex items-center justify-center gap-10 mt-10">
            <li>
              <a className="text-gray-400 font-[600] " href="#about">
                About
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600] " href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600] " href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <a className="text-gray-400 font-[600] " href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* -----------footer bottom--------------- */}

      <div className="bg-[#1b1e29] py-4 mt-14">
        <div className="container">
          <div className="flex items-center justify-center sm:justify-between">
            <div className="hidden sm:block">
              <div className="flex items-center gap-[10px]">
                <span className="w-[35px] h-[35px] bg-[#2b2d33] text-white font-[500] rounded-full flex items-center justify-center ">
                  NA
                </span>
                <div className="leading-[20px] ">
                  <h2 className="text-[18px] text-gray-300 font-[500] ">
                    Nana Awuku
                  </h2>
                  <p className="text-[14px] text-gray-300  font-[500] ">
                    Personal
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-[14px] text-gray-300">Copyright @ {year} developed by Nana Awuku - All right reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
