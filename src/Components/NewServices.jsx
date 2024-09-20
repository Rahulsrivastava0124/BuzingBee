import React from "react";
import webDev from "../assets/Website_designer.png";
import mobile from "../assets/image/app.png";
import graphics from "../assets/image/graphics.png";
import youtube from "../assets/image/youtube.png";
import SEO from "../assets/image/SEO.png";
import Social from "../assets/image/social.png";
import { Element } from "react-scroll";

const NewServices = () => {
  return (
    <>
      <Element id="services" name="services">
        <div className="md:w-[90%] w-[100%] sm:my-14 my-6 sm:mx-16">
          <div className="container px-5 mx-auto">
            <h2 className="mb-4 text-2xl font-bold text-center">Services</h2>
            <h1 class="md:text-3xl text-xl font-medium title-font text-gray-900 mb-4 text-center">
              Whether you’re just getting started with digital marketing or have
              been doing it for years, our services are designed to meet all
              your goals.
            </h1>
            <div className="flex flex-wrap justify-around mt-10">
              {/* card -1  */}
              <div style={{width:"-webkit-fill-available"}} className="max-w-sm mb-5 overflow-hidden border shadow-lg rounded-xl sm:mb-0 bg-yellow-50">
                <img
                  className="w-[70%] m-auto h-60"
                  src={webDev}
                  alt="Mountain"
                  width="100"
                />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">
                    Web development <span className="text-gray-400">&</span> SEO
                  </div>
                  <p className="hidden text-base text-gray-700 md:block">
                    BuzingBee provides you with a total SEO-friendly and
                    responsive website through which you can take your business
                    to the next level.BuzingBee guarantees to the customer to
                    increase in ROI with our work.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #eCommerce
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #SEO
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Dashboard
                  </span>
                </div>
                 
              </div>
              {/* card -2  */}
              <div style={{width:"-webkit-fill-available"}} className="max-w-sm mb-5 overflow-hidden border shadow-lg rounded-xl sm:mb-0 bg-yellow-50">
                <img
                  className="w-[70%] m-auto h-60"
                  src={graphics}
                  alt="Mountain"
                />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">
                    Graphic Designing
                  </div>
                  <p className="hidden text-base text-gray-700 md:block">
                    Today if you want to take your business ness to the peak
                    then, advertisement through posters and an attractive logo
                    for your company is a must. Our team helps you to develop
                    your logo, and poster according to your will. .
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #3D
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Animation
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Posts
                  </span>
                </div>
                 
              </div>
              {/* card -3  */}
              <div style={{width:"-webkit-fill-available"}} className="max-w-sm mb-5 overflow-hidden border shadow-lg rounded-xl sm:mb-0 bg-yellow-50">
                <img
                  className="w-[70%] m-auto h-60"
                  src={youtube}
                  alt="Mountain"
                />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">
                    Youtube <span className="text-gray-400">&</span> Social
                    media management
                  </div>
                  <p className="hidden text-base text-gray-700 md:block">
                    Social media is the biggest platform to boost any business
                    and for that proper Social media handling is needed. Youtube
                    management is one of the best platforms to grow your online
                    business. It also include video editing, SEO management,
                    thumbnail making, and Smo.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Video
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Thumbnial
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Ads
                  </span>
                </div>
                 
              </div>
                
            </div>
            <div className="flex flex-wrap justify-around sm:mt-10 mt-4">
              {/* card -1  */}
              <div style={{width:"-webkit-fill-available"}} className="max-w-sm mb-5 overflow-hidden border shadow-lg rounded-xl sm:mb-0 bg-yellow-50">
                <img
                  className="w-[70%] m-auto h-60"
                  src={mobile}
                  alt="Mountain"
                />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">App Development</div>
                  <p className="hidden text-base text-gray-700 md:block">
                    App development is a good start for any business to get fast
                    marketing. Buzingbee helps you to make your business more
                    productive through apps. Our skilled professionals work on
                    the specifications and the essentials which increase the
                    ROI.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #E-Commerce
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Food
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #All
                  </span>
                </div>
                 
              </div>
              {/* card -2  */}
              <div style={{width:"-webkit-fill-available"}} className="max-w-sm mb-5 overflow-hidden border shadow-lg rounded-xl sm:mb-0 bg-yellow-50">
                <img
                  className="w-[70%] m-auto h-60"
                  src={SEO}
                  alt="Mountain"
                />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">Video editing</div>
                  <p className="hidden text-base text-gray-700 md:block">
                    Social media is one of the best platforms to grow your
                    business worldwide. we will help you to advertiseyour
                    product on different social media platform which will
                    enhance the productivity and quality of your service
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Animation
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Reels
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Video
                  </span>
                </div>
                 
              </div>
              {/* card -3  */}
              <div style={{width:"-webkit-fill-available"}} className="max-w-sm mb-5 overflow-hidden border shadow-lg rounded-xl sm:mb-0 bg-yellow-50">
                <img className="w-[70%] m-auto h-60" src={Social} alt="Mountain" />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">
                    Meta and google ads
                  </div>
                  <p className="hidden text-base text-gray-700 md:block">
                    This type of marketing strategy is importantly and focused
                    on improving the ranking of the website in search bars which
                    results in an increase in traffic and also helps people to
                    grow and advertise their brands to a higher level of
                    customers.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">

                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Ads
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #leads
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Social media
                  </span>
                  {/* <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                #winter
              </span> */}
                </div>
                 
              </div>
                
            </div>
          </div>
        </div>
      </Element>
    </>
  );
};

export default NewServices;
