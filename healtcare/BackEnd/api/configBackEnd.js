const HOST = "localhost";
const PREFIXURL = "http://";
const port = 3000;
module.exports = {
  serverPort: port,
  pathToLog: `${PREFIXURL}${HOST}:${port}/log`,
  pathToClientArrService: `${PREFIXURL}/${HOST}/arrays`,
};
