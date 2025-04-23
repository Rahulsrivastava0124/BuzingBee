// import logoPic from "../../assets/image/slack.png";
// import { FaBell } from "react-icons/fa";
// import buzing_bee from "../../assets/buzing_bee.gif";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <>
      <nav className="bg-white mt-5">
        <div className="mx-auto max-w-8xl sm:px-6 lg:px-8">
          <div className="relative flex  sm:h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0  items-center hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-black focus:outline-none
                focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex sm:flex-1 ms-10 items-center justify-center sm:items-center sm:justify-start">
              <div className="flex items-center flex-shrink-0 ">
                {/* <img
                  className="sm:h-24 h-16 w-auto"
                  src={buzing_bee}
                  alt="Your Company"
                /> */}
                <div className="text-center">
                  <h1 className="text-2xl font-extrabold sm:text-4xl">
                    <span className="text-black">Buzing</span><span className="text-yellow-400">Bee</span>
                  </h1>
                  <p className="sm:text-xs text-[10px] sm:mt-1 text-gray-600 font-boldme">Buzzing Beyond Boundaries</p>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  {/* <a
                    href="/"
                    className="rounded-md  px-3 py-2 text-sm font-medium text-gray-700 hover:text-warning"
                    aria-current="page"
                  >
                    Home
                  </a> */}
                  <Link
                    className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-warning"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    Home
                  </Link>
                  {/* <a
                    href="/"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-warning"
                  >
                    Services
                  </a> */}
                  <Link
                    className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-warning"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    Services
                  </Link>
                  {/* <a
                    href="/"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:text-warning"
                  >
                    About
                  </a> */}
                  <Link
                    className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-warning"
                    to="feedback"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    About
                  </Link>
                  {/* <a
                    href="/"
                    className="rounded-md px-3 py-2 text-sm font-medium  text-gray-700 hover:text-warning"
                  >
                    Blog
                  </a> */}
                  <Link
                    className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-warning"
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    Blog
                  </Link>

                  {/* <a
                    href="/"
                    className="rounded-md px-3 py-2 text-sm font-medium  text-gray-700 hover:text-warning"
                  >
                    contact
                  </a> */}
                  <Link
                    className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-warning"
                    to="footer"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
              <button
                className="px-4 text-gray-800 rounded-full btn btn-outline btn-sm sm:btn-md sm:px-8 btn-dark me-5 "
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                Get Started
              </button>
              <button
                type="button"
                className="relative rounded-full bg-yellow-500 p-3 text-gray-700 hover:text-white focus:outline-none hidden sm:block"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a
              href="/"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Home
            </a>
            <a
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Services
            </a>
            <a
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              About
            </a>
            <a
              href="/"
              className="rounded-md px-3 py-2 text-sm font-medium  text-gray-700 hover:text-warning"
            >
              Blog
            </a>
            <a
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
