const User = require("../model/User");
const isValidEmail = require("../util/validator");
const bcrypt = require("bcrypt");

const generateHashedPassword = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 15);
    return hashedPassword;
  } catch {
    console.log("Error in Generating Hash");
    return undefined;
  }
};

const registerUser = async (req, res) => {
  const name = req.body.name,
    email = req.body.email,
    password = await generateHashedPassword(req.body.password);
  let role = req.body.role;
  role = role ? role : "student";

  if (!name || !email || !password || !isValidEmail(email) || !role) {
    return res.status(400).json({
      message: "Invalid Register Data",
    });
  }

  const user = new User({
    name: name,
    email: email,
    password: password,
    role: role,
  });

  user.save((err, result) => {
    if (err) {
      console.log(`We have an error in registering user in DB`, err);
      return res.status(500).json({
        message: `We have some error in registring user`,
        error: err,
      });
    }
    console.log(`user registered succesfully in DB`, result);
    return res.status(200).json({
      message: `User Succesfully Registered`,
      registeredUser: result,
      data: result,
    });
  });
};

module.exports = registerUser;
