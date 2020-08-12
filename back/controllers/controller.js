const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.signup = (req, res) => {
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

  exports.signin = (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    console.log(email);
    
    User.findOne({ where: { email: email } })
      .then(data => {
        if (data.password === password) {
        res.send("유저 고유번호: " + data.id, data.email);} // session.save(data.id, data.user) or make jwt
        else res.send({
          message: "password is not matche with email = " + email
        })
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({
          message: err
        });
      });
  };




