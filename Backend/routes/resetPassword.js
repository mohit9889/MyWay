const User = require("../model/User");
const { mailSender } = require("../util/mailSender");

const forgotPassword = (req, res) => {
  const { passwordDate } = req.body;
  const currDate = new Date(passwordDate);

  User.find({ forgetPassRequest: currDate }, (err, currUser) => {
    if (err) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
    User.updateOne(
      { forgetPassRequest: currDate },
      { emailVerified: true },
      (err, updatedUser) => {
        if (err) {
          res.status(500).json({
            message: "Internal Server Error",
          });
        }

        console.log("User Updated succesfully", currUser);
        res.status(200).json({
          message: "Password Reset Succesfully",
        });
      }
    );
  });
};

module.exports = forgotPassword;
