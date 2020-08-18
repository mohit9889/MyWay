const Jwt_Token = require("../model/jwtTokenSchema");

const logout = (req, res) => {
  const { token } = req.body;

  Jwt_Token.deleteOne(
    {
      token: token,
    },
    (err) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "MongoDb server Error Please Logout Again",
        });
      }
    }
  );

  return res.status(200).json({
    message: "User logged out successfully",
    data: "User Logged Out Succesfully",
  });
};

module.exports = logout;
