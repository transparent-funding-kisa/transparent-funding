const db = require("../models");
const Project = db.project;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate that request has valid jwt in header 
  
    // Create a project
    const project = {
      title: req.body.title,
      userId: req.body.userId,
      content: req.body.content,
      goal: req.body.goal
    };
  
    // Save project in the database
    Project.create(project)
      .then(data => {
        res.send(data);
        //res.redirect('/'+data.id) // ~.com/프로젝트 고유번호로 이동
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the project."
        });
      });
  };





