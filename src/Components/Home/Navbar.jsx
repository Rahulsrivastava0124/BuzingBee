// import logoPic from "../../assets/image/slack.png";
// import { FaBell } from "react-icons/fa";
// import buzing_bee from "../../assets/buzing_bee.gif";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MessageCircle, Menu, X } from "lucide-react";
import navMenuData from "../../data/navMenu.json";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { navMenu, cta } = navMenuData;

  const isActive = (path) => {
    return router.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="text-left sm:text-center">
                <div className="text-xl sm:text-2xl font-extrabold whitespace-nowrap">
                  <span className="text-black">Buzing</span>
                  <span className="text-yellow-400">Bee</span>
                </div>
                <p className="hidden sm:block sm:text-xs text-gray-600 font-boldme">
                  Buzzing Beyond Boundaries
                </p>
              </div>
            </div>

            {/* Center Menu */}
            <div className="hidden sm:flex flex-1 justify-center">
              <div className="flex space-x-2">
                {navMenu.map((item) => (
                  <Link
                    key={item.id}
                    href={item.path}
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
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <a
                href={`tel:${cta.phone}`}
                className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full border-2 border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition-colors font-medium whitespace-nowrap text-xs sm:text-sm"
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
                <span className="hidden sm:inline">Call</span>
              </a>
              <a
                href={`https://wa.me/${cta.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-full border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors font-medium whitespace-nowrap text-xs sm:text-sm"
              >
                <MessageCircle className="h-4 w-4" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:bg-gray-100 transition-colors"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        {isMenuOpen && (
          <div
            className="sm:hidden block border-t border-gray-200"
            id="mobile-menu"
          >
            <div className="space-y-1 px-4 pb-3 pt-2">
              {navMenu.map((item) => (
                <Link
                  key={item.id}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                    isActive(item.path)
                      ? "bg-yellow-400 text-gray-900"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
