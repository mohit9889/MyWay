const express = require("express");
const router = express.Router();

//Import Routes
const signUp = require("./signup");
const login = require("./login");
const logout = require("./logout");
const resetPassword = require("./resetPassword");
const forgotPassword = require("./forgotPassword");

//Routes
router.post("/signup", signUp);
router.post("/login", login);
router.delete("/logout", logout);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
