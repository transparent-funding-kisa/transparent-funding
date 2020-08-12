module.exports = app => {
    const users = require("../controllers/controller.js");
  
    var router = require("express").Router();
  
    //해당 라우터에서 기본으로 사용할 주소 ex:/api/users', 
    app.use('/api', router); 

    // Create a new User  //실제 접근 주소 http://~/api/join
    router.post("/signup", users.signup);

    router.post("/signin", users.signin);

    

  };