import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
const apiUrl = "https://restcountries.eu/rest/v2/all";

//list of continent name  avaiable to filter
const continents = [
  {
    id: 1,
    name: "Africa",
  },
  {
    id: 2,
    name: "America",
  },
  {
    id: 3,
    name: "Asia",
  },
  {
    id: 4,
    name: "Europe",
  },
  {
    id: 5,
    name: "Oceania",
  },
];

const getCountries = async () => {
  await axios
    .get(apiUrl)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.error(`Error: ${error}`));
};

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [isFilter, setIsFilter] = useState(true);
  const [countries, setcountries] = useState();

  useEffect(() => {
    getCountries();
  }, []);
  return (
    <AppContext.Provider
      value={{ isDark, continents, setIsDark, isFilter, setIsFilter }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
