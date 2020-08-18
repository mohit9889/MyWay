const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    validate: (value) => /student|employee/i.test(value),
    default: "student",
    required: true,
  },
  emailVerified: {
    type: Boolean,
    default: false,
    required: true,
  },
  forgetPassRequest: {
    type: Date,
  },
});

module.exports = mongoose.model("user", userSchema);
