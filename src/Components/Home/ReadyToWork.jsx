import React from "react";
import { ReactComponent as ArrowReact } from "../../assets/svg/ArrowRight.svg";

export default function ReadyToWork() {
  return (
    <div className="mx-16 my-10 rounded-3xl bg-gray-100 p-16 flex justify-between items-center">
      <h1 className="text-7xl font-semibold"> Ready to work with us ?</h1>
      <buttom className="btn btn-neutral text-white rounded-full ps-6">
              {" "}
              Schedule call <ArrowReact className="size-6 ms-8" />
            </buttom>
    </div>
  );
}
