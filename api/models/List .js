const mongoose = require("mongoose");

const listSchem = new mongoose.Schema(
  {
    userId: { type: String, unique: true },
    content:{type:Array},
    isPayd:{type:Boolean}

},
  { timestamps: true }
);
module.exports = mongoose.model("List", listSchem);
