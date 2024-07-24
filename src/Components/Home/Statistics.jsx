import React from "react";
import CountUp from 'react-countup'

export default function Statistics() {
  return (
    <div className="my-8 mx-2 sm:my-10 sm:mx-16 ">
      <section class="text-gray-600 body-font">
        <div class="container px-2 sm:px-5  mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div></div>
            <div class="p-4  w-1/2 sm:w-1/4"  data-aos="fade-down" data-aos-duration="1000">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                
                <i class="bi bi-emoji-laughing-fill text-warning w-12 h-12 mb-3 inline-block text-5xl"></i>
                <h2 class="title-font font-medium text-3xl text-gray-900">
                 <CountUp end={12} duration={5}/>
                </h2>
                <p class="leading-relaxed">Happy Clients</p>
              </div>
            </div>
            <div class="p-4  w-1/2 sm:w-1/4"  data-aos="fade-down" data-aos-duration="2000">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-warning w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  <CountUp end={152} duration={5}/>
                </h2>
                <p class="leading-relaxed">Users</p>
              </div>
            </div>
            <div class="p-4  w-1/2 sm:w-1/4"  data-aos="fade-down" data-aos-duration="3000">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                {/* <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class=""
                  viewBox="0 0 24 24"
                >
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg> */}
                <i class="bi bi-window-dock text-warning w-12 h-12 mb-3 inline-block text-5xl"></i>
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  <CountUp end={46} duration={5}/>
                </h2>
                <p class="leading-relaxed">Projects</p>
              </div>
            </div>
            <div class="p-4 w-1/2 sm:w-1/4"  data-aos="fade-down" data-aos-duration="3500">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <i class="bi bi-people-fill text-warning w-12 h-12 mb-3 inline-block text-5xl"></i>
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  <CountUp end={6} duration={5}/>
                </h2>
                <p class="leading-relaxed">Team</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
