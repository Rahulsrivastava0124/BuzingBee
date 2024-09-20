import React from "react";
// import ArrowReact from "../../assets/svg/arrowRight.svg";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ReadyToWork() {
  return (
    <div className="flex items-center justify-between p-4 mx-4 my-8 bg-yellow-300 sm:mx-16 sm:my-10 sm:rounded-3xl rounded-xl sm:p-16">
      <h1 className="text-2xl font-semibold sm:text-7xl"> Ready to work with us ?</h1>
      <buttom className="text-white rounded-full btn btn-neutral btn-sm sm:btn-md sm:ps-6"   onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }>
        {" "}
        Contact <FaArrowRightLong class="text-xl"/>
      </buttom>
    </div>
  );
}
