module.exports = app => {
    const order = require("../controllers/orderController.js");
  
    var router = require("express").Router();
      
    app.use('/api', router); 


    // Create a new User  //실제 접근 주소 http://~/api/join
    router.post("/neworder", order.create);

  };