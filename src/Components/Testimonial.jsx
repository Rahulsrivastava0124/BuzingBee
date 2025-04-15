import React from "react";
import astropoints from '../assets/image/portfolio_1.jpg'
export default function Testimonial() {
  return (
    <div className="my-0 sm:mx-16">
      <section class="text-gray-600 body-font" data-aos="fade-right" data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <div class="container px-5  mx-auto">
          <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
            Testimonials
          </h1>
          <div class="flex flex-wrap -m-4" data-aos="fade-up"
              data-aos-duration="2000">
            <div class="sm:p-4 p-2 md:w-1/2 w-full">
              <div class="h-full bg-gray-100 p-8 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="block w-5 h-5 text-yellow-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">
                  I partnered with BuzingBee for designing the logo of my restaurant, The Biryan, and to help grow my business. Their creativity and expertise in branding were exceptional! The logo they designed perfectly captured the essence of my restaurant, and their marketing strategies have driven rapid growth. BuzingBee is hands down the best in the business when it comes to helping brands stand out. Highly recommend them to anyone looking to scale their business quickly and effectively
                </p>
                <a class="inline-flex items-center" href="/">
                  <img
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900">
                     The Biryan
                    </span>
                    <span class="text-gray-500 text-sm uppercase">restaurant</span>
                  </span>
                </a>
              </div>
            </div>
            <div class="sm:p-4 p-2 md:w-1/2 w-full" data-aos="fade-up"
              data-aos-duration="2000">
              <div class="h-full bg-gray-100 p-8 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  class="block w-5 h-5 text-yellow-400 mb-4"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p class="leading-relaxed mb-6">
                  BuzingBee has truly transformed my business! From designing a sleek, user-friendly website for AstroPoints to implementing effective marketing strategies, they have driven rapid growth for my astrology platform. Their team is highly professional, creative, and dedicated to delivering results. I saw a significant increase in traffic and engagement after working with them. Highly recommended for anyone looking to take their business to the next level.
                </p>
                <a class="inline-flex items-center" href="/">
                  <img
                    alt="testimonial"
                    src={astropoints}
                    class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900">
                     Astropoints
                    </span>
                    <span class="text-gray-500 text-sm uppercase">business</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
