const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Input validation
const validateRegister = require("../user-validation/register");
const validateLogin = require("../user-validation/login");

const User = require("../models/User");

// POST /users/register
router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegister(req.body);

  //validate registration
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Check if email is in db
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      });

      // Encrypt password before saving in db
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;

          newUser
            .save()
            .then((user) => {
              const payload = { user };

              // Sign token
              // Save key to an env file later
              jwt.sign(
                payload,
                "secret",
                {
                  expiresIn: 31556926, // 1 year in seconds
                },
                (err, token) => {
                  let responseObj = { user: user, token: `Bearer ${token}` };
                  res
                    .status(201)
                    .cookie("token", token, { httpOnly: true })
                    .json(responseObj);
                }
              );
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// POST /users/login
router.post("/login", (req, res) => {
  const { errors, isValid } = validateLogin(req.body);

  // Validate Login
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = { user };

        // Sign token
        // Save key to an env file later
        jwt.sign(
          payload,
          "secret",
          {
            expiresIn: 31556926, // 1 year in seconds
          },
          (err, token) => {
            let responseObj = { user: user, token: `Bearer ${token}` };
            res.cookie("token", token, { httpOnly: true }).json(responseObj);
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

module.exports = router;
