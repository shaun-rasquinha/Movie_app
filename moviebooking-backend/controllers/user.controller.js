const db = require("../models");
const User = db.users;
const { v4: uuidv4 } = require("uuid");
const TokenGenerator = require("uuid-token-generator");
const tokgen = new TokenGenerator(256, TokenGenerator.BASE62);

// Sign up a new user
exports.signUp = (req, res) => {
  const user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    uuid: uuidv4(),
    access_token: tokgen.generate()
  });

  user
    .save(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User."
      });
    });
};

// Log in an existing user
exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email, password: password })
    .then(data => {
      if (!data) {
        return res.status(401).send({
          message: "Invalid email or password!"
        });
      }
      res.send({
        uuid: data.uuid,
        access_token: data.access_token
      });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error logging in user"
      });
    });
};

// Log out a user
exports.logout = (req, res) => {
  const { uuid } = req.body;

  User.findOneAndUpdate({ uuid: uuid }, { access_token: "" }, { new: true })
    .then(data => {
      if (!data) {
        return res.status(404).send({
          message: "User not found!"
        });
      }
      res.send({ message: "Logged out successfully!" });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error logging out user"
      });
    });
};
