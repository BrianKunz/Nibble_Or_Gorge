const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

router.get("/signup", (req, res) => {
  res.render("user/Signup")
})

router.get("/login", (req, res) => {
  res.render("user/Login")
})

router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(
      password,
      await bcrypt.genSalt(10)
    );
    const createdUser = await User.create({ email, password: hashedPassword });
    res.redirect("/user/login");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const foundUser = await User.findOne({ email });
    const result = await bcrypt.compare(password, foundUser.password);

    if (result) {
      req.session.email = foundUser.email;
      req.session.loggedIn = true;
      res.redirect("/recipes");
    } else {
      res.json({ error: "password doesn't match" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
});

module.exports = router;