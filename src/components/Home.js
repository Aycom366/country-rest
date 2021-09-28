import React, { useRef, Fragment } from "react";
import searchIcon from "../assets/search.svg";
import arrowDownLight from "../assets/expand-more.svg";
import arrowDownDark from "../assets/expand-more-dark.svg";
import { useGlobalContext } from "../context";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

function Home() {
  const {
    isDark,
    RegionFilter,
    isLoading,
    isFilter,
    ToggleFilter,
    continents,
    filterCountries,
    setSearchTerm,
    getWidth,
    Region,
  } = useGlobalContext();

  //initialize useRef mainly to get hold of the input
  const inputSearch = useRef();

  //onchange of the search input, set searchTerm in context state for toggling Nations
  const searchCountry = () => {
    setSearchTerm(inputSearch.current.value);
  };

  //focus on the inputSearch if the parent container is clicked
  const handleFocus = () => {
    inputSearch.current.focus();
  };

  //handle filtering by Regions
  const handlefiltering = (e) => {
    RegionFilter(e.target.name);
  };

  return (
    <div
      className={`flex pt-24 px-4 md:px-8 flex-col w-full mx-auto max-w-screen-xl ${
        filterCountries.length <= 4 && getWidth > 600
          ? "h-screen"
          : filterCountries.length <= 1 && getWidth < 600 && "h-screen"
      }`}
    >
      {/* search section */}
      <div className="flex justify-between items-start md:items-center flex-col sm:flex-row pt-6">
        {/* container to hold icon and input */}
        <div
          data-aos="fade-right"
          className="flex transition duration-500 shadow rounded-sm  flex-row px-8 dark:bg-headerBackground bg-headerbBackgroundWhite py-4 mb-10 md:mb-0 w-full sm:w-auto md:w-full md:max-w-lg"
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
            onChange={searchCountry}
          />
        </div>

        {/* filtring section */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="relative z-10"
        >
          <button
            className="flex w-40 justify-between  dark:bg-headerBackground bg-headerbBackgroundWhite text-inputLight dark:text-inputDark border-none outline-none py-4 px-4  items-center duration-500 rounded-sm mb-1  "
            onClick={ToggleFilter}
          >
            <p className=" sm:text-small text-smaller">{Region}</p>
            <img
              aria-label="Active Filtering Icon"
              src={isDark ? arrowDownDark : arrowDownLight}
              alt="Arrow"
            />
          </button>

          {/* imported from headlessui tailwind frameworks  */}
          <Transition
            as={Fragment}
            show={isFilter}
            enter="transform transition duration-[100ms]"
            enterFrom="opacity-0 rotate-[-120deg] scale-50"
            enterTo="opacity-100 rotate-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 rotate-0 scale-100 "
            leaveTo="opacity-0 scale-95 "
          >
            <ul className="flex transition duration-500 dark:bg-headerBackground bg-headerbBackgroundWhite text-inputLight dark:text-inputDark py-4 px-4 w-full shadow absolute flex-col ">
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

      {isLoading ? (
        <div className="flex w-full h-full justify-center items-center">
          <p className="text-bold font-extra text-colorDark dark:text-colorLight ">
            Loading...
          </p>
        </div>
      ) : (
        <div
          className={` ${
            filterCountries.length > 0
              ? " grid gap-y-10 grid-cols-1 sm:grid-cols-2 sm:mb-16 md:grid-cols-3 gap-x-4 lg:grid-cols-4  mt-8 sm:mt-16"
              : "flex justify-center items-center h-full w-full"
          }  `}
        >
          {filterCountries.length < 1 ? (
            <h2
              data-aos="fade-right"
              className="text-2xl sm:text-5xl text-colorDark dark:text-colorLight"
            >
              Oops, not found!
            </h2>
          ) : (
            <>
              {/* single country container */}
              {filterCountries.map((country, index) => {
                const { flags, region, population, capital, name } = country;
                return (
                  <Link
                    data-aos="fade-up"
                    data-aos-delay="200"
                    to={`/${name}`}
                    key={index}
                    className="z-0 transition duration-500 w-full  flex flex-col items-start mx-auto h-full rounded-sm shadow bg-headerbBackgroundWhite dark:bg-headerBackground"
                  >
                    {/* img container */}
                    <div className="w-full h-40">
                      <img
                        className="w-full h-full object-cover "
                        aria-label="Flags Image"
                        src={flags.svg}
                        alt={name}
                      />
                    </div>
                    {/* country information */}
                    <article className="pt-6 px-6 pb-12">
                      <h3 className="mb-4 text-colorDark dark:text-colorLight text-big leading-6 font-extra">
                        {name}
                      </h3>
                      <div>
                        <p className="font-bold text-colorDark dark:text-colorLight mb-2 text-small leading-4">
                          Population:{" "}
                          <span className="font-normal">
                            {population.toLocaleString()}
                          </span>
                        </p>
                        <p className="font-bold text-colorDark dark:text-colorLight mb-2 text-small leading-4">
                          Region: <span className="font-normal">{region}</span>
                        </p>
                        <p className="font-bold text-colorDark dark:text-colorLight text-small leading-4">
                          Capital:{" "}
                          <span className="font-normal">{capital}</span>
                        </p>
                      </div>
                    </article>
                  </Link>
                );
              })}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
