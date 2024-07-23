import React from "react";
import { ReactComponent as ArrowReact } from "../../assets/svg/ArrowRight.svg";
import hero1 from "../../assets/image/hero1.jpg";
import heroCart from "../../assets/image/cart_bar-hero.png";
import CountUp from 'react-countup'

export default function Hero() {
  return (
    <>
      <div className=" mx-16 my-10 rounded-md flex" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="2000" >
        <div className="w-[50%] ">
          <h1 className="text-7xl font-medium " >
            <span data-aos="fade-up" data-aos-duration="1000">Stay ahead of the </span><span>curve with our</span><span> forword-thinking</span>{" "}
          </h1>
          <h5 className="mt-8 text-lg text-gray-500 pe-32">
            {" "}
            An award winning SEO agency with discplines in digital marketing,
            desing, and website development , focused on understanding you .
          </h5>

          <div className="mt-16 flex items-center ">
            <buttom className="btn btn-neutral text-white rounded-full ps-6">
              {" "}
              Schedule call <ArrowReact className="size-6 ms-8" />
            </buttom>
            <buttom className="underline font-bold ms-20" data-aos="fade-up" data-aos-duration="1500">
              View Case Study
            </buttom>
          </div>
          <div className="mt-16  flex " data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1300">
            <h1 className=" w-44 font-bold">
              {" "}
              Trusted by the World's biggest brands{" "}
            </h1>
            <div className="flex ms-20">
              <span className="me-3 text-lg font-bold text-gray-400">
                Triconnix
              </span>
              <span className="me-3 text-lg font-bold text-gray-400">
                Leadorise
              </span>
              <span className="me-3 text-lg font-bold text-gray-400">
                Prakriti
              </span>
            </div>
          </div>
        </div>
        <div className="w-[50%] py-10">
          <div className="flex items-center justify-evenly mb-3 p-5" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1000">
            <div className=" bg-gray-50 rounded-tl-[100%] rounded-lg  w-[43%] h-[250px]  relative">
              {" "}
              <button className="btn btn-circle bg-black  p-10 w-10 h-10 absolute bottom-52 right-10 text-center">
                {" "}
                <i class="bi bi-graph-up-arrow text-center font-extrabold text-lg  absolute bg-yellow-400 w-9 h-9  rounded-lg"></i>
              </button>
              <div className="rounded-tl-[100%] rounded-lg overflow-hidden">
                <img src={hero1} alt="hero1" className="max-w-[135%]" />
              </div>
            </div>
            <div className=" bg-gray-50 rounded-xl w-[43%] h-[250px] p-5">
              <div className="">
                <h1 className="text-8xl font-bold text-center "><CountUp end={230} duration={2.75}/>+</h1>
              </div>
              <div className="m-auto">
                <h1 className="ms-2 text-lg mt-2">
                  Some big Companies that we work with,and trust us very much{" "}
                  <progress
                    className="progress  progress-primary w-56 "
                    value="70"
                    max="100"
                  ></progress>
                </h1>
              </div>
            </div>
          </div>
          <div className=" bg-black w-[86%] m-auto rounded-xl h-[200px] p-5 flex relative " data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1200">
            {" "}
            <div>
              <div className=" flex items-center " data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1300">
                <hr className="w-16 font-bold me-5 mt-5" />
                <h1 className="text-white  mt-5">
                  {" "}
                  Drive More Traffic and Sales{" "}
                </h1>
              </div>
              <div className="w-[60%]" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1300">
                <h1 className="text-4xl text-white mt-4">
                  Drive more traffic and product sales
                </h1>
              </div>
            </div>
            <div className="absolute bottom-0 right-5" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="1400">
              <img src={heroCart} alt="heroCart" width={250}/>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
