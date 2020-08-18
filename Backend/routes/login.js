const User = require("../model/User");
const Jwt_Token = require("../model/jwtTokenSchema");
const getToken = require("../util/generateAccessToken");
const refreshToken = require("../util/getAccessToken");
const bcrypt = require("bcrypt");

const loginUser = (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(404).json({
      message: "Bad Request Please Try Again",
    });
  }

  User.findOne(
    {
      email: email,
    },
    async (err, existingUser) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Facing some server issues Please Try Again Later",
        });
      }

      if (!existingUser) {
        return res.status(401).json({
          message: "User Doesn't Exist Please SignUp",
        });
      }

      try {
        if (await bcrypt.compare(password, existingUser.password)) {
          existingUser = existingUser.toJSON();
          const accessToken = getToken(existingUser);
          const refToken = refreshToken(existingUser);

          const currToken = new Jwt_Token({
            token: refToken,
          });

          currToken
            .save()
            .then((value) => {
              console.log("Token Saved Successfully");
              return res.status(200).json({
                message: "SUCCESS, User Logged in succesfully",
                token: accessToken,
                refreshToken: refToken,
                user: existingUser,
              });
            })
            .catch((err) => {
              console.log("Facing error in saving token");
              return res.status(500).json({
                message: "MongoDb server error Please Try again Later",
              });
            });
        } else {
          return res.status(403).json({
            message: "Invalid Credentials, Please Try Again",
          });
        }
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          message: "Facing some error Please Try Again Later",
        });
      }
    }
  );
};

module.exports = loginUser;
