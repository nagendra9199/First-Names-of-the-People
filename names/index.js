const peopleNames = require("../country/state/city/index.js");
const getFirstNames = require("../utilities/util/index.js");

const getPeopleInCity = (peopleNames) => {
  return getFirstNames(peopleNames);
};

module.exports = getPeopleInCity;
