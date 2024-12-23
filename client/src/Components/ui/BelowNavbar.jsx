import React, { useState, useEffect } from "react";

function BelowNavbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    
      useEffect(() => {
        if (isDarkMode) {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
      }, [isDarkMode]);
    
      const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
      };
  return (
    <>
      <nav className="bg-stone-950 ml-9">
        <div className="w-full px-4">
          <div className="flex justify-between">
            {/* Links (Left Side) */}
            <div className="flex">
              <div className="hidden md:flex items-center space-x-4">
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Today
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900"
                >
                  Tomorrow
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-gray-200 hover:text-gray-900"
                >
                  Next 7 days
                </a>
              </div>
            </div>

            {/* Buttons (Right Side) */}
            <div className="hidden md:flex items-center space-x-1 mr-[28rem]">
  <div className="flex items-center justify-center sm:ml-auto mt-4 sm:mt-0 sm:mr-6 md:mr-8 lg:mr-2 ">
    <label className="relative inline-block w-36 h-8 overflow-hidden">
      {/* Hidden input */}
      <input
        type="checkbox"
        className="hidden"
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
      <span className="w-full h-full rounded-full bg-stone-900 transition flex items-center justify-between px-3 text-xs text-gray-200 opacity-55 font-bold">
        <span>{isDarkMode ? "Forecast" : "Air Quality"}</span>
        <span>{isDarkMode ? "Air Quality" : "Forecast"}</span>
      </span>

      <span
        className={` cursor-pointer absolute top-0 left-0 h-full w-1/2 rounded-full bg-blue-100 text-gray-900 font-bold flex items-center justify-center text-xs transition-transform ${
          isDarkMode ? "translate-x-[100%]" : "translate-x-0"
        }`}
      >
        {isDarkMode ? "Forecast" : "Air Quality"}
      </span>
    </label>
  </div>
</div>


            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button className="mobile-menu-button">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="mobile-menu hidden md:hidden">
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Features
          </a>
          <a
            href="#"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Pricing
          </a>
        </div>
      </nav>
    </>
  );
}

export default BelowNavbar;
