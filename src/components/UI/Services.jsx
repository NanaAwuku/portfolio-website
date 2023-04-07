import React from "react";
import frontEndImg from "../../assets/images/front-end.png";
import backendimg from "../../assets/images/backend.png";
import uiImg from "../../assets/images/design.png";
import appsImg from "../../assets/images/apps.png";

const Services = () => {
  return (
    <services id="services">
      <div className="container lg:pt-5">
        <div className="text-center">
          <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5 ">
            What I do Help
          </h2>
          <p className="lg:max-w-[600px] lg:mx-auto  text-headingColor font-[500] text-[1.2rem] ">
            Hey everyone! I'm a software engineer with a passion for creating
            high-quality software solutions. I'm skilled in using the latest
            libraries and technologies and am always eager to learn new ones. I
            pride myself on my problem-solving skills and my ability to work
            collaboratively with my team to achieve our goals. Looking forward
            to connecting with others in the software engineering community!
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12 ">
          <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0 ">
            <div className="relative text-gray-700 antialiased text-sm text-semibold ">
              <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2 "></div>
              {/* -----------left card---------- */}
              <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row ">
                  <div className="flex justify-start w-full items-center mx-auto">
                    <div className="w-full sm:w-1/2 sm:pr-8 ">
                      <div
                        data-aos="fade-up"
                        data-aos-duration="1500"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-500 "
                      >
                        <h3 className="shadow group text-primaryColor font-[700] mb-3 group-hover:font-[600] group-hover:text-white text-xl ">
                          FrontEnd Development
                        </h3>

                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7 ">
                          Deep understanding of HTML, CSS, JavaScript and React.
                          Passionate about creating user-friendly interfaces and
                          staying up-to-date with design trends.{" "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 flex items-center justify-center ">
                    <figure>
                      <img src={frontEndImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ----right card------------ */}
              <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row ">
                  <div className="flex justify-end w-full items-center mx-auto">
                    <div className="w-full sm:w-1/2 sm:pl-8 ">
                      <div
                        data-aos="fade-left"
                        data-aos-delay="50"
                        data-aos-duration="1400"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-500 "
                      >
                        <h3 className="shadow group text-primaryColor font-[700] mb-3 group-hover:font-[600] group-hover:text-white text-xl ">
                          BackEnd Development
                        </h3>

                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7 ">
                        Back-end developer with expertise in PHP, Laravel, and Nodejs. Proficient in MySQL and MongoDB databases.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 flex items-center justify-center ">
                    <figure>
                      <img src={backendimg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>

               {/* -----------left card---------- */}
               <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row ">
                  <div className="flex justify-start w-full items-center mx-auto">
                    <div className="w-full sm:w-1/2 sm:pr-8 ">
                      <div
                        data-aos="fade-right"
                        data-aos-delay="100"
                        data-aos-duration="1500"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-500 "
                      >
                        <h3 className="shadow group text-primaryColor font-[700] mb-3 group-hover:font-[600] group-hover:text-white text-xl ">
                          UI/UX Design
                        </h3>

                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7 ">
                          Proficient in using Figma to bring designs to life. Have expertise in creating user-friendly and visually stunning designs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 flex items-center justify-center ">
                    <figure>
                      <img src={uiImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* ----right card------------ */}
              <div className="mt-6 sm:mt-0 sm:mb-12 ">
                <div className="flex items-center flex-col sm:flex-row ">
                  <div className="flex justify-end w-full items-center mx-auto">
                    <div className="w-full sm:w-1/2 sm:pl-8 ">
                      <div
                        data-aos="fade-left"
                        data-aos-duration="1500"
                        className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-500 "
                      >
                        <h3 className="shadow group text-primaryColor font-[700] mb-3 group-hover:font-[600] group-hover:text-white text-xl ">
                          App Development
                        </h3>

                        <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] leading-7 ">
                        Develope high-quality mobile applications using flutter. Passionate about creating user-friendly interfaces and staying up-to-date with the latest mobile development trends.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 flex items-center justify-center ">
                    <figure>
                      <img src={appsImg} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </services>
  );
};

export default Services;
