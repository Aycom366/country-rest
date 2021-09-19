import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import backArrowLight from "../assets/backWhite.svg";
import backArrowDark from "../assets/darkBack.svg";
import { useGlobalContext } from "../context";

function Country() {
  const { slug } = useParams();
  const { isDark } = useGlobalContext();
  return (
    <div className="flex h-screen pt-32 px-4 md:px-8 flex-col w-full mx-auto max-w-screen-xl">
      <div>
        <button className=" bg-headerbBackgroundWhite dark:bg-headerBackground text-inputLight outline-none border-none shadow-lg flex justify-center py-2 rounded-md  px-6 items-center dark:text-inputDark ">
          <span className="pr-2">
            <img
              aria-label="Arrow Back Button"
              src={`${isDark ? backArrowDark : backArrowLight}`}
              alt="Arrow-Back"
            />
          </span>
          Back
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default Country;
