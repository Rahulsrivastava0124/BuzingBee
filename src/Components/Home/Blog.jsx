import React from "react";
import { ReactComponent as ArrowReact } from "../../assets/svg/ArrowRight.svg";

export default function Blog() {
  return (
    <div className="mx-20 my-16 ">
      <div className="flex">
        <div className="w-[50%]">
          <h1 className="text-5xl font-semibold leading-[1.2]">
            Digital Marketing & SEO ServicesThat Grow Traffic & increase Revenue
          </h1>
        </div>
        <div className="w-[50%]">
          <p className="text-xl leading-[1.5] font-semibold text-gray-500">
            we are the top digital ,arketing agency for branding corp . We offer
            a full range of services to help clients improve their search engine
            ranking and drive more traffic to their websites.
          </p>
          <buttom className="btn btn-outline btn-neutral mt-8 rounded-full px-14 font-bold">
            see more
          </buttom>
        </div>
      </div>
      <div>
        <section class="text-gray-500 body-font">
          <div class="container px-5 py-16 mx-auto">
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-gray-100 bg-opacity-75 px-10 py-10 rounded-3xl overflow-hidden text-center relative">
                  <h2 className="flex justify-between">
                    <span className="indicator-item indicator-middle indicator-start badge badge-secondary"></span>
                    <span className="text-gray-400 text-sm"> 5 min read</span>
                  </h2>
                  <h1 class="title-font sm:text-2xl text-xl text-left font-bold text-gray-900 my-5 ">
                    How a Digital Marketing Agency Can boost your Business
                  </h1>
                  <div className="flex">
                    <p class="leading-relaxed text-left text-sm me-6">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <buttom className="btn  btn-neutral rounded-full px-8">
                      <ArrowReact />
                    </buttom>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-gray-100 bg-opacity-75 px-10 py-10 rounded-3xl overflow-hidden text-center relative">
                  <h2 className="flex justify-between">
                    <span className="indicator-item indicator-middle indicator-start badge badge-secondary"></span>
                    <span className="text-gray-400 text-sm"> 5 min read</span>
                  </h2>
                  <h1 class="title-font sm:text-2xl text-xl text-left font-bold text-gray-900 my-5 ">
                    How a Digital Marketing Agency Can boost your Business
                  </h1>
                  <div className="flex">
                    <p class="leading-relaxed text-left text-sm me-6">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <buttom className="btn  btn-neutral rounded-full px-8">
                      <ArrowReact />
                    </buttom>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/3">
                <div class="h-full bg-gray-100 bg-opacity-75 px-10 py-10 rounded-3xl overflow-hidden text-center relative">
                  <h2 className="flex justify-between">
                    <span className="indicator-item indicator-middle indicator-start badge badge-secondary"></span>
                    <span className="text-gray-400 text-sm"> 5 min read</span>
                  </h2>
                  <h1 class="title-font sm:text-2xl text-xl text-left font-bold text-gray-900 my-5 ">
                    How a Digital Marketing Agency Can boost your Business
                  </h1>
                  <div className="flex">
                    <p class="leading-relaxed text-left text-sm me-6">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                    <buttom className="btn  btn-neutral rounded-full px-8">
                      <ArrowReact />
                    </buttom>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
