import React from "react";
import { Element } from "react-scroll";

export default function FeedBack() {
  return (
    <>
      <Element id="feedback" name="feedback">
        <div
          id="FeedBack"
          className="flex flex-wrap justify-between px-4 py-10 mx-4 my-5 sm:mx-16 sm:my-10 bg-slate-50 rounded-2xl sm:px-14"
          data-aos="zoom-in-left"
        >
          <div className=" sm:w-[45%]">
            <h1
              className="text-2xl font-semibold sm:text-5xl"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Digital Marketing FAQs
            </h1>

            <h1
              className="mt-10 font-semibold text-gray-500 text-md"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              {" "}
              As a leading digital marketing agency. We are dedicated to
              providing comprehensive educational resources and answering
              frequently asked questions to help our clients.
            </h1>
            <div
              className="flex items-center my-8 sm:mt-16 "
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <buttom className="font-bold rounded-full btn btn-outline btn-neutral ps-6">
                {" "}
                More Questions
              </buttom>
              {/*<a  className="hidden font-bold underline underline-offset-5 ms-16 sm:block">*/}
              {/*  Contact Us*/}
              {/*</a>*/}
            </div>
          </div>
          <div className="sm:w-[50%]">
            <div
              className="border-b-2 border-gray-400 rounded-none collapse collapse-plus"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <input
                type="radio"
                name="my-accordion-3"
                defaultChecked
                className="sm:ms-20"
              />
              <div className="text-xl font-bold collapse-title sm:text-2xl">
                Why is digital marketing important for my business?
              </div>
              <div className="collapse-content">
                <p className="font-semibold text-gray-600">
                  Digital marketing allows businesses to reach and engage with a
                  wider audience , generate leads , drive website traffic , and
                  increase brand visibility. It provides measurable
                  results,allows for targeted marketing efforts , and enables
                  businesses to adapt and optimize their strategies based on
                  data and insights.
                </p>
              </div>
            </div>
            <div
              className="border-b-2 border-gray-400 rounded-none collapse collapse-plus"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <input type="radio" name="my-accordion-3" />
              <div className="text-xl font-bold collapse-title sm:text-2xl">
                How can Digital marketing help to improve my website visibility?
              </div>
              <div className="collapse-content">
                <p className="font-semibold text-gray-600">
                  hDigital marketing enhances website visibility by employing
                  key strategies like SEO (optimizing content and technical
                  aspects for search engines), content marketing (blogging,
                  guest posts, and visual content), and social media marketing
                  (driving traffic through shares and engagement). These tactics
                  improve search rankings, increase organic traffic, and attract
                  a relevant audience. ello
                </p>
              </div>
            </div>
            <div
              className="border-b-2 border-gray-400 rounded-none collapse collapse-plus"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <input type="radio" name="my-accordion-3" />
              <div className="text-xl font-bold collapse-title sm:text-2xl">
                How long does it take to see result from digital marketing
                efforts?
              </div>
              <div className="collapse-content">
                <p className="font-semibold text-gray-600">
                  <ul className="list-disc *:text-lg}">
                    <li>{" "}SEO: Results in 3-6 months.</li>
                    <li>
                      {" "}
                      Content Marketing: Takes about 6-9 months for noticeable
                      growth.
                    </li>
                    <li>
                      {" "}
                      Social Media: Initial engagement can be seen in 1-3
                      months, with conversions taking longer.
                    </li>
                    <li>
                      {" "}
                      Paid Ads (PPC): Traffic is immediate, but effective
                      conversion may require 1-2 months.
                    </li>
                  </ul>
                  In general, expect early signs of progress within 3 months,
                  with long-term results becoming clearer over time.
                </p>
              </div>
            </div>
            <div
              className="border-b-2 border-gray-400 rounded-none collapse collapse-plus"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <input type="radio" name="my-accordion-3" />
              <div className="text-xl font-bold collapse-title sm:text-2xl">
                How do you measure the success of digital marketing campaigns?
              </div>
              <div className="collapse-content">
                <p className="font-semibold text-gray-600">
                  The success of digital marketing campaigns is measured using
                  key performance indicators (KPIs) across various channels:
                  <ul className="list-disc *:text-lg}">
                    <li>
                      {" "}
                      Website Traffic: Monitoring the increase in overall
                      traffic, page views, and unique visitors.
                    </li>
                    <li>
                      {" "}
                      Conversion Rate: The percentage of visitors who complete
                      desired actions (e.g., making a purchase, filling out a
                      form).
                    </li>
                    <li>
                      {" "}
                      Return on Investment (ROI): The revenue generated compared
                      to the cost of the campaign.
                    </li>
                    <li>
                      {" "}
                      Click-Through Rate (CTR): How often users click on ads,
                      links, or emails.
                    </li>
                    <li>
                      {" "}
                      Engagement: Social media likes, shares, comments, and
                      email open rates.
                    </li>
                    <li>
                      {" "}
                      Lead Generation: Number of new leads or prospects
                      acquired.
                    </li>
                    <li>
                      {" "}
                      SEO Ranking: Improvement in search engine rankings for
                      targeted keywords.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </>
  );
}
