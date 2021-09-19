import axios from "axios";
import React, { useState, useContext, useReducer, useEffect } from "react";
import { reducer } from "./reducers/reducer";
import { ActionType } from "./constant/Actions";

const apiUrl = "https://restcountries.eu/rest/v2/all";

//list of continent name  avaiable to filter
const continents = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Africa",
  },
  {
    id: 3,
    name: "Americas",
  },
  {
    id: 4,
    name: "Asia",
  },
  {
    id: 5,
    name: "Europe",
  },
  {
    id: 6,
    name: "Oceania",
  },
];

const initialState = {
  isDark: false,
  isFilter: false,
  countries: [],
  continents: continents,
  singleCountry: null,
  isLoading: false,
  filterCountries: [],
  Region: "All",
  searchTerm: "",
};

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchTerm, setSearchTerm] = useState("");

  const getCountries = async () => {
    dispatch({ type: ActionType.ChangeLoading });
    await axios
      .get(apiUrl)
      .then((response) => {
        dispatch({ type: ActionType.Load_Items, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionType.Errorr });
        console.error(`Error: ${error}`);
      });
  };

  const changeTheme = () => {
    dispatch({ type: ActionType.Theme });
  };

  const RegionFilter = (name) => {
    dispatch({
      type: ActionType.RegionFiltering,
      payload: name,
      modify: searchTerm,
    });
  };

  const ToggleFilter = () => {
    dispatch({ type: ActionType.ToggleFiltering });
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    dispatch({ type: ActionType.NameFiltering, payload: searchTerm });
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        changeTheme,
        ToggleFilter,
        RegionFilter,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
