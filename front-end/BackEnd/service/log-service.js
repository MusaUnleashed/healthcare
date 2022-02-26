const helpers = require("./helpers");

const logService = {
  log: (req, res, next) => {
    console.log(`From Log Service  ${req.body}`);
  },
};

module.exports = logService;
