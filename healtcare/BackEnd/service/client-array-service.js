const request = require("request");
const helpers = require("./helpers");
const { generateArray } = helpers;

var arrayService = {
  arrayServiceFunction: (req, res, next) => {
    const num = Number(req);

    if (helpers.numIsValid(num)) {
      const arr = generateArray(num);
      helpers.sendArrayToLog(arr, (logArrResponse) => {
        // console.log("callBack inside  arrayService to log ", logArrResponse);
      });

      return arr;
    } else {
      return "Number is Not Valid";
    }
  },
};

module.exports = arrayService;
