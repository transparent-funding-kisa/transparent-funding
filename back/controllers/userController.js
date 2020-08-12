const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const jwt = require('jsonwebtoken');
const secretKey = require("../config/jwtKey.js").key;

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
    
    User.findOne({ where: { email: email } })
      .then(data => {
        if (data.password === password) {
          const token = jwt.sign({userNumber: data.id, userEmail: data.email}, secretKey, {expiresIn : '30d'});         
          res.send(token);}
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




