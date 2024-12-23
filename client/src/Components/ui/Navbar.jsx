import { faBell, faGrip, faLocationDot, faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("Select a Country");
  // const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        const countryNames = data.map((country) => country.name.common).sort();
        setCountries(countryNames);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <>
      <nav className="bg-stone-950 py-2 ml-9">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex flex-wrap items-center justify-between h-auto">
            {/* Mobile Menu Button */}
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
                onClick={() => setMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg
                    className="size-6"
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
                ) : (
                  <svg
                    className="size-6"
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
                )}
              </button>
            </div>

            {/* Icons and Dropdown */}
            <div className="flex flex-wrap items-center w-full sm:w-auto justify-between">
              <div className="flex shrink-0">
                <div className="bg-stone-900 rounded-full flex justify-center items-center h-10 w-10">
                  <FontAwesomeIcon
                    icon={faBell}
                    className="h-5 p-3 w-auto text-neutral-200 cursor-pointer transform hover:scale-125 transition duration-200"
                  />
                </div>

                <div className="bg-stone-900 rounded-full flex justify-center items-center h-10 w-10 ml-2">
                  <i className="bi bi-grid-fill text-neutral-200 cursor-pointer transform hover:scale-125 transition duration-200"></i>
                </div>

                <div className="bg-transparent rounded-full flex justify-center items-center h-10 w-10 ml-2">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-neutral-200 text-base"
                  />
                </div>
              </div>

              <div className="flex items-center ml-4 mt-4 sm:mt-0 bg-stone-900 rounded-full py-1">
                <select
                  className="bg-transparent text-neutral-200 text-sm rounded-full p-1 outline-none w-40 "
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option
                    className="bg-stone-950 text-neutral-200 text-sm"
                    disabled
                    value="Select a Country"
                  >
                    Select a Country
                  </option>
                  {countries.map((country, index) => (
                    <option
                      className="bg-stone-950 text-neutral-200 text-sm"
                      key={index}
                      value={country}
                    >
                      {country}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search Bar */}
            <div className="w-full sm:w-auto mt-4 sm:mt-0 hidden sm:flex items-center justify-center ">
              <div className="w-full max-w-md rounded-full">
                <div className="flex items-center bg-stone-900 rounded-full shadow-lg text-gray-700 w-auto py-2 pr-64 mr-16">
                  <div className="grid place-items-center h-full w-12 bg-stone-900 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="search"
                    className="h-full w-full text-sm text-gray-700 outline-none pr-2 bg-stone-900 rounded-lg"
                    placeholder="Search something..."
                  />
                </div>
              </div>
            </div>

            {/* Profile Dropdown */}
            <div className="relative mt-4 sm:mt-0 flex items-center space-x-4">
      {/* Dark Mode Switch */}
      <label htmlFor="darkModeToggle" className="flex items-center cursor-pointer">
  <div className="relative">
    <input
      id="darkModeToggle"
      type="checkbox"
      checked={isDarkMode}
      onChange={toggleDarkMode}
      className="sr-only"
    />
    {/* <div className="block w-11 h-6 bg-gray-300 rounded-full"></div> */}
    {/* <div
      className={`absolute left-1 top-0 w-6 h-6 bg-white rounded-full transition-all duration-300 ease-in-out flex items-center justify-center ${
        isDarkMode ? 'transform translate-x-5' : ''
      }`}
    >
      {isDarkMode ? (
        <FontAwesomeIcon icon={faSun} className="text-black text-xs" />  // Sun icon for dark mode
      ) : (
        <FontAwesomeIcon icon={faMoon} className="text-black text-xs" />  // Moon icon for light mode
      )}
    </div> */}
  </div>
</label>

      {/* Profile Dropdown */}
      <button
        type="button"
        className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="h-8 w-8 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="Profile"
        />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700">
            Your Profile
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700">
            Settings
          </a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700">
            Sign out
          </a>
        </div>
      )}
    </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            {/* Avatar and Search Input */}
            <div className="flex flex-col items-center space-y-4 px-4 py-4">
              <img
                className="h-16 w-16 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User Avatar"
              />

              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-md border border-gray-300 p-2 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Menu Items */}
            <div className="space-y-1 px-4 pb-3">
              <a
                href="#"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              >
                Profile
              </a>
              <a
                href="#"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              >
                Settings
              </a>
              <a
                href="#"
                className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              >
                Sign Out
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
