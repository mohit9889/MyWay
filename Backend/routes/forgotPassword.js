const User = require("../model/User");
const { mailSender } = require("../util/mailSender");

const forgotPassword = (req, res) => {
  const { email } = req.body;

  const currDate = Date.now();

  User.find({ email: email }, (err, currUser) => {
    if (err) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
    const message = `Please go through this url to resset Password frontendurl?date=${currDate}`;
    mailSender(message, email);

    User.updateOne(
      { email: email },
      { forgetPassRequest: currDate },
      (err, updatedUser) => {
        if (err) {
          res.status(500).json({
            message: "Internal Server Error",
          });
        }

        console.log("User Updated succesfully", currUser);
        res.status(200).json({
          message: "Mail Sent Succesfully",
        });
      }
    );
  });
};

module.exports = forgotPassword;
