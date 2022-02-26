const controller = require("../controllers/controller");

module.exports = (app) => {

  app.route("/arrays/:num").post(controller.getArray);
  
  app.route("/log").post(controller.log);
  
};
