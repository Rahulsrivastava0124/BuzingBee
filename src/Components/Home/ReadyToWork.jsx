import React from "react";
import { ReactComponent as ArrowReact } from "../../assets/svg/ArrowRight.svg";

export default function ReadyToWork() {
  return (
    <div className="sm:mx-16 mx-4 sm:my-10 my-8 sm:rounded-3xl rounded-xl bg-gray-100 sm:p-16 p-4  flex justify-between items-center">
      <h1 className="sm:text-7xl text-2xl font-semibold"> Ready to work with us ?</h1>
      <buttom className="btn btn-neutral btn-sm sm:btn-md text-white rounded-full sm:ps-6">
        {" "}
        Contact <ArrowReact className="sm:size-6 size-4 sm:ms-8" />
      </buttom>
    </div>
  );
}
