const { pathToLog } = require("../api/configBackEnd");
console.log(pathToLog);
// const pathToLog = "http://localhost:3000/log";
const axios = require("axios");

const numIsValid = (num) => {
  if (!num || num < 1 || num > 1000 || isNaN(num)) {
    return false;
  }
  return true;
};
const generateArray = (num) => {
  const array = [];
  while (num > 1) {
    array.push(--num);
  }
  return array;
};
const sendArrayToLog = (arr, callback) => {
  try {
    axios({
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      url: pathToLog,
      data: JSON.stringify(arr),
    }).then((response) => {
      callback(response.data);
    });
  } catch (e) {
    console.log("Error in sendArrayToLog");
  }
};
module.exports = {
  numIsValid,
  generateArray,
  sendArrayToLog,
};
