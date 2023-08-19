const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post("/createuser", [
  body('email', '@ must be present').isEmail(),
  body('password', 'Minimum password length is 5 and Password Should contain Letters and Numbers').isLength({ min: 5 }).isAlphanumeric(),
  body('name', 'This field should contain only Alphabets').isLength({ min: 5 }).isAlpha(), // Add isAlpha() to allow only alphabets
],
async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }
  try {
    await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      location: req.body.location
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

router.post("/loginuser", [
  body('email', '@ must be present').isEmail(),
  body('password', 'Minimum password length is 5 and Password Should contain Letters and Numbers').isLength({ min: 5 }).isAlphanumeric()
],
async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }
  let email = req.body.email;
  try {
    let userData = await User.findOne({ email });
    if (!userData) {
      return res.status(400).json({
        errors: "Trying logging with incorrect credentials"
      });
    }
    if (req.body.password !== userData.password) {
      return res.status(400).json({
        errors: "Trying logging with incorrect credentials"
      });
    }
    return res.json({ success: true });

  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
});

module.exports = router;
