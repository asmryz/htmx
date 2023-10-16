const axios = require("axios");

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: "http://app:9001",
});

exports.api = instance;
