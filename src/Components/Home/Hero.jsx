import React from "react";
import { ReactComponent as ArrowReact } from "../../assets/svg/ArrowRight.svg";

export default function Hero() {
  return (
    <>
      <div className=" m-16 rounded-md flex">
        <div className="w-[50%] ">
          <h1 className="text-7xl font-medium">
            Stay ahead of the curve with our forword-thinking{" "}
          </h1>
          <h5 className="mt-8 text-lg text-gray-500 pe-32">
            {" "}
            An award winning SEO agency with discplines in digital marketing,
            desing, and website development , focused on understanding you .
          </h5>

          <div className="mt-16 flex items-center ">
            <buttom className="btn btn-neutral  rounded-full ps-6">
              {" "}
              Schedule call <ArrowReact className="size-6 ms-8" />
            </buttom>
            <buttom className="underline font-bold ms-20">
              View Case Study
            </buttom>
          </div>
          <div className="mt-16">
            <h1 className=" w-44 font-bold"> Trusted by the World's biggest brands </h1>
            <div>
              <div>

                <span></span>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="w-[50%] py-10">
          <div className="flex items-center justify-evenly mb-3 p-5">
            <div className=" bg-gray-100 rounded-xl w-[43%] h-[250px]">
              Image
            </div>
            <div className=" bg-gray-100 rounded-xl w-[43%] h-[250px]">
              {" "}
              230+
            </div>
          </div>
          <div className=" bg-gray-100 w-[86%] m-auto rounded-xl h-[200px]">
            {" "}
            Drive more Traffic
          </div>
        </div>
      </div>
    </>
  );
}
