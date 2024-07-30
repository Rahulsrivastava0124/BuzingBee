import React from "react";

export default function FeedBack() {
  return (
    <div id="FeedBack" className="sm:mx-16 mx-4 sm:my-10 my-5 bg-slate-50 rounded-2xl flex flex-wrap sm:px-14 px-4 py-10 justify-between" data-aos="zoom-in-left">
      <div className=" sm:w-[45%]">
        <h1 className="sm:text-5xl text-2xl font-semibold" data-aos="fade-up"
              data-aos-duration="1000">Digital Marketing FAQs</h1>

        <h1 className=" text-md font-semibold text-gray-500 mt-10 " data-aos="fade-up"
              data-aos-duration="2000">
          {" "}
          As a leading digital marketing agency. We are dedicated to providing
          comprehensive educational resources and answering frequently asked
          questions to help our clients.
        </h1>
        <div className="sm:mt-16 my-8 flex items-center " data-aos="fade-up"
              data-aos-duration="3000">
          <buttom className="btn btn-outline btn-neutral font-bold rounded-full ps-6">
            {" "}
            More Questions
          </buttom>
          <buttom className="underline underline-offset-5 font-bold ms-16 hidden sm:block">
            Contact Us
          </buttom>
        </div>
      </div>
      <div className="sm:w-[50%]">
        <div className="collapse collapse-plus border-b-2 border-gray-400  rounded-none" data-aos="fade-up"
              data-aos-duration="1000">
          <input
            type="radio"
            name="my-accordion-3"
            defaultChecked
            className="sm:ms-20"
          />
          <div className="collapse-title sm:text-2xl text-xl font-bold">
            Why is digital marketing important for my business?
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 font-semibold">
              Digital marketing allows businesses to reach and engage with a
              wider audience , generate leads , drive website traffic , and
              increase brand visibility. It provides measurable results,allows
              for targeted marketing efforts , and enables businesses to adapt
              and optimize their strategies based on data and insights.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus border-b-2 border-gray-400  rounded-none" data-aos="fade-up"
              data-aos-duration="1000">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title sm:text-2xl text-xl font-bold">
            How can Digital marketing help to improve my website visibility?
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 font-semibold">hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus border-b-2 border-gray-400 rounded-none" data-aos="fade-up"
              data-aos-duration="1000">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title sm:text-2xl text-xl font-bold">
            How long does it take to see result from digital marketing efforts?
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 font-semibold">hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus border-b-2 border-gray-400 rounded-none" data-aos="fade-up"
              data-aos-duration="1000">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title sm:text-2xl text-xl font-bold">
            How do you measure the success of digital marketing campaigns?
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 font-semibold">hello</p>
          </div>
        </div>
      </div>
    </div>
  );
}
