import countryList from "./lib/country.json";
import stateList from "./lib/state.json";
import { ICountry, IState } from "./src/interface";
import cityList from "./lib/city.json";

export { ICountry, IState } from "./src/interface";

export default {
  getAllCountries: function(): ICountry[] {
    return countryList;
  },
  getStatesOfCountry: function(countryId: string): IState[] {
    return stateList[countryId];
  },
  getCitiesOfState: function(stateId: string): string[] {
    return cityList[stateId]
  },
};
