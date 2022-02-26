const path = require("path");
const bodyParser = require("body-parser");

const express = require("express");
const app = express();

const { serverPort } = require("./src/config");
const WebSocket = require("ws");
const port = process.env.PORT || serverPort;

// this load the react app
app.use(express.static(path.join(__dirname, "build")));

const controller = require("./BackEnd/api/controllers/controller");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  next();
});

const routes = require("./BackEnd/api/routes/routes");
routes(app);

const server = app.listen(port, () => {
  console.log(`Listening to port http://localhost:${port}`);
});

// webSocket Connection
const wss = new WebSocket.Server({ server: server });

wss.on("connection", function connection(ws) {
  console.log("A new client Connected!");
  ws.send("Welcome New Client!");

  ws.on("message", function incoming(message) {
    const inputMessage = JSON.parse(message);
    const { num, type } = inputMessage;

    if (type == "getArray") {
      const arr = controller.getArray(num);
      ws.send(JSON.stringify({ arr, type: "getArrayResponse" }));
    }

    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send("replay from server", message);
      }
    });
  });
});
