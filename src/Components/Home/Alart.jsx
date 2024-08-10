import React from "react";

export default function Alart(props) {
  return (
    <div>
      {props.show ? (
        <div className="z-40  w-96 toast toast-top toast-center">
          {/* <div className="alert alert-info">
          <span>New mail arrived.</span>
        </div> */}
          <div role="alert" className="alert alert-warning">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 stroke-current shrink-0"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{props.message}</span>
          </div>
          {/* <div className="alert alert-success">
    <span>Message sent successfully.</span>
  </div> */}
        </div>
      ) : null}
    </div>
  );
}
