const db = require("../models");
const Order = db.order;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate that request has valid jwt in header 
  
    // Create a order
    const order = {
      projectId : req.body.project_id,
      userId : req.body.user_id,
      money : req.body.money 
    };
  
    // Save order in the database
    Order.create(order)
      .then(data => {
        res.send(data);
        //res.redirect('/'+data.id) // ~.com/프로젝트 고유번호로 이동
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the order."
        });
      });
  };





