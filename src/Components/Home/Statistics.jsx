import React from "react";
import CountUp from "react-countup";

export default function Statistics() {
  return (
    <>
      <div className="mx-2 my-8 sm:my-10 sm:mx-16 ">
        <section className="text-gray-600 body-font">
          <div className="container px-2 sm:px-5  mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div></div>
              <div
                className="p-4  w-1/2 sm:w-1/4"
                data-aos="fade-down"
                data-aos-duration="1000"
              >
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <i className="bi bi-emoji-laughing-fill text-warning w-12 h-12 mb-3 inline-block text-5xl"></i>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    <CountUp end={450} duration={5} />
                  </h2>
                  <p className="leading-relaxed">Workflows Automated</p>
                </div>
              </div>
              <div
                className="p-4  w-1/2 sm:w-1/4"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="text-warning w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    <CountUp end={380} duration={5} />
                  </h2>
                  <p className="leading-relaxed">Active Users</p>
                </div>
              </div>
              <div
                className="p-4  w-1/2 sm:w-1/4"
                data-aos="fade-down"
                data-aos-duration="3000"
              >
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <i className="bi bi-window-dock text-warning w-12 h-12 mb-3 inline-block text-5xl"></i>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    <CountUp end={87} duration={5} />%
                  </h2>
                  <p className="leading-relaxed">Conversion Increase</p>
                </div>
              </div>
              <div
                className="p-4 w-1/2 sm:w-1/4"
                data-aos="fade-down"
                data-aos-duration="3500"
              >
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <i className="bi bi-people-fill text-warning w-12 h-12 mb-3 inline-block text-5xl"></i>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    <CountUp end={25} duration={5} />+
                  </h2>
                  <p className="leading-relaxed">Expert Team</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
