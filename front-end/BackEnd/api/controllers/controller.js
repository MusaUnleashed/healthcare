"use strict";
const arrayService = require("../../service/client-array-service");
const logService = require("../../service/log-service");
var controllers = {
  getArray: (req, res) => {
   return  arrayService.arrayServiceFunction(req, res, (err, dist) => {
      // if (err) res.send(err);
      return dist;
    });
  },
  log: (req, res) => {
    logService.log(req, res, (err, dist) => {
      if (err) res.send(err);
      res.json(dist);
    });
    res.send("Ok From Log Inside Controller");
  },
};

module.exports = controllers;
