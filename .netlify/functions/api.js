const axios = require("axios");
// process.env.REACT_APP_CRYPTO,

exports.handler = async function (event, context) {
  // const response = await axios.get(`${process.env.REACT_APP_CRYPTO}`);
  return {
    statusCode: 200,
    body: JSON.stringify({ key: process.env.REACT_APP_CRYPTO }),
  };
};
