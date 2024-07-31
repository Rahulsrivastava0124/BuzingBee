import React from "react";
import { Element } from "react-scroll";
// import { ReactComponent as ArrowReact } from "../../assets/svg/ArrowRight.svg";

export default function Blog() {
  return (
    <>
    <Element id="blog" name="blog">
    <div className="sm:mx-20 mx-6 sm:my-16 " data-aos="zoom-out-up">
      <div className="flex flex-wrap">
        <div className="sm:w-[50%]" data-aos="fade-in" data-aos-duration="1000">
          <h1 className="sm:text-5xl text-2xl font-semibold leading-[1.2]">
            Digital Marketing & SEO ServicesThat Grow Traffic & increase Revenue
          </h1>
        </div>
        <div
          className="sm:w-[50%] mt-5 sm:mt-0"
          data-aos="fade-in"
          data-aos-duration="1000"
        >
          <p className="text-xl leading-[1.5] font-semibold text-gray-500">
            we are the top digital ,arketing agency for branding corp . We offer
            a full range of services to help clients improve their search engine
            ranking and drive more traffic to their websites.
          </p>
          <buttom className="btn btn-outline btn-wide sm:btn-md btn-neutral mt-8 rounded-full px-14 font-bold">
            see more
          </buttom>
        </div>
      </div>
      <div>
        <section class="text-gray-500 body-font">
          <div class="container sm:px-5 py-16 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div
                class="p-4 lg:w-1/3"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div class="h-full bg-gray-100 bg-opacity-75 px-10 py-10 rounded-3xl overflow-hidden text-center relative">
                  <h2 className="flex justify-between">
                    <span className="indicator-item indicator-middle indicator-start badge badge-sm  badge-secondary"></span>
                    <span className="text-gray-400 text-sm"> 5 min read</span>
                  </h2>
                  <h1 class="title-font sm:text-2xl text-xl text-left font-bold text-gray-900 my-5 ">
                    How a Digital Marketing Agency Can boost your Business
                  </h1>
                  <div className="flex flex-wrap items-end">
                    <p class="leading-relaxed text-left text-sm me-6">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <buttom className="btn btn-outline mt-4 sm:mt-4 sm:p-4 flex sm:block text-white btn-neutral rounded-full sm:px-8  sm:btn-md px-[41%] btn-active">
                      More
                      {/* <ArrowReact /> */}
                    </buttom>
                  </div>
                </div>
              </div>
              <div
                class="p-4 lg:w-1/3"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div class="h-full bg-gray-100 bg-opacity-75 px-10 py-10 rounded-3xl overflow-hidden text-center relative">
                  <h2 className="flex justify-between">
                    <span className="indicator-item indicator-middle indicator-start badge badge-sm  badge-info"></span>
                    <span className="text-gray-400 text-sm"> 5 min read</span>
                  </h2>
                  <h1 class="title-font sm:text-2xl text-xl text-left font-bold text-gray-900 my-5 ">
                    How a Digital Marketing Agency Can boost your Business
                  </h1>
                  <div className="flex flex-wrap items-end">
                    <p class="leading-relaxed text-left text-sm me-6">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <buttom className="btn btn-outline mt-4 sm:mt-4 sm:p-4 flex sm:block text-white btn-neutral rounded-full sm:px-8  sm:btn-md px-[41%] btn-active">
                      More
                      {/* <ArrowReact /> */}
                    </buttom>
                  </div>
                </div>
              </div>
              <div
                class="p-4 lg:w-1/3"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div class="h-full bg-gray-100 bg-opacity-75 px-10 py-10 rounded-3xl overflow-hidden text-center relative">
                  <h2 className="flex justify-between">
                    <span className="indicator-item indicator-middle indicator-start badge badge-sm  badge-warning"></span>
                    <span className="text-gray-400 text-sm"> 5 min read</span>
                  </h2>
                  <h1 class="title-font sm:text-2xl text-xl text-left font-bold text-gray-900 my-5 ">
                    How a Digital Marketing Agency Can boost your Business
                  </h1>
                  <div className="flex flex-wrap items-end">
                    <p class="leading-relaxed text-left text-sm me-6">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <buttom className="btn btn-outline mt-4 sm:mt-4 sm:p-4 flex sm:block text-white btn-neutral rounded-full sm:px-8  sm:btn-md px-[41%] btn-active">
                      More
                      {/* <ArrowReact /> */}
                    </buttom>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
    </Element>
    </>
  );
}
