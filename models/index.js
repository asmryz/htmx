const mongoose = require("mongoose");
const { Student } = require("./Student");
const { Mark } = require("./Mark");
const { Grade } = require("./Grade");
const { Head } = require("./Head");

(async () => {
  await mongoose.connect(`mongodb://127.0.0.1:27017/recapsheet`);
})();

module.exports = {
  Student,
  Mark,
  Grade,
  Head,
};
