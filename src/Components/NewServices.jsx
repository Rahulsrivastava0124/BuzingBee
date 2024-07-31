import React from "react";
import webDev from "../assets/Website_designer.gif";
import mobile from "../assets/image/app.png";
import graphics from "../assets/image/graphics.png";
import youtube from "../assets/image/youtube.png";
import SEO from "../assets/image/SEO.png";
import Social from "../assets/image/social1.png";

const NewServices = () => {
  return (
    <div className="w-[90%] my-14 sm:mx-16">
      <div className="container px-5 mx-auto">
        <h2 className="mb-4 text-2xl font-bold text-center">Services</h2>
        <h1 class="text-3xl font-medium title-font text-gray-900 mb-4 text-center">
          Whether you’re just getting started with digital marketing or have
          been doing it for years, our services are designed to meet all your
          goals.
        </h1>
        <div className="flex flex-wrap justify-around mt-10">
          {/* card -1  */}
          <div className="max-w-sm overflow-hidden rounded shadow-lg">
            <img
              className="w-[70%] m-auto h-60"
              src={webDev}
              alt="Mountain"
              width="100"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">Web development</div>
              <p className="text-base text-gray-700">
                BuzingBee provides you with a total SEO-friendly and responsive
                website through which you can take your business to the next
                level.BuzingBee guarantees to the customer to increase in ROI
                with our work.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #photography
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #travel
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #winter
              </span>
            </div>
             
          </div>
          {/* card -2  */}
          <div className="max-w-sm overflow-hidden rounded shadow-lg">
            <img
              className="w-[70%] m-auto h-60"
              src={graphics}
              alt="Mountain"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">Graphic Designing</div>
              <p className="text-base text-gray-700">
                Today if you want to take your business ness to the peak then,
                advertisement through posters and an attractive logo for your
                company is a must. Our team helps you to develop your logo, and
                poster according to your will. .
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #photography
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #travel
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #winter
              </span>
            </div>
             
          </div>
          {/* card -3  */}
          <div className="max-w-sm overflow-hidden rounded shadow-lg">
            <img className="w-[70%] m-auto h-60" src={youtube} alt="Mountain" />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">Youtube management</div>
              <p className="text-base text-gray-700">
                Social media is the biggest platform to boost any business and
                for that proper Social media handling is needed. Youtube
                management is one of the best platforms to grow your online
                business. It also include video editing, SEO management,
                thumbnail making, and Smo.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #photography
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #travel
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #winter
              </span>
            </div>
             
          </div>
            
        </div>
        <div className="flex flex-wrap justify-around mt-10">
          {/* card -1  */}
          <div className="max-w-sm overflow-hidden rounded shadow-lg">
            <img className="w-[70%] m-auto h-60" src={mobile} alt="Mountain" />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">App Development</div>
              <p className="text-base text-gray-700">
                App development is a good start for any business to get fast
                marketing. KRAFFIC helps you to make your business more
                productive through apps. Our skilled professionals work on the
                specifications and the essentials which increase the ROI.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #photography
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #travel
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #winter
              </span>
            </div>
             
          </div>
          {/* card -2  */}
          <div className="max-w-sm overflow-hidden rounded shadow-lg">
            <img className="w-[70%] m-auto h-60" src={Social} alt="Mountain" />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">
                Social media management
              </div>
              <p className="text-base text-gray-700">
                Social media is one of the best platforms to grow your business
                worldwide. we will help you to advertiseyour producto
                ndifferentsocialmediaplatformwhichwill enhance the productivity
                and quality of your service
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #photography
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #travel
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #winter
              </span>
            </div>
             
          </div>
          {/* card -3  */}
          <div className="max-w-sm overflow-hidden rounded shadow-lg">
            <img className="w-[70%] m-auto h-60" src={SEO} alt="Mountain" />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">SEO</div>
              <p className="text-base text-gray-700">
                This type of marketing strategy is importantly and focused on
                improving the ranking of the website in search bars which
                results in an increase in traffic and also helps people to grow
                and advertise their brands to a higher level of customers.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #photography
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #travel
              </span>
              <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
                #winter
              </span>
            </div>
             
          </div>
            
        </div>
      </div>
    </div>
  );
};

export default NewServices;
