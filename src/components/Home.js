import React, { useRef, Fragment } from "react";
import searchIcon from "../assets/search.svg";
import arrowDownLight from "../assets/expand-more.svg";
import arrowDownDark from "../assets/expand-more-dark.svg";
import { useGlobalContext } from "../context";
import { Transition } from "@headlessui/react";

function Home() {
  const { isDark, isFilter, setIsFilter, continents } = useGlobalContext();
  const inputSearch = useRef();

  //focus on the inputSearch if the parent container is clicked
  const handleFocus = () => {
    inputSearch.current.focus();
  };

  const handlefiltering = (e) => {
    console.log(e.current.name);
  };

  return (
    <div className="flex  px-4 md:px-8 flex-col w-full mx-auto max-w-screen-xl">
      {/* search section */}
      <div className="flex justify-between items-start md:items-center flex-col md:flex-row pt-6">
        {/* container to hold icon and input */}
        <div
          className="flex transition duration-500 shadow rounded-sm  flex-row px-8 dark:bg-headerBackground bg-headerbBackgroundWhite py-4 mb-10 md:mb-0 w-full md:max-w-lg"
          onClick={handleFocus}
        >
          <img
            className="pr-6 transition duration-500"
            aria-label="seach countries"
            src={searchIcon}
            alt="seach-icon"
          />
          <input
            type="text"
            className="bg-transparent border-none outline-none text-inputLight dark:text-inputDark "
            placeholder="search for a country..."
            ref={inputSearch}
          />
        </div>

        {/* filtring section */}
        <div className="relative  ">
          <button
            className="flex w-full dark:bg-headerBackground bg-headerbBackgroundWhite text-inputLight dark:text-inputDark border-none outline-none py-4 px-4  items-center duration-500 rounded-sm mb-1  "
            onClick={() => setIsFilter(!isFilter)}
          >
            <p className="pr-8">Filter by Region</p>
            <img
              aria-label="Active Filtering Icon"
              src={isDark ? arrowDownDark : arrowDownLight}
              alt="Arrow"
            />
          </button>
          <Transition
            as={Fragment}
            show={isFilter}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 rotate-[-120deg] scale-50"
            enterTo="opacity-100 rotate-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 rotate-0 scale-100 "
            leaveTo="opacity-0 scale-95 "
          >
            <ul className="flex dark:bg-headerBackground bg-headerbBackgroundWhite text-inputLight dark:text-inputDark py-4 px-4 w-full shadow absolute flex-col ">
              {continents.map((con) => {
                const { id, name } = con;
                return (
                  <li key={id} className="list-none">
                    <button
                      onClick={(e) => handlefiltering(e)}
                      name={name}
                      className="border-none outline-none transparent"
                    >
                      {name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </Transition>
        </div>
      </div>

      {/* countires information */}
      <div></div>
    </div>
  );
}

export default Home;
