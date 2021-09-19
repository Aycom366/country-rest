import { ActionType } from "../constant/Actions";

const formatLetter = (letter) => {
  const name = letter.charAt(0).toUpperCase() + letter.slice(1);
  return name;
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.ChangeLoading:
      return { ...state, isLoading: !state.isLoading };

    case ActionType.Load_Items:
      return {
        ...state,
        countries: action.payload,
        filterCountries: action.payload,
        isLoading: false,
      };

    case ActionType.ToggleFiltering:
      return { ...state, isFilter: !state.isFilter };

    case ActionType.Theme:
      return { ...state, isDark: !state.isDark };

    case ActionType.NameFiltering: {
      let tempcountry;
      let name = formatLetter(action.payload);
      if (state.Region !== "All") {
        tempcountry = state.countries.filter(
          (country) =>
            country.name.startsWith(name) && country.region === state.Region
        );
      } else {
        tempcountry = state.countries.filter((country) =>
          country.name.startsWith(name)
        );
      }

      return { ...state, filterCountries: tempcountry };
    }

    case ActionType.RegionFiltering: {
      const name = action.payload;

      let tempCountry;
      if (name === "All") {
        tempCountry = state.countries;
      } else if (action.modify !== "") {
        const searchTerm = formatLetter(action.modify);
        tempCountry = state.countries.filter(
          (region) => region.region === name && region.name.match(searchTerm)
        );
      } else {
        tempCountry = state.countries.filter(
          (region) => region.region === name
        );
      }

      return {
        ...state,
        filterCountries: tempCountry,
        isFilter: false,
        Region: name,
      };
    }

    default:
      return { ...state };
  }
};
