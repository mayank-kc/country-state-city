import { ICountry, IState } from "./src/interface";
export { ICountry, IState } from "./src/interface";
declare const _default: {
    getAllCountries: () => ICountry[];
    getStatesOfCountry: (countryId: string) => IState[];
    getCitiesOfState: (stateId: string) => string[];
};
export default _default;
