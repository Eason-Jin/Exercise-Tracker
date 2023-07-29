const router = require("express").Router();
let User = require("../models/user.model");

// Get requests
// localhost:5000/users/
router.route("/").get((req, res) => {
  // Get a list of all users in json format
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Post requests
// localhost:5000/users/add
router.route("/add").post((req, res) => {
  const username = req.body.username;
  // Create new user
  const newUser = new User({ username });
  // Save user to database
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
