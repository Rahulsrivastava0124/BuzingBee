import React from "react";
import { Element } from "react-scroll";

export default function Footer() {
  return (
    <>
      <Element id="footer" name="footer">
        <div>
          <footer className="text-gray-600 body-font">
            <div className="container sm:px-20 sm:pt-20 pt-10 pb-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
              <div className="sm:w-[30%] mx-4 flex-shrink-0 md:mx-0 text-center md:text-left ">
                <span className="flex title-font font-medium sm:items-center md:justify-start sm:justify-center text-gray-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                  <span className="ml-3 text-2xl text-warning font-semibold">
                    BuzingBee
                  </span>
                </span>
                <p className="mt-2 text-sm text-gray-500 text-left">
                  BuzingBee provides you with various dynamic services with
                  various external features as compared to others. With these
                  services, you can acquire web designing, app development,
                  Social media management, Search engine optimization, Graphic
                  designing, and many more. .
                </p>
                <div className="mt-10 m-left">
                  <a href={"https://www.instagram.com/buzingbee_/"}>  <i className="bi bi-instagram ms-3 p-4  text-xl btn px-6 sm:px-0 text-white sm:btn-circle hover:scale-x-105 hover:bg-black bg-pink-600"></i></a>
                  <a href={"https://www.facebook.com/profile.php?id=61562079487441"}>  <i className="bi bi-facebook ms-3 p-4  text-xl btn px-6 sm:px-0 sm:btn-circle hover:scale-x-105 hover:bg-black bg-blue-500 text-white"></i></a>
                  <a href={"https://x.com/BuzingBee_"}> <i className="bi bi-twitter ms-3 p-4  text-xl btn px-6 sm:px-0 sm:btn-circle hover:scale-x-105 hover:bg-black text-white bg-warning"></i></a>
                  <a href={"https://www.linkedin.com/company/buzing-bee/?viewAsMember=true"}>  <i className="bi bi-linkedin ms-3 p-4 text-xl btn px-6 sm:px-0 sm:btn-circle bg-teal-300 hover:scale-x-105 hover:bg-black hover:text-white  "></i></a>
                </div>
              </div>
              <div className="flex-grow flex justify-center flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center sm:justify-end">
                <div className="lg:w-1/4 md:w-1/2  px-4">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                    CATEGORIES
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <a className="text-gray-600 hover:text-gray-800" href={"#Home"}>
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-800"
                        href={"#About"}
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-800"
                        href={"#Service"}
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-600 hover:text-gray-800"
                        href={"#Contact"}
                      >
                        Contact
                      </a>
                    </li>
                  </nav>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Element>
    </>
  );
}
