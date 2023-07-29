const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    // Define type username, it is a string, is required, is unique, trim is applied and 3 chars long min
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    // When it is created and modified
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
