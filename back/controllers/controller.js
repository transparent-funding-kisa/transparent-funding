const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.email) {
      res.status(400).send({
        message: "Email can not be empty!"
      });
      return;
    }
  
    // Create a User
    const user = {
      name : req.body.name,
      email: req.body.email,
      password: req.body.password,
      money: 10000
    };
  
    // Save User in the database
    User.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
  };




