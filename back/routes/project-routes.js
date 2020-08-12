module.exports = app => {
    const project = require("../controllers/projectContoller.js");
  
    var router = require("express").Router();
      
    app.use('/api', router); 

    // Create a new User  //실제 접근 주소 http://~/api/join
    router.post("/newProject", project.create);

  };