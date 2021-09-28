import React, { useEffect } from "react";
import { useHistory, Link, useParams } from "react-router-dom";
import backArrowLight from "../assets/backWhite.svg";
import backArrowDark from "../assets/darkBack.svg";
import { useGlobalContext } from "../context";

function Country() {
  const { slug } = useParams();
  let history = useHistory();
  const { isDark, getSingleCountry, singleCountry, getWidth, dictionary } =
    useGlobalContext();

  useEffect(() => {
    getSingleCountry(slug);
  }, [slug]);

  const abrToFull = (abr) => dictionary[abr];

  if (singleCountry !== null && singleCountry !== undefined) {
    const {
      flags,
      name,
      population,
      topLevelDomain,
      region,
      subregion,
      borders,
      capital,
      currencies,
      languages,
      nativeName,
    } = singleCountry;

    const borderResult = borders.map(abrToFull);

    return (
      <div
        className={`flex transition duration-500  pt-32 px-4 md:px-8 flex-col w-full mx-auto max-w-screen-xl ${
          getWidth <= 640 ? "h-full" : "h-screen"
        } `}
      >
        <div className="mb-12">
          <button
            data-aos="fade-right"
            className=" bg-headerbBackgroundWhite transition duration-500 dark:bg-headerBackground text-inputLight outline-none border-none shadow-lg flex justify-center py-2 rounded-md  px-6 items-center dark:text-inputDark"
            onClick={history.goBack}
          >
            <span className="pr-2">
              <img
                aria-label="Arrow Back Button with different arrow colors for each theme"
                src={`${isDark ? backArrowDark : backArrowLight}`}
                alt="Arrow-Back"
              />
            </span>
            Back
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-14 gap-x-0 sm:gap-x-8 md:gap-x-16 lg:gap-x-32 w-full">
          {/* image container div */}
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="h-extra w-full"
          >
            <img
              aria-label="flags image"
              src={flags.svg}
              className="w-full h-full object-cover"
              alt={name}
            />
          </div>
          {/* country info container */}
          <section className="mb-20 sm:mb-0  grid grid-cols-1 gap-y-8">
            <h2
              data-aos="fade-left"
              className="text-colorDark transition duration-500  dark:text-colorLight font-extraBold font-extra leading-10"
            >
              {name}
            </h2>
            {/* country details informations container */}
            <div className="grid gap-y-4 grid-cols-1 sm:grid-cols-2 ">
              <div data-aos="fade-left" data-aos-delay="200">
                <p className="font-bold text-colorDark dark:text-colorLight text-small  transition duration-500 leading-8">
                  Native Name: <span className="font-normal">{nativeName}</span>
                </p>
                <p className="font-bold text-colorDark dark:text-colorLight transition duration-500  text-small leading-8">
                  Population:{" "}
                  <span className="font-normal">
                    {population.toLocaleString()}
                  </span>
                </p>
                <p className="font-bold text-colorDark dark:text-colorLight transition duration-500  text-small leading-8">
                  region: <span className="font-normal">{region}</span>
                </p>
                <p className="font-bold transition duration-500  text-colorDark dark:text-colorLight text-small leading-8">
                  Sub region: <span className="font-normal">{subregion}</span>
                </p>
                <p className="font-bold transition duration-500  text-colorDark dark:text-colorLight text-small leading-8">
                  Capital: <span className="font-normal">{capital}</span>
                </p>
              </div>
              <div data-aos="fade-left" data-aos-delay="400">
                <p className="font-bold transition duration-500 text-colorDark dark:text-colorLight text-small leading-8">
                  Top Level Domain:{" "}
                  <span className="font-normal">{topLevelDomain}</span>
                </p>
                <h3 className="font-bold transition duration-500  text-colorDark dark:text-colorLight text-small leading-8">
                  Currencies:{" "}
                  <span className="font-normal">
                    {currencies.map((cur, index) => {
                      const { name } = cur;
                      return (
                        <p className="inline" key={index}>
                          {`${name}${
                            index === currencies.length - 1 ? "" : ","
                          }`}
                        </p>
                      );
                    })}
                  </span>
                </h3>
                <h3 className="font-bold transition duration-500  text-colorDark dark:text-colorLight text-small leading-8">
                  Languages:{" "}
                  <span className="font-normal">
                    {languages.map((lang, index) => {
                      const { name } = lang;
                      return (
                        <p className="inline" key={index}>{`${name}${
                          index === languages.length - 1 ? "" : ","
                        }`}</p>
                      );
                    })}
                  </span>
                </h3>
              </div>
            </div>
            {/* border countries container */}
            <div
              data-aos="fade-left"
              data-aos-delay="600"
              className="borderClass h-full flex flex-col sm:flex-row justify-between  font-small w-full"
            >
              <p className="font-bold text-colorDark dark:text-colorLight transition duration-500  text-small leading-8  mr-0 sm:mr-2 ">
                Border Countries:
              </p>
              <div className=" grid grid-cols-3 gap-2">
                {borderResult.map((border, index) => {
                  return (
                    <Link
                      key={index}
                      to={`/${border}`}
                      className="border-none outline-none py-2 flex items-center justify-center rounded-sm shadow bg-headerbBackgroundWhite dark:bg-headerBackground transition duration-500 px-4 w-full h-full dark:text-inputDark text-inputLight"
                    >
                      {border}
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
  return (
    <div className="flex w-full flex-col sm:flex-col h-screen items-center justify-center">
      <p
        data-aos="fade-down"
        className="font-extra pr-2  text-colorDark dark:text-colorLight font-extraBold leading-10 "
      >
        Error displaying Country's Info!
      </p>
      <button
        data-aos="fade-up"
        data-aos-delay="200"
        className=" bg-headerbBackgroundWhite dark:bg-headerBackground transition duration-500  text-inputLight outline-none border-none shadow-lg flex justify-center py-2 rounded-md  px-6 items-center dark:text-inputDark"
        onClick={history.goBack}
      >
        <span className="pr-2">
          <img
            aria-label="Arrow Back Button with different arrow colors for each theme"
            src={`${isDark ? backArrowDark : backArrowLight}`}
            alt="Arrow-Back"
          />
        </span>
        Back
      </button>
    </div>
  );
}

export default Country;
