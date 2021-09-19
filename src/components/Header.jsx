import React from "react";
import { useGlobalContext } from "../context";
import light from "../assets/sun.png";
import dark from "../assets/dark.svg";

function Header() {
  const { isDark, changeTheme } = useGlobalContext();
  return (
    <div className="fixed  bg-headerbBackgroundWhite z-10 dark:bg-headerBackground transition duration-500 shadow flex justify-between w-full">
      <section className="text-colorDark dark:text-colorLight mx-auto px-4 md:px-8 py-7 md:py-6 max-w-screen-xl flex justify-between transition duration-500 w-full">
        <h2 className="font-extra text-small md:text-bold leading-5 md:leading-8">
          Where in the world
        </h2>
        <button
          onClick={changeTheme}
          aria-label="toggle theme"
          className="flex cursor-pointer h-full items-center"
        >
          <span className="pr-1">
            {isDark ? (
              <img src={light} alt="Light-Icon" />
            ) : (
              <img src={dark} alt="Dark-Icon" />
            )}
          </span>
          Dark Mode
        </button>
      </section>
    </div>
  );
}

export default Header;
