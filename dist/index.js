"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var country_json_1 = __importDefault(require("./lib/country.json"));
var state_json_1 = __importDefault(require("./lib/state.json"));
var city_json_1 = __importDefault(require("./lib/city.json"));
exports.default = {
    getAllCountries: function () {
        return country_json_1.default;
    },
    getStatesOfCountry: function (countryId) {
        return state_json_1.default[countryId];
    },
    getCitiesOfState: function(stateId) {
        return city_json_1.default[stateId];
    },
};
