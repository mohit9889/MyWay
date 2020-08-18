const mongoose = require("mongoose");

const jwtTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
});

module.exports = mongoose.model("JwtToken", jwtTokenSchema);
