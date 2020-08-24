const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();



const corsOptions={
  origin : true,
  credentials :true
};


app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// connect db
const db = require("./models");
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to main page" });
});


require("./routes/user-routes")(app);
require("./routes/project-routes")(app);
require("./routes/order-routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});