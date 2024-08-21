import React, { useState } from "react";

const Header = () => {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <div className="w-full">
      <nav className="bg-black">
        <div className="max-w-7xl x-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-center text-white text-xl font-bold">
                  Reginaldo
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Home
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset  focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <div className="h-6 w-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 10.5858L9.17157 7.75736L7.75736 9.17157L10.5858 12L7.75736 14.8284L9.17157 16.2426L12 13.4142L14.8284 16.2426L16.2426 14.8284L13.4142 12L16.2426 9.17157L14.8284 7.75736L12 10.5858Z"></path></svg>
                  </div>
                ) : (
                  <div className="h-6 w-6">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Home
              </a>
              <a
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                About
              </a>
              <a
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Skills
              </a>
              <a
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Projects
              </a>
              <a
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
