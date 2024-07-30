import React from "react";
import { ReactComponent as ArrowReact } from "../../assets/svg/ArrowRight.svg";
import hero1 from "../../assets/image/hero1.jpg";
import heroCart from "../../assets/image/cart_bar-hero.png";
import CountUp from "react-countup";

export default function Hero() {
  return (
    <>
      <div
      id="Home"
        className=" sm:mx-16 mx-6 my-10  rounded-md sm:flex"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <div className="sm:w-[50%] ">
          <h1 className="sm:text-7xl text-3xl font-medium ">
            <span data-aos="fade-up" data-aos-duration="1000">
              Stay ahead of the{" "}
            </span>
            <span>curve with our</span>
            <span> forword-thinking</span>{" "}
          </h1>
          <h5 className="sm:mt-8 mt-4 md:text-lg text-sm text-gray-500 sm:pe-32">
            {" "}
            An award winning SEO agency with discplines in digital marketing,
            desing, and website development , focused on understanding you .
          </h5>

          <div className="sm:mt-16 mt-8 flex items-center ">
            <buttom className="btn btn-warning btn-sm sm:btn-md  text-white rounded-full ps-6">
              {" "}
              Schedule <ArrowReact className="sm:size-6 size-5 sm:ms-8" />
            </buttom>
            <buttom
              className="hidden sm:block  underline font-bold ms-20"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              View Case Study
            </buttom>
          </div>
          <div
            className="sm:mt-16 mt-3 flex flex-wrap show:block "
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1300"
          >
            <h1 className=" sm:w-44 font-bold mt-5 sm:mt-0">
              {" "}
              Trusted by the World's biggest brands
            </h1>
            <div className="flex sm:ms-20 mt-1 sm:mt-0">
              <span className="me-3 sm:text-lg text-md font-semibold text-yellow-600 bg-yellow-200 p-2 rounded-md">
                Triconnix
              </span>
              <span className="me-3 sm:text-lg text-md font-semibold text-yellow-600  bg-yellow-200 p-2 rounded-md">
                Leadorise
              </span>
              <span className="me-3 sm:text-lg  text-md font-semibold text-yellow-600  bg-yellow-200 p-2 rounded-md">
                AstroPoints
              </span>
            </div>
          </div>
        </div>
        <div className="sm:w-[50%] py-10">
          <div
            className="sm:flex flex-wrap items-center justify-evenly mb-3 sm:p-5"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1000"
          >
            <div className=" bg-gray-50 rounded-tl-[100%] rounded-lg  sm:w-[43%] hidden sm:block sm:h-[250px]  relative">
              {" "}
              <button className="btn btn-circle bg-black  p-10 w-10 h-10 absolute bottom-52 right-10 text-center">
                {" "}
                <i class="bi bi-graph-up-arrow text-center font-extrabold text-lg  absolute bg-yellow-400 w-9 h-9  rounded-lg"></i>
              </button>
              <div className="rounded-tl-[100%] rounded-lg overflow-hidden">
                <img src={hero1} alt="hero1" className="max-w-[135%]" />
              </div>
            </div>
            <div className=" bg-yellow-100 rounded-xl sm:w-[43%] sm:h-[250px] p-5">
              <div className="">
                <h1 className="sm:text-8xl text-6xl font-bold sm:text-center text-left ">
                  <CountUp end={230} duration={2.75} />+
                </h1>
              </div>
              <div className="m-auto">
                <h1 className="ms-2 text-lg mt-2">
                  Some big Companies that we work with,and trust us very much{" "}
                  <progress
                    className="progress  progress-warning w-56 "
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
            {" "}
            <div>
              <div
                className={`flex items-center `}
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1300"
              >
                <hr className="sm:w-16 w-8 font-bold sm:me-5 me-2 mt-5" />
                <h1 className="text-white mt-5">
                  {" "}
                  Drive More Traffic and Sales{" "}
                </h1>
              </div>
              <div
                className="sm:w-[60%]"
                data-aos="fade-up"
                data-aos-anchor-placement="center-bottom"
                data-aos-duration="1300"
              >
                <h1 className="sm:text-4xl text-3xl text-white mt-4">
                  Drive more traffic and product sales
                </h1>
              </div>
            </div>
            {/* <div
              className="absolute bottom-0 right-5 sm:block hidden"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="1400"
            >
              <img src={heroCart} alt="heroCart" className="sm:w-[250px]" />{" "}
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
