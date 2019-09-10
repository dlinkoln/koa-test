const config = require("config");
const mongoose = require("mongoose");
const beautifulUnique = require("mongoose-beautiful-unique-validation");

mongoose.connect(
  config.get("databaseUrl"),
  {
    useNewUrlParser: true,
    useCreateIndex: true
  },
  err => {
    if (err) throw new Error("Connected with db is faild");
    console.log("connected");
  }
);
mongoose.plugin(beautifulUnique);

module.exports = mongoose;
