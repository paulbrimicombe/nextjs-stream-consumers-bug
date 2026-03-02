const { json } = require("node:stream/consumers");

module.exports = async () => {
  const response = await fetch("https://dummyjson.com/http/200");
  return response.body ? await json(response.body) : null;
};
