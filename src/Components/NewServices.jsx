import React from "react";
import webDev from "../assets/Website_designer.png";
import mobile from "../assets/image/app.png";
import graphics from "../assets/image/graphics.png";
import youtube from "../assets/image/youtube.png";
import SEO from "../assets/image/SEO.png";
import Social from "../assets/image/social.png";
import { Element } from "react-scroll";

const getAssetSrc = (asset) =>
  typeof asset === "string" ? asset : asset?.src || "";

const NewServices = () => {
  return (
    <>
      <Element id="services" name="services">
        <div className="md:w-[90%] w-[100%] sm:my-16 my-6 sm:mx-16">
          <div className="container px-5 mx-auto">
            <h1 className="mb-4 text-2xl font-bold text-center">
              Our Services
            </h1>
            <h2 className="md:text-3xl text-xl font-medium title-font text-gray-900 mb-4 text-center">
              Comprehensive Digital Marketing Automation. From AI Agents to Paid
              Ads, we deliver intelligent solutions that drive results.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {/* card -1  */}
              <div className="mb-5 overflow-hidden border shadow-lg rounded-xl sm:mb-0 bg-yellow-50">
                <img
                  className="w-[70%] m-auto h-60"
                  src={getAssetSrc(webDev)}
                  alt="Mountain"
                  width="100"
                />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">
                    AI Agent Development
                  </div>
                  <p className="hidden text-base text-gray-700 md:block">
                    Build intelligent AI agents that automate your entire
                    marketing funnel. From lead qualification to customer
                    nurturing, our AI agents work 24/7 to convert prospects into
                    loyal customers. Powered by advanced machine learning.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #ChatBot
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #AI Workflow
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Automation
                  </span>
                </div>
                 
              </div>
              {/* card -2  */}
              <div className="mb-5 overflow-hidden border shadow-lg rounded-xl sm:mb-0 bg-yellow-50">
                <img
                  className="w-[70%] m-auto h-60"
                  src={getAssetSrc(graphics)}
                  alt="Mountain"
                />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">
                    Website Agent Development
                  </div>
                  <p className="hidden text-base text-gray-700 md:block">
                    Deploy intelligent agents directly on your website to engage
                    visitors. Smart visitor tracking, behavior prediction, and
                    personalized experiences. Convert anonymous browsers into
                    high-intent prospects automatically.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #WebSite Bot
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Personalization
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #CRM Integration
                  </span>
                </div>
                 
              </div>
              {/* card -3  */}
              <div className="mb-5 overflow-hidden border shadow-lg rounded-xl sm:mb-0 bg-yellow-50">
                <img
                  className="w-[70%] m-auto h-60"
                  src={getAssetSrc(youtube)}
                  alt="Mountain"
                />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">
                    Google <span className="text-gray-400">&</span> Meta Ads
                  </div>
                  <p className="hidden text-base text-gray-700 md:block">
                    Expert Google Ads and Meta (Facebook/Instagram) campaign
                    management. Maximize ROAS with AI-optimized targeting,
                    budget allocation, and creative testing. Our agents
                    continuously learn and improve performance.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Google Ads
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Facebook Ads
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #ROAS Optimization
                  </span>
                </div>
                 
              </div>
                
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {/* card -1  */}
              <div className="mb-5 overflow-hidden border shadow-lg rounded-xl sm:mb-0 bg-yellow-50">
                <img
                  className="w-[70%] m-auto h-60"
                  src={getAssetSrc(mobile)}
                  alt="Mountain"
                />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">App Development</div>
                  <p className="hidden text-base text-gray-700 md:block">
                    Native and cross-platform mobile app development with
                    integrated AI agents. Built for conversion with automated
                    user engagement, push notifications, and in-app marketing
                    automation. Boost your digital presence with powerful apps.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #iOS/Android
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Push Automation
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Engagement
                  </span>
                </div>
                 
              </div>
              {/* card -2  */}
              <div className="mb-5 overflow-hidden border shadow-lg rounded-xl sm:mb-0 bg-yellow-50">
                <img
                  className="w-[70%] m-auto h-60"
                  src={getAssetSrc(SEO)}
                  alt="Mountain"
                />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">
                    AdSense & Monetization
                  </div>
                  <p className="hidden text-base text-gray-700 md:block">
                    Maximize revenue through Google AdSense optimization and
                    multi-channel monetization. AI-driven ad placement, audience
                    targeting, and traffic quality improvements. Scale your
                    passive income while maintaining user experience.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #AdSense
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Monetization
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Revenue
                  </span>
                </div>
                 
              </div>
              {/* card -3  */}
              <div className="mb-5 overflow-hidden border shadow-lg rounded-xl sm:mb-0 bg-yellow-50">
                <img
                  className="w-[70%] m-auto h-60"
                  src={getAssetSrc(Social)}
                  alt="Mountain"
                />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">
                    Email Marketing Automation
                  </div>
                  <p className="hidden text-base text-gray-700 md:block">
                    Intelligent email sequences powered by AI. Segment
                    audiences, personalize content, and trigger campaigns
                    automatically. Increase open rates, click-through rates, and
                    conversions with data-driven email strategies.
                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Email Sequences
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Segmentation
                  </span>
                  <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold bg-yellow-200 rounded-full text-100">
                    #Personalization
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
