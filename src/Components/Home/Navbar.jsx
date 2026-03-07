// import logoPic from "../../assets/image/slack.png";
// import { FaBell } from "react-icons/fa";
// import buzing_bee from "../../assets/buzing_bee.gif";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import navMenuData from "../../data/navMenu.json";

function Navbar() {
  const location = useLocation();
  const { navMenu, cta } = navMenuData;

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 w-auto">
              <div className="text-left sm:text-center">
                <h1 className="text-xl sm:text-2xl font-extrabold whitespace-nowrap">
                  <span className="text-black">Buzing</span>
                  <span className="text-yellow-400">Bee</span>
                </h1>
                <p className="hidden sm:block sm:text-xs text-gray-600 font-boldme">
                  Buzzing Beyond Boundaries
                </p>
              </div>
            </div>

            {/* Center Menu */}
            <div className="hidden sm:flex flex-1 justify-center">
              <div className="flex space-x-2">
                {navMenu.map((item) => (
                  <RouterLink
                    key={item.id}
                    to={item.path}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-all relative ${
                      isActive(item.path)
                        ? "text-warning"
                        : "text-gray-700 hover:text-warning"
                    }`}
                  >
                    {item.label}
                    {isActive(item.path) && (
                      <div className="absolute bottom-1 left-0 right-0 h-1 bg-yellow-400 rounded-full"></div>
                    )}
                  </RouterLink>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <a
                href={`tel:${cta.phone}`}
                className="px-3 sm:px-8 py-2 text-gray-800 rounded-full btn btn-outline btn-xs sm:btn-md font-medium flex items-center gap-1 sm:gap-2 whitespace-nowrap"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <span className="hidden sm:inline ">Call Now</span>
              </a>
              <a
                href={`https://wa.me/+${cta.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-8 py-2 text-green-600 rounded-full btn hover:bg-green-500 btn-outline btn-xs sm:btn-md font-medium flex items-center gap-1 sm:gap-2 hover:border-green-500 whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
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
