import React from "react";

export default function FeedBack() {
  return (
    <div className="mx-16 my-10 bg-slate-50 rounded-2xl flex px-14 py-10 justify-between" data-aos="zoom-in-left">
      <div className=" w-[45%]">
        <h1 className="text-5xl font-semibold">Digital Marketing FAQs</h1>

        <h1 className=" text-md font-semibold text-gray-500 mt-10 ">
          {" "}
          As a leading digital marketing agency. We are dedicated to providing
          comprehensive educational resources and answering frequently asked
          questions to help our clients.
        </h1>
        <div className="mt-16 flex items-center ">
          <buttom className="btn btn-outline btn-neutral font-bold rounded-full ps-6">
            {" "}
            More Questions
          </buttom>
          <buttom className="underline underline-offset-5 font-bold ms-16">
            Contact Us
          </buttom>
        </div>
      </div>
      <div className="w-[50%]">
        <div className="collapse collapse-plus border-b-2 border-gray-400  rounded-none">
          <input
            type="radio"
            name="my-accordion-3"
            defaultChecked
            className="ms-20"
          />
          <div className="collapse-title text-2xl font-bold">
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
        <div className="collapse collapse-plus border-b-2 border-gray-400  rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-2xl font-bold">
            How can Digital marketing help to improve my website visibility?
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 font-semibold">hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus border-b-2 border-gray-400 rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-2xl font-bold">
            How long does it take to see result from digital marketing efforts?
          </div>
          <div className="collapse-content">
            <p className="text-gray-600 font-semibold">hello</p>
          </div>
        </div>
        <div className="collapse collapse-plus border-b-2 border-gray-400 rounded-none">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-2xl font-bold">
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
