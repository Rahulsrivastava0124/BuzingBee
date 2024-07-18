import React from "react";

export default function Hero() {
  return (
    <>
      <div className=" m-16 rounded-md ">
        <div className="w-[50%]">
          <h1 className="text-7xl font-medium">
            Stay ahead of the curve with our forword-thinking{" "}
          </h1>
          <h5 className="mt-8 text-lg text-gray-500">
            {" "}
            An award winning SEO agency with discplines in digital marketing,
            desing, and website development , focused on understanding you .
          </h5>

          <div className="mt-16 flex items-center ">
            <buttom className="btn btn-neutral  rounded-full ps-6">
              {" "}
              Schedule call{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6 ms-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </buttom>
            <buttom className="underline font-bold ms-20">
              View Case Study
            </buttom>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}
