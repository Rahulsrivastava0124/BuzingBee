import React from "react";
// import ArrowReact from "./assets/svg/arrowRight.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import hero1 from "../../assets/image/hero1.jpg";
import CountUp from "react-countup";
import { Element } from 'react-scroll';

export default function Hero() {
  return (
    <>
    <Element id="home" name="home">
      <section
        id="Home"
        className="mx-6 my-10 rounded-md sm:mx-16 sm:flex"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="sm:w-[50%]">
          <h1 className="text-3xl font-medium sm:text-7xl">
            <span data-aos="fade-up" data-aos-duration="1000">
              Stay ahead of the{" "}
            </span>
            <span>curve with our</span>
            <span> forward-thinking</span>{" "}
          </h1>
          <h5 className="mt-4 text-sm text-gray-500 sm:mt-8 md:text-lg sm:pe-32">
            An award-winning SEO agency with disciplines in digital marketing,
            design, and website development, focused on understanding you.
          </h5>

          <div className="flex items-center mt-8 sm:mt-16">
            <button className="text-white rounded-full btn btn-warning btn-sm sm:btn-md ps-6" onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }>
              Schedule <FaArrowRightLong className="text-xl"/>
            </button>
            <a
                href='#blog'
              className="hidden font-bold underline sm:block ms-20"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              View Case Study
            </a>
          </div>
          <div
            className="flex flex-wrap mt-3 sm:mt-16 show:block"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1300"
          >
            <h1 className="mt-5 font-bold sm:w-44 sm:mt-0">
              Trusted by the World's biggest brands
            </h1>
            <div className="flex mt-1 sm:ms-20 sm:mt-0">
              <span className="p-2 font-semibold text-red-600 bg-red-200 rounded-md me-3 sm:text-lg text-md">
                AstroPoints
              </span>
              <span className="p-2 font-semibold text-yellow-600 bg-yellow-200 rounded-md me-3 sm:text-lg text-md">
                TheBriyan
              </span>
              <span className="p-2 font-semibold text-blue-600 bg-blue-200 rounded-md me-3 sm:text-lg text-md">
              Peachwave
              </span>
            </div>
          </div>
        </div>
        <div className="sm:w-[50%] py-10">
          <div
            className="flex-wrap items-center mb-3 sm:flex justify-evenly sm:p-5"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1000"
          >
            <div className="bg-gray-50 rounded-tl-[100%] rounded-lg sm:w-[43%] hidden sm:block sm:h-[250px] relative">
              <button className="absolute w-10 h-10 p-10 text-center bg-black btn btn-circle bottom-52 right-10">
                <i className="absolute text-lg font-extrabold text-center bg-yellow-400 rounded-lg bi bi-graph-up-arrow w-9 h-9"></i>
              </button>
              <div className="rounded-tl-[100%] rounded-lg overflow-hidden">
                <img src={hero1} alt="Hero Image 1" className="max-w-[135%]" />
              </div>
            </div>
            <div className="bg-yellow-100 rounded-xl sm:w-[43%] sm:h-[250px] p-5">
              <div>
                <h1 className="text-6xl font-bold text-left sm:text-8xl sm:text-center">
                  <CountUp end={63} duration={2.75} />+
                </h1>
              </div>
              <div className="m-auto">
                <h1 className="mt-2 text-lg ms-2">
                  BuzingBee guarantees an increase in ROI for our customers through our work.
                  <progress
                    className="w-56 progress progress-warning"
                    value="70"
                    max="100"
                  ></progress>
                </h1>
              </div>
            </div>
          </div>
          <div
            className="pb-12 bg-black sm:w-[86%] bg-[url(./assets/image/cart_bar-hero.png)] bg-right-bottom bg-no-repeat m-auto rounded-xl sm:h-[200px] p-5 flex relative sm:bg-contain"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200"
          >
            <div>
              <div
                className="flex items-center"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1300"
              >
                <hr className="w-8 mt-5 font-bold sm:w-16 sm:me-5 me-2" />
                <h1 className="mt-5 text-white">
                  Drive More Traffic and Sales
                </h1>
              </div>
              <div
                className="sm:w-[60%]"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1300"
              >
                <h1 className="mt-4 text-3xl text-white sm:text-4xl">
                  Drive more traffic and product sales
                </h1>
              </div>
            </div>
            {/* <div
              className="absolute bottom-0 hidden right-5 sm:block"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1400"
            >
              <img src={heroCart} alt="Hero Cart" className="sm:w-[250px]" />
            </div> */}
          </div>
        </div>
      </section>
    </Element>
    </>
  );
}
