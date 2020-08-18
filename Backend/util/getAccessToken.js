const jwt = require('jsonwebtoken');

const getAccessToken = (user) => jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);

module.exports = getAccessToken;