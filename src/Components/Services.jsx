import React from "react";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import service2 from "../assets/image/services2.jpg";
import service1 from "../assets/image/services1.png";
import portfolio_1 from "../assets/image/portfolio_1.jpg";
import services from "../assets/image/logo.png";
import services4 from "../assets/image/logo4.jpeg";
import VideoModel from "./VideoModel";
// import required modules

const Services = () => {
  // let audio = new Audio("../src/assets/audios/clickSound.mp3")

  // const start = () => {
  //   audio.play()
  // }

  // const handleClick = (e) => {
  //   e.preventDefault()
  //   start()
  // }
  return (
    <>
      <VideoModel />
      <div className="mx-4 mb-30 sm:mx-16 sm:mb-20" id="About">
        <div className="flex flex-col mb-8 sm:flex-row sm:mb-10">
          <div className="w-full me-0 sm:w-[2500px] sm:me-10 mb-10 sm:mb-0">
            <h1
              className="text-2xl font-semibold text-center sm:text-left sm:text-5xl"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Provide the best service with out of the box ideas
            </h1>
          </div>
          <div
            className="text-center me-0 sm:text-left sm:me-10"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <h1 className="text-lg text-left text-gray-500 ">
              {" "}
              We are a passionate team of digital marketing enthusiasts dedicated
              to helping businesses succeed in the digital world. With
              years of experience and a deep understanding of the ever-evolving
              online landscape, we stay at the forefront of industry trends and
              technologies.
            </h1>
          </div>
        </div>
        <div
          className={
            "flex flex-col me-0 justify-center sm:flex-row sm:justify-between sm:me-10"
          }
        >
          <div
            className={
              "w-full sm:w-[35%] h-[350px] rounded-3xl bg-black p-10 mb-6 sm:mb-0"
            }
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="">
              <h1 className="font-bold text-left text-white sm:text-8xl text-7xl">
                <CountUp end={94} duration={5} />{" "}
                <span className={"text-green-500"}>+</span>
              </h1>
            </div>
            <h1 className={"text-2xl text-gray-400 font-semibold mt-3"}>
              Project finish with superbly{" "}
            </h1>
            <div className={"flex sm:mt-20 mt-10 align-center items-center"}>
              <div className="rounded-full avatar ring-warning ring-offset-base-50 ring ring-offset-0 ">
                <div className="rounded-full sm:size-12 size-6 w-12 sm:w-16">
                  <img
                    src="https://triconnix.com/img/navLogo.png"
                    alt={"test"}
                    className="bg-contain bg-slate-50 "
                    height={100}
                  />
                </div>
              </div>
              <div className="rounded-full avatar ring-warning ring-offset-base-100 ring ring-offset-0 ">
                <div className="rounded-full sm:size-12 size-6 w-12 sm:w-16 ">
                  <img src={portfolio_1} alt={"test"} height={100} />
                </div>
              </div>
              <div className="rounded-full avatar ring-warning ring-offset-base-100 ring ring-offset-0 ">
                <div className="rounded-full sm:size-12 size-6 w-12 sm:w-16">
                  <img
                    src={services}
                    alt={"test"}
                    className={"bg-contain bg-slate-50"}
                    height="100"
                  />
                </div>
              </div>
              <div className="rounded-full avatar ring-warning ring-offset-base-100 ring ring-offset-0 ">
                <div className="rounded-full sm:size-12 size-6 w-12 sm:w-16">
                  <img
                    src={services4}
                    alt={"test"}
                    className={"bg-slate-50"}
                    height="100"
                  />
                </div>
              </div>
              <div className="avatar me-2  placeholder">
                <div className=" text-neutral-content size-12 sm:w-16  rounded-full">
                  <span className="sm:text-8xl text-6xl font-bold">+</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              "w-full sm:w-[60%]  sm:h-[350px] rounded-3xl bg-gray-50 "
            }
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              // }}
              // navigation={true}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide className="relative">
                <img
                  src={service1}
                  alt="this copy ima"
                  style={{ filter: " brightness(0.5)" }}
                  className="rounded-3xl"
                />
                <span className="absolute top-[30%] sm:top-[38%] sm:text-7xl text-4xl right-10 sm:right-40 font-semibold text-white placeholder:">
                  HOW WE WORK
                </span>
              </SwiperSlide>
              <SwiperSlide className="relative">
                <img
                  src={service2}
                  alt="this copy ima"
                  style={{ filter: " brightness(0.5)" }}
                  className="rounded-3xl"
                />
                <span className="absolute top-[30%] sm:top-[38%] sm:text-7xl text-4xl right-10 sm:right-40 font-semibold text-white placeholder:">
                  TEAM WE WORK
                </span>
              </SwiperSlide>
              <button
                className="absolute z-10 grid overflow-visible bg-yellow-300 rounded-full sm:size-16 bottom-3 right-3 ring-white ring-offset-base-100 ring ring-offset-1"
                onClick={() =>
                  document.getElementById("video_model").showModal()
                }
              >
                <i className="bi bi-play-fill m-auto text-5xl"></i>
              </button>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
