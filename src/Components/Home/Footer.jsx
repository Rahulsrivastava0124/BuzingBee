import React from "react";
import { Element } from "react-scroll";

export default function Footer() {
  return (
    <>
    <Element id="footer" name="footer">
    <div>
      <footer class="text-gray-600 body-font">
        <div class="container sm:px-20 sm:pt-20 pt-10 pb-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
          <div class="sm:w-[30%] mx-4 flex-shrink-0 md:mx-0 text-center md:text-left ">
            <a class="flex title-font font-medium sm:items-center md:justify-start sm:justify-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-2xl text-warning font-semibold">
                BuzingBee
              </span>
            </a>
            <p class="mt-2 text-sm text-gray-500 text-left">
              {/* When the word perfection comes in the digital field it relates to
              something for us. Yes, we are the most globalized and trusted
              company for making you digital and dynamic in competition with
              others.  */}
              BuzingBee provides you with various dynamic services with various
              external features as compared to others. With these services, you
              can acquire web designing, app development, Social media
              management, Search engine optimization, Graphic designing, and
              many more. .
            </p>
            <div className="mt-10 m-left">
              <i class="bi bi-instagram ms-3 p-4  text-xl btn px-6 sm:px-0  sm:btn-circle hover:bg-gray-200 bg-warning"></i>
              <i class="bi bi-facebook ms-3 p-4  text-xl btn px-6 sm:px-0 sm:btn-circle hover:bg-gray-200 bg-warning"></i>
              <i class="bi bi-twitter ms-3 p-4  text-xl btn px-6 sm:px-0 sm:btn-circle hover:bg-gray-200 bg-warning"></i>
              <i class="bi bi-linkedin ms-3 p-4  text-xl btn px-6 sm:px-0 sm:btn-circle hover:bg-gray-200 bg-warning"></i>
            </div>
          </div>
          <div class="flex-grow flex justify-center flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center sm:justify-end">
            <div class="lg:w-1/4 md:w-1/2  px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/4 md:w-1/2 px-4">
              <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav class="list-none mb-10">
                <li>
                  <a class="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a class="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div>

            
          </div>
        </div>
        {/* </div>
        </div> */}
      </footer>
    </div>
    </Element>
    </>
  );
}
